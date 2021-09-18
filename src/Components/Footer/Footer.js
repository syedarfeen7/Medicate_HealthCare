import { Grid } from "@material-ui/core";
import {useSelector} from 'react-redux'
import '../../Styles/GenearlizeStyle/style.css'
import '../../Styles/Footer/footerStyle.css'
export default function Footer() {
    const cmsFillingDate = useSelector(state => state.fillingDetails.cms_filling_date)
    const cmsFillingNumber = useSelector(state => state.fillingDetails.cms_filling_number)
    return <>
        <Grid container>
            <Grid item xs={12}>
                <footer className="light-gray-bg-color main-section-font-color footer">
                    <h3>{cmsFillingDate}</h3>
                    <h3>{cmsFillingNumber}</h3>
                </footer>
            </Grid>
        </Grid>
    </>
}