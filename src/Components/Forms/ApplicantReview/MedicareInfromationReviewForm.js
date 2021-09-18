import '../../../Styles/GenearlizeStyle/style.css';
import '../../../Styles/ApplicantReviewStyling/style.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function MedicareInformationReviewForm() {
    const classes = useStyles();
    const medicareInformation = useSelector(state => state.medicare_information_details)

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
                                        <h3 className="guidelines-text-h3 main-section-font-color">Medicare information</h3>
                                    </div>
                                    <div className="edit-image-icon-wrapper">
                                        <Link to={{pathname: '/medicare-information', state: {mi: medicareInformation}}} >
                                        <img src="images/EditVector.png" />
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>* Medicare number:</span>
                                    &nbsp;&nbsp;
                                    <span>{medicareInformation.medicareNumber}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>Part-A effective date:</span>
                                    &nbsp;&nbsp;
                                    <span>{medicareInformation.medicarePartAStartDate}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>Part-B effective date:</span>
                                    &nbsp;&nbsp;
                                    <span>{medicareInformation.medicarePartBStartDate}</span>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    </>
}