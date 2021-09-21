import { Grid } from "@material-ui/core";
import '../../Styles/HomePageStyling/homePageStyle.css'
import '../../Styles/GenearlizeStyle/style.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function EnrollmentCompleted() {
    const applicantSignature = useSelector(state => state.applicant_signature)
    const [date, setDate] = useState(null)
    const [time, setTime] = useState('')
    useEffect(() => {
        // formatAMPM(applicantSignature.submissionTime)
        dateSetting()
    }, [])
    console.log(applicantSignature.submissionTime)
    const formatAMPM = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds()
        const ampm = hours >= 12 ? 'pm' : 'am';

        hours %= 12;
        hours = hours || 12;
        minutes = minutes < 10 ? `0${minutes}` : minutes;

        const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;

        setTime(strTime)
    };


    const dateSetting = () => {

        if (typeof applicantSignature.submissionTime === "object") {
            setDate(applicantSignature.submissionTime.getMonth() + "/" + applicantSignature.submissionTime.getDate() + "/" + applicantSignature.submissionTime.getFullYear())
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

                        <Grid item lg={4} md={6} xs={12}>
                            <div className="logo-wrapper">
                                <img src="images/Logo-Healthcare.png" className="united-health-care-image" alt="logo" />
                            </div>
                        </Grid>
                        <Grid item lg={8} md={6} sm={12} xs={12}>
                            <div className="choice-plans">
                                <p className="choice-plan-2 font-blue">AARP Medicare advantage choice Plan 2 (PPO)</p>
                                <p className="monthly-premium home-choice-plan font-blue">$0 Monthly premium</p>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} xs={6}>
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
                        <p >Signature Submission Time: {date}</p>
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