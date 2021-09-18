import { Grid } from "@material-ui/core";
import '../../Styles/HomePageStyling/homePageStyle.css'
import '../../Styles/GenearlizeStyle/style.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function EnrollmentCompleted() {
    const applicantSignature = useSelector(state => state.applicant_signature)
    const [date, setDate] = useState('')
    useEffect(() => {
        dateSetting()
    }, [])
    const dateSetting = () => {

        if (typeof applicantSignature.submissionTime === "object") {
            setDate(applicantSignature.submissionTime)
        }
        if (typeof applicantSignature.submissionTime === "string") {
            setDate(applicantSignature.submissionTime)
        }
    }
    return <>
        <Grid container className="light-gray-bg-color">
            <section className="main-wrapper white-bg-color">
                <Grid item xs={12} >
                    <div className="main-section-font-color main-intro-heading">
                        <h1>Congratulations! You have successfully completed your enrollment into:</h1>
                    </div>
                    <Grid container>

                        <Grid item lg={4} md={4} xs={12}>
                            <div className="logo-wrapper">
                                <img src="images/Logo-Healthcare.png" className="united-health-care-image" alt="logo" />
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} xs={6}>
                            <div>
                                <p className="monthly-premium font-blue">$0 Monthly premium</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} xs={6}>
                            <div>
                                <p className="choice-plan-2 font-blue">AARP Medicare advantage choice Plan 2 (PPO)</p>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="main-section-font-color main-intro-heading">
                        <h3>Your confirmation number for this enrollment is:</h3>
                    </div>
                    
                    <br /><br /><br /> 
                    <div className="main-section-font-color main-intro-heading">
                        <h2 className="main-section-font-colo">Application information</h2>
                    </div>
                    <div className="contact-details main-section-font-color">
                        <p >Signature Submission Time: {applicantSignature.submissionTime}</p>
                        <p>Signature Individual Name: {applicantSignature.signature}</p>
                        
                    </div> 
                    <Link to="/">
                        <input type="button" value="Home page" className="enrollment-btn btn-radius font-white btn-bg-color" />
                    </Link>
                </Grid>
            </section>
        </Grid>
    </>
}