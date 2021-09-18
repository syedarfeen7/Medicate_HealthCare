import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Grid } from '@material-ui/core';
import SideBar from '../Components/SideBar/SideBar';
import '../Styles/GenearlizeStyle/style.css'
import ApplicantInformationReviewForm from '../Components/Forms/ApplicantReview/ApplicantInformationReviewForm';
import ContactInformationReviewForm from '../Components/Forms/ApplicantReview/ContactInformationReviewFrom';
import MedicareInformationReviewForm from '../Components/Forms/ApplicantReview/MedicareInfromationReviewForm';
import EligibilityQuestionsReviewForm from '../Components/Forms/ApplicantReview/EligibilityQuestionReviewForm';
export default function ApplicantReviewPage() {
    return <>
        <Grid container>
            <Grid item lg={3} md={3}>
                <SideBar />
            </Grid>
            <Grid item md={9} sm={12}>

                <Header />
                <ApplicantInformationReviewForm />
                <ContactInformationReviewForm />
                <MedicareInformationReviewForm />
                <EligibilityQuestionsReviewForm />
            
                <Footer />
            </Grid>
        </Grid>
    </>
}