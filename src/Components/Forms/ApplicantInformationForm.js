import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Grid } from "@material-ui/core";
import '../../Styles/GenearlizeStyle/style.css';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns'
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { ApplicantInformation } from '../../Store/Actions/applicantAction';
import * as yup from 'yup';
import { applicantInformationSheema } from '../../Helpers/Validator/validator';
import { useHistory, useParams, useLocation } from "react-router";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function ApplicantInformationForm(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(true);
    const classes = useStyles();
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [sex, setSex] = useState('');
    const [title, setTitle] = useState('');
    const [errorHandling, setErrorHnandling] = useState('');
    const history = useHistory();
    const params = useParams()
    const location = useLocation()
    const editableApplicationInformation = location.state
    const [value, setValue] = useState('')

    useEffect(() => {
        if (editableApplicationInformation && editableApplicationInformation) {
            updateApplicantInformation()
        }
    }, [])

    // FUNCTION TO SET THE VALUE FOR UPDATE PURPOSE
    const updateApplicantInformation = () => {
        setFirstName(editableApplicationInformation.ap.firstName)
        setMiddleName(editableApplicationInformation.ap.middleName)
        setSecondName(editableApplicationInformation.ap.secondName)
        setSex(editableApplicationInformation.ap.sex)
        setTitle(editableApplicationInformation.ap.title)
        setDateOfBirth(editableApplicationInformation.ap.dateOfBirth)
    }

    // FUNCTION TO SAVE THE APPLICANT INFPORMATION AND DISPATCH IT TO STORE
    console.log(dateOfBirth)
    const saveApplicantInformation = async (e) => {
        e.preventDefault();
        let data = { firstName, middleName, secondName, sex, title, dateOfBirth }

        // HERE WE ARE VALIDATING THE APPLICANT INFORMATION USING YUP
        await applicantInformationSheema.strict().validate(data).then(res => {
            console.log("Response====>", res)

            // AFTER SUCCESS WE DSIPATCHED IT TO STORE
            dispatch(ApplicantInformation(res))
            history.push('/contact-information')
        })
            .catch((err) => {
                console.log("Error====>", { err })
                document.querySelectorAll(".error-msg").forEach((i) => { i.innerHTML = "" })
                document.querySelector(`#${err.path}`).innerHTML = err.message
                setErrorHnandling(err.message)
            })
    }
    return <>
        <div className="light-gray-bg-color">

            <Grid container>
                <Grid item xs={12}>
                    <div className="applicant-information">
                        <h1 className="main-section-font-color applicant-text-h1">Applicant Information</h1>
                        <p className="font-gray required-text">* Required field</p>
                    </div>
                </Grid>
            </Grid>

            <div className={classes.root}>
                <div className="form-wrapper">
                    <form noValidate autoComplete="off" onSubmit={saveApplicantInformation}>
                        <Grid container className="white-bg-color form-grid">
                            <Grid item xs={12}>
                                <div className="guidelines-text-wrapper">
                                    <h3 className="guidelines-text-h3 main-section-font-color">Enter your name as it appears on your medicare card</h3>
                                </div>
                            </Grid>

                            <Grid item lg={6} sm={6} xs={12} item>
                                <FormControl className="field-wrapper">
                                    <FormLabel className="main-section-font-color label">First name *</FormLabel>

                                    <TextField value={firstName} className="custom-text-box" placeholder="Enter your first name" variant="outlined" onChange={(e) => { setFirstName(e.target.value) }} />
                                    <div id="firstName" className="red-text error-msg"></div>
                                </FormControl>

                            </Grid>
                            <Grid item lg={6} sm={6} xs={12} item>
                                <FormControl className="field-wrapper">
                                    <FormLabel className="main-section-font-color label">Middle name *</FormLabel>

                                    <TextField value={middleName} className="custom-text-box" placeholder="Enter your middle name" variant="outlined" onChange={(e) => { setMiddleName(e.target.value) }} />
                                    <div id="middleName" className="red-text error-msg"></div>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6} sm={6} xs={12}>
                                <FormControl className="field-wrapper">
                                    <FormLabel className="main-section-font-color label">Second name *</FormLabel>
                                    <TextField value={secondName} className="custom-text-box" placeholder="Enter your second name" variant="outlined" onChange={(e) => { setSecondName(e.target.value) }} />
                                    <div id="secondName" className="red-text error-msg"></div>
                                </FormControl>
                            </Grid>
                            <Grid lg={6} sm={6} xs={12} item></Grid>
                            <Grid lg={4} md={6} item xs={12}>

                                <FormControl component="fieldset" className="field-wrapper">
                                    <FormLabel className="main-section-font-color label">Sex *</FormLabel>
                                    <RadioGroup value={sex} row aria-label="position" name="position" defaultValue="top" onChange={(e) => { setSex(e.target.value) }}>

                                        <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />

                                    </RadioGroup>
                                    <div id="sex" className="red-text error-msg"></div>
                                </FormControl>
                            </Grid>
                            <Grid lg={4} md={6} item xs={12}>
                                <FormControl component="fieldset" className="field-wrapper">
                                    <FormLabel className="main-section-font-color label">Title</FormLabel>
                                    <RadioGroup value={title} row aria-label="position" name="position" defaultValue="top" onChange={(e) => { setTitle(e.target.value) }}>

                                        <FormControlLabel value="Mr" control={<Radio color="primary" />} label="Mr." />
                                        <FormControlLabel value="Mrs" control={<Radio color="primary" />} label="Mrs." />
                                        <FormControlLabel value="Ms" control={<Radio color="primary" />} label="Ms." />
                                    </RadioGroup>
                                    <div id="title" className="red-text error-msg"></div>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} lg={4} md={6} className="date-picker-grid">
                                <FormLabel className="main-section-font-color label">Date of birth *</FormLabel>
                                <MuiPickersUtilsProvider utils={DateFnsUtils} className="date-border">
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        placeholder="DD/MM/YYYY"
                                        value={dateOfBirth}
                                        onChange={(e) => {setDateOfBirth(e)}}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                                <div id="dateOfBirth" className="red-text error-msg"></div>

                            </Grid>

                        </Grid>
                    </form>
                    <Grid item xs={12} className="home-next-btn-wrapper">
                        <button type="submit" className="home-next-btn" onClick={saveApplicantInformation}><h2 className="next-btn-h2">Next</h2></button>
                    </Grid>
                </div>
            </div>
        </div>
    </>
}