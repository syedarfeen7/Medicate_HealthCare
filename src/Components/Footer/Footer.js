import { Grid } from "@material-ui/core";
import {useSelector} from 'react-redux';
import '../../Styles/GenearlizeStyle/style.css';
import '../../Styles/Footer/footerStyle.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {CMSFillingDate, CMSFillingNumber} from '../../Store/Actions/fillingDetailsAction';
export default function Footer() {
    const dispatch = useDispatch()
    const cmsFillingDate = useSelector(state => state.cms_filling_date)
    const cmsFillingNumber = useSelector(state => state.cms_filling_number)

    useEffect(() => {

        if (!(cmsFillingDate === "" && cmsFillingNumber === "")){
            dispatch(CMSFillingDate("21-09-2020"))
            dispatch(CMSFillingNumber("123"))
        }
    })  
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