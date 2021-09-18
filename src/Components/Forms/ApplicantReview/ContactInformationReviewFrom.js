import '../../../Styles/GenearlizeStyle/style.css';
import '../../../Styles/ApplicantReviewStyling/style.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function ContactInformationReviewForm() {
    const classes = useStyles();
    const contactInformation = useSelector(state => state.contact_information_details)
    return <>
        <div className="light-gray-bg-color">
            <Grid container>

            </Grid>
            <div className={classes.root}>
                <div className="form-wrapper applicantReview">
                    <form noValidate autoComplete="off" >
                        <Grid container className="white-bg-color form-grid">
                            <Grid item xs={12}>
                                <div className="section-header">

                                    <div className="guidelines-text-wrapper">
                                        <h3 className="guidelines-text-h3 main-section-font-color">Contact information</h3>
                                    </div>
                                    <div className="edit-image-icon-wrapper">
                                        <Link  to={{pathname: '/contact-information', state: {ci: contactInformation}}}>
                                        
                                        <img src="images/EditVector.png" />
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>* Address:</span>
                                    &nbsp;&nbsp;
                                    <span>{contactInformation.streetOne}, {contactInformation.countryStateZipCode}, {contactInformation.cityTwo}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details"> 
                                    <span>Phone number:</span>
                                    &nbsp;&nbsp;
                                    <span>{contactInformation.phoneNumber}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>Email address:</span>
                                    &nbsp;&nbsp;
                                    <span>{contactInformation.emailAddress}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>Mailing address:</span>
                                    &nbsp;&nbsp;
                                    <span>{contactInformation.streetTwo}, {contactInformation.state}, {contactInformation.cityTwo}, {contactInformation.zipCode}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>Language preference:</span>
                                    &nbsp;&nbsp;
                                    <span>{contactInformation.languagePreference}</span>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    </>
}