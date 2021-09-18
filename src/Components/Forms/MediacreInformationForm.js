import {
    FormControl,
    FormLabel,
    FormControlLabel,
    TextField,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import '../../Styles/GenearlizeStyle/style.css';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { MedicareInformation } from '../../Store/Actions/applicantAction';
import { medicareInformationScheema } from '../../Helpers/Validator/validator';
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function MedicareInformationForm() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [medicareNumber, setMedicareNumber] = useState(null);
    const [medicarePartAStartDate, setMedicarePartAStartDate] = useState('');
    const [medicarePartBStartDate, setMediacrePartBStartDate] = useState('');
    const [errorHandling, setErrorHnandling] = useState('');
    const history = useHistory();
    const location = useLocation();
    const editableMedicareInformation = location.state
 
    useEffect(() => {
        if(editableMedicareInformation){
            updateMedicareInformation()
        }
    }, [])
    const updateMedicareInformation = () => {
        setMedicareNumber(editableMedicareInformation.mi.medicareNumber)
        setMedicarePartAStartDate(editableMedicareInformation.mi.medicarePartAStartDate)
        setMediacrePartBStartDate(editableMedicareInformation.mi.medicarePartBStartDate)
    }
    // FUNCTION TO SAVE THE MEDICARE INFPORMATION AND DISPATCH IT TO STORE
    const saveMedicareInformation = async (e) => {
        e.preventDefault();
        let data = { medicareNumber, medicarePartAStartDate, medicarePartBStartDate }

        // HERE WE ARE VALIDATING THE MEDICARE INFORMATION
        await medicareInformationScheema.strict().validate(data).then(res => {
            console.log("Response====>", res)
            // AFTER SUCCESS WE DSIPATCHED IT TO STORE
            dispatch(MedicareInformation(data))
            history.push('/eligibility-questions')
        })
            .catch((err) => {
                console.log("Error====>", { err })
                document.querySelectorAll(".error-msg").forEach((i) => { i.innerHTML = "" })
                if(document.querySelector(`#${err.path}`))
                    document.querySelector(`#${err.path}`).innerHTML = err.message
                setErrorHnandling(err.message)
            })
    }
    return <>
        <div className="light-gray-bg-color">

            <Grid container>
                <Grid item xs={12}>
                    <div className="applicant-information">
                        <h1 className="main-section-font-color applicant-text-h1">Medicare Information</h1>
                        <p className="font-gray required-text">* Required field</p>
                    </div>
                </Grid>
            </Grid>

            <div className={classes.root}>
                <div className="form-wrapper">
                    <form noValidate autoComplete="off" onSubmit={saveMedicareInformation}>
                        <Grid container className="white-bg-color form-grid align-items-center">
                            <Grid lg={6} md={6} sm={12} xs={12} item>

                                <Grid item sm={12} xs={12}>
                                    <FormControl className="field-wrapper">
                                        <FormLabel className="main-section-font-color label">Medicare number *</FormLabel>

                                        <TextField value={medicareNumber} className="custom-text-box" placeholder="Enter your medicare number" variant="outlined" onChange={(e) => { setMedicareNumber(e.target.value) }} />
                                        <div id="medicareNumber" className="red-text error-msg"></div>
                                    </FormControl>

                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <FormControl className="field-wrapper">
                                        <FormLabel className="main-section-font-color label">Medicare (Part-A) start date</FormLabel>

                                        <TextField value={medicarePartAStartDate} className="custom-text-box" placeholder="Enter your medicare (Part-A) start date" variant="outlined" onChange={(e) => { setMedicarePartAStartDate(e.target.value) }} />
                                        <div id="medicarePartAStartDate" className="red-text error-msg"></div>
                                    </FormControl>
                                </Grid>
                                <Grid item sm={12}>
                                    <FormControl className="field-wrapper">
                                        <FormLabel className="main-section-font-color label">Medicare (Part-B) start date</FormLabel>
                                        <TextField value={medicarePartBStartDate} className="custom-text-box" placeholder="Enter your medicare (Part-B) start date" variant="outlined" onChange={(e) => { setMediacrePartBStartDate(e.target.value) }} />
                                        <div id="medicarePartBStartDate" className="red-text error-msg"></div>
                                    </FormControl>
                                </Grid>

                            </Grid>
                            <Grid item lg={6} md={6} sm={12}>
                                <div className="medicareCardImageWrapper">
                                    <img src="images/MedicareHealthInsurance.png" className="medicareCardImage" alt="Medicare Card Image"/>
                                </div>
                            </Grid>
                            <Grid item sm={12}>
                                <div className="notronWrapper">
                                    <img src="images/Norton.png" alt="Norton"/>

                                    <p className="poweredByDigcent">powered by &nbsp;<a href="https://www.digicert.com" target="_blank"><span className="font-sky">digciert</span></a></p>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                    <div className="btn-container">
                        <div>
                            <Link to="/contact-information">
                                <button type="button" className="back-btn"><h2>Back</h2></button>
                            </Link>
                        </div>
                        <div className="next-btn-wrapper">
                            
                                <button type="submit" className="next-btn" onClick={saveMedicareInformation}><h2 className="next-btn-h2">Next</h2></button>
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}