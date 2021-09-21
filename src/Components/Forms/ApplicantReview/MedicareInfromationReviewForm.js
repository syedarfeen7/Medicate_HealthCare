import '../../../Styles/GenearlizeStyle/style.css';
import '../../../Styles/ApplicantReviewStyling/style.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function MedicareInformationReviewForm() {
    const classes = useStyles();
    const [dateOne, setDateOne] = useState("")
    const [dateTwo, setDateTwo] = useState("")
    // FETCHING THE MEDICARE INFORMATION FROM REDUX STORE
    const medicareInformation = useSelector(state => state.medicare_information_details)
    useEffect(() => {
        if (!(medicareInformation.medicarePartAStartDate === null && medicareInformation.medicarePartBStartDate === null)) {

            if (medicareInformation.medicarePartAStartDate && medicareInformation.medicarePartBStartDate) {

                if (typeof (medicareInformation.medicarePartAStartDate === "object" || medicareInformation.medicarePartBStartDate === "object")) {
                    setDateOne(medicareInformation.medicarePartAStartDate.getFullYear() + "-" + parseInt(medicareInformation.medicarePartAStartDate.getMonth() + 1) + "-" + medicareInformation.medicarePartAStartDate.getDate())
                    setDateTwo(medicareInformation.medicarePartBStartDate.getFullYear() + "-" + parseInt(medicareInformation.medicarePartBStartDate.getMonth() + 1) + "-" + medicareInformation.medicarePartBStartDate.getDate())
                }
                if (typeof medicareInformation.medicarePartAStartDate === "string" || medicareInformation.medicarePartBStartDate === "string") {
                    console.log("Insid else")
                    setDateOne(medicareInformation.medicarePartAStartDate.slice(0, 10))
                    setDateTwo(medicareInformation.medicarePartBStartDate.slice(0, 10))
                }
            }
            if (medicareInformation.medicarePartAStartDate) {
                if (typeof medicareInformation.medicarePartAStartDate === "object") {
                    setDateOne(medicareInformation.medicarePartAStartDate.getFullYear() + "-" + parseInt(medicareInformation.medicarePartAStartDate.getMonth() + 1) + "-" + medicareInformation.medicarePartAStartDate.getDate())
                }
                if (typeof medicareInformation.medicarePartAStartDate === "string") {
                    console.log("Insid else")
                    setDateOne(medicareInformation.medicarePartAStartDate.slice(0, 10))
                }
                return
            }
            if (medicareInformation.medicarePartBStartDate) {
                if (typeof medicareInformation.medicarePartBStartDate === "object") {
                    setDateOne(medicareInformation.medicarePartBStartDate.getFullYear() + "-" + parseInt(medicareInformation.medicarePartBStartDate.getMonth() + 1) + "-" + medicareInformation.medicarePartBStartDate.getDate())
                }
                if (typeof medicareInformation.medicarePartBStartDate === "string") {
                    console.log("Insid else")
                    setDateOne(medicareInformation.medicarePartBStartDate.slice(0, 10))
                }
            }
        }
    }, [])

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
                                        <Link to={{ pathname: '/medicare-information', state: { mi: medicareInformation } }} >
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
                                    <span>{dateOne}</span>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <div className="details">
                                    <span>Part-B effective date:</span>
                                    &nbsp;&nbsp;
                                    <span>{dateTwo}</span>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    </>
}