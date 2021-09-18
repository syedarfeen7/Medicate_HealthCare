import '../../../Styles/GenearlizeStyle/style.css';
import '../../../Styles/ApplicantReviewStyling/style.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function ApplicantInformationReviewForm() {
    const classes = useStyles();
    const [date, setDate] = useState(null)
    const applicantInformtion = useSelector(state => state.applicant_information_details)
    useEffect(() => {
        if (typeof applicantInformtion.dateOfBirth === "object") {
            setDate(applicantInformtion.dateOfBirth.getFullYear() + "-" + parseInt(applicantInformtion.dateOfBirth.getMonth() + 1) + "-" + applicantInformtion.dateOfBirth.getDate())
        }
        if (typeof applicantInformtion.dateOfBirth === "string") {
            console.log("Insid else")
            setDate(applicantInformtion.dateOfBirth.slice(0, 10))
        }
    }, [])
    console.log("State=====>", applicantInformtion)
    return <>
        <div className="light-gray-bg-color">
            <Grid container>
                <Grid item xs={12}>
                    <div className="applicant-information">
                        <h1 className="main-section-font-color applicant-text-h1">Application Review</h1>
                        <p className="font-gray required-text">* Asterisk are required for enrollment</p>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.root}>
                <div className="form-wrapper applicantReview">
                    <form noValidate autoComplete="off" >
                        <Grid container className="white-bg-color form-grid">
                            <Grid item xs={12}>
                                <div className="section-header">

                                    <div className="guidelines-text-wrapper">
                                        <h3 className="guidelines-text-h3 main-section-font-color">Applicant Information</h3>
                                    </div>
                                    <div className="edit-image-icon-wrapper">
                                        <Link to={{ pathname: '/applicant-information', state: { ap: applicantInformtion } }}>

                                            <img src="images/EditVector.png" />
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>* First name:</span>
                                    &nbsp;&nbsp;
                                    <span>{applicantInformtion.firstName}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>Middle initial:</span>
                                    &nbsp;&nbsp;
                                    <span>{applicantInformtion.middleName}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>* Last name:</span>
                                    &nbsp;&nbsp;
                                    <span>{applicantInformtion.secondName}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>* Sex:</span>
                                    &nbsp;&nbsp;
                                    <span>{applicantInformtion.sex}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>* Date of birth:</span>
                                    &nbsp;&nbsp;
                                    <span>{date}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>Title:</span>
                                    &nbsp;&nbsp;
                                    <span>{applicantInformtion.title}</span>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    </>
}