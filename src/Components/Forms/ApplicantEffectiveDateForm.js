
import '../../Styles/GenearlizeStyle/style.css';
import "../../Styles/ApplicantEffectiveDateStylings/style.css";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applicantEffectiveDateScheema } from '../../Helpers/Validator/validator';
import { ApplicantEffectiveDate } from '../../Store/Actions/applicantAction';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function ApplicantEffectiveDateForm() {
    const classes = useStyles();
    const [appliantEffectiveDate, setApplicantEffectiveDate] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    // FUNCTION TO SAVE THE APPLICANT EFFECTIVE DATE
    const saveApplicantEffectiveDate = async (e) => {
        e.preventDefault();
        let data = { appliantEffectiveDate }
        console.log(data)

        // VALIDATION USING YUP
        await applicantEffectiveDateScheema.strict().validate(data).then(res => {
            console.log(res)

            // DISPATCH THE DATA TO REDUX STORE
            dispatch(ApplicantEffectiveDate(res))
            history.push("/applicant-signature")
        })
            .catch(err => {
                console.log(err)
                document.querySelectorAll(".error-msg").forEach((i) => { i.innerHTML = "" })
                document.querySelector(`#${err.path}`).innerHTML = err.message

            })
    }
    return <>
        <div className="light-gray-bg-color">

            <Grid container>
                <Grid item xs={12}>
                    <div className="applicant-information">
                        <h1 className="main-section-font-color applicant-text-h1">Application Effective Date</h1>

                    </div>
                </Grid>
            </Grid>

            <div className={classes.root}>
                <div className="form-wrapper">
                    <form noValidate autoComplete="off" onSubmit={saveApplicantEffectiveDate}>
                        <Grid container className="white-bg-color form-grid">
                            <Grid xs={12} item>
                                <div id="appliantEffectiveDate" className="red-text error-msg"></div>
                                <div className="applicant-effective-date-radio">
                                    <label className="labl">
                                        <input type="radio" name="radioname" value="09/01/2021" onChange={(e) => { setApplicantEffectiveDate(e.target.value) }} />
                                        <div>
                                            <p className="main-section-font-color radio-option-text">09/01/2021</p>
                                        </div>
                                    </label>
                                    <label className="labl">
                                        <input type="radio" name="radioname" value="10/01/2021" onChange={(e) => { setApplicantEffectiveDate(e.target.value) }} />
                                        <div>
                                            <p className="main-section-font-color radio-option-text">10/01/2021</p>

                                        </div>
                                    </label>
                                    <label className="labl">
                                        <input type="radio" name="radioname" value="11/01/2021" onChange={(e) => { setApplicantEffectiveDate(e.target.value) }} />
                                        <div>
                                            <p className="main-section-font-color radio-option-text">11/01/2021</p>
                                        </div>
                                    </label>


                                </div>
                            </Grid>
                        </Grid>
                    </form>
                    <div className="btn-container">
                        <div>
                            <Link to="/applicant-review">
                                <button type="button" className="back-btn"><h2>Back</h2></button>
                            </Link>
                        </div>
                        <div className="next-btn-wrapper">

                            <button type="submit" className="next-btn" onClick={saveApplicantEffectiveDate}><h2 className="next-btn-h2">Next</h2></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}