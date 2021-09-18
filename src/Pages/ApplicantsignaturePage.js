import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Grid } from '@material-ui/core';
import SideBar from '../Components/SideBar/SideBar';
import '../Styles/GenearlizeStyle/style.css';
import ApplicantSignatureForm from '../Components/Forms/ApplicantsignatureForm';
export default function ApplicantSignaturePage() {
    // const {applicantInformation} = rootReducer()
    
    return <>
        <Grid container>
            <Grid item lg={3} md={3}>
                <SideBar />
            </Grid>
            <Grid item md={9} sm={12}>

                <Header />
                <ApplicantSignatureForm />
                <Footer />
            </Grid>
        </Grid>
    </>
}