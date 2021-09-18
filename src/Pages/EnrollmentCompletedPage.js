import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Grid } from '@material-ui/core';
import '../Styles/GenearlizeStyle/style.css';
import { useSelector } from 'react-redux';
import EnrollmentCompleted from '../Components/EnrollmentCompleted/EnrollmentCompleted';
export default function EnrollmentCompletedPage() {
    return <>
        <Grid container>
            <Grid item xs={12}>

                <Header />
                <EnrollmentCompleted />
                <Footer />
            </Grid>
        </Grid>
    </>
}