import { Grid } from "@material-ui/core";
import '../../Styles/HomePageStyling/homePageStyle.css'
import '../../Styles/GenearlizeStyle/style.css'
import { Link } from "react-router-dom";
export default function MainSection() {
    return <>
        <Grid container className="light-gray-bg-color">
            <section className="main-wrapper white-bg-color">
                <Grid item xs={12} >
                    <div className="main-section-font-color main-intro-heading">
                        <h1>You are almost done! The next part is simple</h1>
                        <h3><strong>Not the correct plan? </strong><a href="#" className="return-to-plan font-sky">Return to plan options</a></h3>
                    </div>
                    <Grid container>

                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <div className="logo-wrapper">
                                <img src="images/Logo-Healthcare.png" className="united-health-care-image" alt="logo" />
                            </div>
                        </Grid>
                        <Grid item lg={8} md={6} sm={12} xs={12}>
                            <div className="choice-palns">
                                <p className="choice-plan-2  font-blue">AARP Medicare advantage choice Plan 2 (PPO)</p>
                            
                                <p className="monthly-premium home-choice-plan font-blue">$0 Monthly premium</p>
                            </div>
                        </Grid>
                        {/* <Grid item lg={4} md={4} xs={6}>
                        </Grid> */}
                    </Grid>
                    <div className="main-section-font-color main-intro-heading">
                        <h3>You will need your medicare card to complete this secure enrollment</h3>
                    </div>
                    <div className="contact-details main-section-font-color">
                        <p>Have questions before you enroll?</p>
                        <p>(800) 830-7574</p>
                        <p>TTY: 711</p>
                        <p>To speak with a licensed representative</p>
                    </div>
                    <Link to="/applicant-information">
                        <input type="button" value="Start your enrollment" className="enrollment-btn btn-radius font-white btn-bg-color" />
                    </Link>
                </Grid>
            </section>
        </Grid>
    </>
}