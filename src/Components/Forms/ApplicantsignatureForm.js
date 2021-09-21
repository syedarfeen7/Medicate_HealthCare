import { Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import '../../Styles/GenearlizeStyle/style.css';
import '../../Styles/EligibilityQuestionsStyling/style.css';
import '../../Styles/ApplicantSignatureStyling/style.css';
import { ApplicantSignature } from '../../Store/Actions/applicantAction';
import { applicantSignatureScheema, applicantAuthorizedScheema } from '../../Helpers/Validator/validator';
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    TextField,
    Dialog
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function ApplicantSignatureForm() {
    const classes = useStyles();
    const history = useHistory()
    const [appplicantSignatureMMethod, setApplicantSignatureMethod] = useState('');
    const [applicantAuthorized, setApplicantAuthorized] = useState('')
    const [signature, setSignature] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [relationshipToEnrolle, setRelationshiptoEnrolle] = useState('');
    const [street, setStreet] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [acknowledge, setAcknowledge] = useState('')
    const [submissionTime, setsubmissionTime] = useState(new Date())
    const dispatch = useDispatch()

    const abc = () => {
        setApplicantAuthorized('')

    }
    //  FUNCTION TO SAVE THE APPLICANT SIGNATURE DETAILS
    const saveApplicantSignature = async (e) => {
        e.preventDefault()
        let data = { appplicantSignatureMMethod, applicantAuthorized, firstName, secondName, submissionTime, relationshipToEnrolle, street, state, city, zipCode, phoneNumber, acknowledge, signature }

        // VALIDATION USING YUP
        await applicantSignatureScheema.strict().validate(data).then(res => {
            console.log(res)

            // AFTER VALIDATE WE DIPATCHED THE DATA TO REDUX STORE
            if (applicantAuthorized) {
                if (applicantAuthorized && firstName && secondName && relationshipToEnrolle && street && state && city && zipCode && acknowledge && signature) {

                    dispatch(ApplicantSignature(res))
                    history.push("/enrollment-completed")
                }
            }
            else {
                dispatch(ApplicantSignature(res))
                history.push("/enrollment-completed")

            }
        })
            .catch(err => {
                console.log(err)
                document.querySelectorAll(".error-msg").forEach((i) => { i.innerHTML = "" })
                if (document.querySelector(`#${err.path}`))
                    document.querySelector(`#${err.path}`).innerHTML = err.message
            })
        if (applicantAuthorized) {
            await applicantAuthorizedScheema.strict().validate(data).then(res => {

            })
                .catch(err => {
                    console.log(err)
                    document.querySelectorAll(".error-msg").forEach((i) => { i.innerHTML = "" })
                    if (document.querySelector(`#${err.path}`))
                        document.querySelector(`#${err.path}`).innerHTML = err.message
                })
        }

    }
    return <>
        <div className="light-gray-bg-color">

            <Grid container>
                <Grid item xs={12}>
                    <div className="applicant-information">
                        <h1 className="main-section-font-color applicant-text-h1">Application Signature</h1>
                        <p className="font-gray required-text">* Required field</p>
                    </div>
                </Grid>
            </Grid>

            <div className={classes.root}>
                <div className="form-wrapper">
                    <form noValidate autoComplete="off" onSubmit={saveApplicantSignature}>
                        <Grid container className="white-bg-color form-grid">
                            <Grid xs={12} item>
                                <div id="appplicantSignatureMMethod" className="red-text error-msg"></div>
                                <div className="applicant-effective-date-radio">
                                    <label className="labl">
                                        <input type="radio" onClick={abc} name="radioname" value="I am completing this enrollment form on my own" onChange={(e) => { setApplicantSignatureMethod(e.target.value) }} />
                                        <div>
                                            <p className="main-section-font-color radio-option-text">I am completing this enrollment form on my own</p>
                                        </div>
                                    </label>
                                    <label className="labl">
                                        <input type="radio" name="radioname" value="I am an authorized representative to act on behalf of the individual listed on this enrollment application" onChange={(e) => { setApplicantAuthorized(e.target.value) }} />
                                        <div>
                                            <p className="main-section-font-color radio-option-text">I am an authorized representative to act on behalf of the individual listed on this enrollment application</p>

                                        </div>
                                    </label>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} style={{ marginTop: '2rem' }}>
                                <div className={classes.root}>
                                    {applicantAuthorized
                                        ?
                                        <>
                                            <Accordion className="accordion">
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography><h3 className="main-section-font-color accordionHeading">Authorized individual / volunteer</h3></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Grid container>

                                                        <Grid item lg={6} sm={6} xs={12} item>
                                                            <FormControl className="field-wrapper">
                                                                <FormLabel className="main-section-font-color label">First name *</FormLabel>

                                                                <TextField value={firstName} className="custom-text-box" placeholder="Enter your first name" variant="outlined" onChange={(e) => { setFirstName(e.target.value) }} />
                                                                <div id="firstName" className="red-text error-msg"></div>
                                                            </FormControl>
                                                        </Grid>

                                                        <Grid item lg={6} sm={6} xs={12} item>
                                                            <FormControl className="field-wrapper">
                                                                <FormLabel className="main-section-font-color label">Second name *</FormLabel>

                                                                <TextField value={secondName} className="custom-text-box" placeholder="Enter your second name" variant="outlined" onChange={(e) => { setSecondName(e.target.value) }} />
                                                                <div id="secondName" className="red-text error-msg"></div>

                                                            </FormControl>
                                                        </Grid>


                                                        <Grid lg={6} sm={6} xs={12} item>
                                                            <FormControl className="field-wrapper">
                                                                <FormLabel className="main-section-font-color label">Relationship to enrollee *</FormLabel>

                                                                <TextField value={relationshipToEnrolle} className="custom-text-box" placeholder="Enter your relationship to enrollee" variant="outlined" onChange={(e) => { setRelationshiptoEnrolle(e.target.value) }} />
                                                                <div id="relationshipToEnrolle" className="red-text error-msg"></div>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid lg={6} sm={6} xs={12} item className="hide-grid-city"></Grid>

                                                        <Grid item lg={6} sm={6} xs={12} item>
                                                            <FormControl className="field-wrapper">
                                                                <FormLabel className="main-section-font-color label">Street *</FormLabel>
                                                                <TextField value={street} className="custom-text-box" placeholder="Enter your street" variant="outlined" onChange={(e) => { setStreet(e.target.value) }} />
                                                                <div id="street" className="red-text error-msg"></div>

                                                            </FormControl>
                                                        </Grid>

                                                        <Grid item lg={6} sm={6} xs={12} item>
                                                            <FormControl className="field-wrapper">
                                                                <FormLabel className="main-section-font-color label">State *</FormLabel>
                                                                <TextField value={state} className="custom-text-box" placeholder="Enter your state" variant="outlined" onChange={(e) => { setState(e.target.value) }} />
                                                                <div id="state" className="red-text error-msg"></div>

                                                            </FormControl>
                                                        </Grid>




                                                        <Grid item lg={6} sm={6} xs={12} >
                                                            <FormControl className="field-wrapper">
                                                                <FormLabel className="main-section-font-color label">City *</FormLabel>
                                                                <TextField value={city} className="custom-text-box" placeholder="Enter your city" variant="outlined" onChange={(e) => { setCity(e.target.value) }} />
                                                                <div id="city" className="red-text error-msg"></div>
                                                            </FormControl>
                                                        </Grid>

                                                        <Grid item lg={6} sm={6} xs={12} >
                                                            <FormControl className="field-wrapper">
                                                                <FormLabel className="main-section-font-color label">Zip Code *</FormLabel>
                                                                <TextField value={zipCode} className="custom-text-box" placeholder="Enter your zip code" variant="outlined" onChange={(e) => { setZipCode(e.target.value) }} />
                                                                <div id="zipCode" className="red-text error-msg"></div>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item lg={6} sm={6} xs={12} >
                                                            <FormControl className="field-wrapper">
                                                                <FormLabel className="main-section-font-color label">Phone number</FormLabel>
                                                                <TextField value={phoneNumber} className="custom-text-box" placeholder="Enter your phonr number" variant="outlined" onChange={(e) => { setPhoneNumber(e.target.value) }} />
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid lg={6} sm={6} xs={12} item className="hide-grid-city"></Grid>

                                                        <Grid xs={12} item>
                                                            <div>
                                                                <p className="main-section-font-color authorizedText">If you have been authorized to complete this application on behalf of the individual listed on this application, under the laws of the state in which this individual resides, you must provide the following information. Upon request, you must be able to present UnitedHealthcare and/or Medicare with documentation of your authority to represent the individual listed on this application.</p>
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                </AccordionDetails>
                                            </Accordion>
                                        </>
                                        :
                                        <></>
                                    }

                                </div>
                            </Grid>
                        </Grid>
                        <Grid containerF className="white-bg-color form-grid" style={{ marginTop: '2rem' }}>
                            <Grid item sm={12} style={{ marginTop: '2rem' }}>
                                <div className={classes.root}>
                                    <div className="agreement">
                                        <h3 className="main-section-font-color">Agreements</h3>
                                        <br />
                                        <h3 className="main-section-font-color">Important Information Statement – MA/MAPD </h3>
                                        <br />
                                        <p className="main-section-font-color">I must keep both Hospital (Part A) and Medical (Part B) to stay in.</p>
                                        <br /><br />
                                        <p className="main-section-font-color">By joining this Medicare Advantage Plan, I acknowledge that  will share my information with Medicare, who may use it
                                            to track my enrollment, to make payments, and for other purposes allowed by Federal law that authorize the collection of this information (see Privacy Act Statement below).</p>
                                        <br />
                                        <p className="main-section-font-color"> Your response to this form is voluntary.However, failure to respond may affect enrollment in the plan.
                                            The information on this enrollment form is correct to the best of my knowledge.</p>
                                        <br />
                                        <p className="main-section-font-color">
                                            I understand that if I intentionally provide false information on this form, I will be disenrolled from the plan.I understand that people with Medicare are generally not covered under Medicare while out of the country, except for limited coverage near the U.S.border.I understand that when my  coverage begins, I must get all of my medical and prescription drug benefits from .Benefits and services provided by  and contained in my  “Evidence of Coverage” document (also known as a member contract or subscriber agreement) will be covered.Neither Medicare nor will pay for benefits or services that are not covered.
                                        </p>
                                        <br />


                                        <p className="main-section-font-color">
                                            I understand that my signature (or the signature of the person legally authorized to act on my behalf) on this application means that I have read and understand the contents of this application.If signed by an authorized representative (as described above), this signature certifies that:<br />
                                            1)This person is authorized under State law to complete this enrollment, and 2) Documentation of this authority is available upon request by Medicare.
                                        </p>
                                        <br /><br />
                                        <h3 className="main-section-font-color">PRIVACY ACT STATEMENT</h3>
                                        <br />
                                        <p className="main-section-font-color">
                                            The Centers for Medicare & Medicaid Services (CMS) collects information from Medicare plans to track beneficiary enrollment in Medicare Advantage (MA) Plans, improve care, and for the payment of Medicare benefits. Sections 1851 and 1860D-1 of the Social Security Act and 42 CFR §§ 422.50 and 422.60 authorize the collection of this information. CMS may use, disclose and exchange enrollment data from Medicare beneficiaries as specified in the System of Records Notice (SORN) “Medicare Advantage Prescription Drug (MARx)”, System No. 09-70-0588. Your response to this form is voluntary. However, failure to respond may affect enrollment in the plan.
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                    <Grid xs={12} item>
                        <div className="checkBox-wrapper">
                            <div id="acknowledge" className="red-text error-msg"></div>
                            <input type="checkbox" className="custom-checkbox" onChange={(e) => { setAcknowledge(e.target.value) }} />
                            <label className="main-section-font-color">I acknowledge that I have read the disclosures and confirm that all the nformation in this enrollment application is accurate</label>

                        </div>
                    </Grid>
                    <div className="signature-wrapper">
                        <Grid lg={5} md={5} sm={6} xs={12} item >
                            <FormControl className="field-wrapper" >
                                <FormLabel className="main-section-font-color label">Signature (Type fill name) *</FormLabel>
                                <div id="signature" className="red-text error-msg"></div>
                                <TextField className="custom-text-box" placeholder="Enter your signature" value={signature} variant="outlined" onChange={(e) => { setSignature(e.target.value) }} />
                                <div id="signature" className="red-text error-msg"></div>
                            </FormControl>
                        </Grid>
                    </div>
                    <Grid item xs={12} className="home-next-btn-wrapper">
                        <button type="submit" className="home-next-btn" onClick={saveApplicantSignature}><h2 className="next-btn-h2">Submit application</h2></button>
                    </Grid>
                </div>

            </div>
        </div>
    </>
}