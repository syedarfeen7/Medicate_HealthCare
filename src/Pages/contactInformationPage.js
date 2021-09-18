import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ContactInformationForm from '../Components/Forms/ContactInformationForm'
import { Grid } from '@material-ui/core';
import SideBar from '../Components/SideBar/SideBar';
import '../Styles/GenearlizeStyle/style.css'
export default function ConatactInformationPage() {
    return <>
        <Grid container>
            <Grid item lg={3} md={3}>
                <SideBar />
            </Grid>
            <Grid item md={9} sm={12}>

                <Header />
                <ContactInformationForm />
                <Footer />
            </Grid>
        </Grid>
    </>
}