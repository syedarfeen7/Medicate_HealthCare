import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ApplicantInformationForm from '../Components/Forms/ApplicantInformationForm';
import { Grid } from '@material-ui/core';
import SideBar from '../Components/SideBar/SideBar';
import '../Styles/GenearlizeStyle/style.css';
import {useSelector} from 'react-redux';
export default function ApplicantInformationPage() {
    // const {applicantInformation} = rootReducer()
    
    return <>
        <Grid container>
            <Grid item lg={3} md={3}>
                <SideBar />
            </Grid>
            <Grid item md={9} sm={12}>

                <Header />
                <ApplicantInformationForm />
                <Footer />
            </Grid>
        </Grid>
    </>
}