import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Grid } from '@material-ui/core';
import SideBar from '../Components/SideBar/SideBar';
import ApplicantEffectiveDateForm from '../Components/Forms/ApplicantEffectiveDateForm';
export default function ApplicantEfectiveDatePage() {
    return <>
        <Grid container>
            <Grid item lg={3} md={3}>
                <SideBar />
            </Grid>
            <Grid item md={9} sm={12} className="light-gray-bg-color">

                <Header />
                <ApplicantEffectiveDateForm />
            
                <Footer />
            </Grid>
        </Grid>
    </>
}