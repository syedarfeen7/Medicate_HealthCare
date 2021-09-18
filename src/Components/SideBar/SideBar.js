import { Grid } from "@material-ui/core";
import '../../Styles/GenearlizeStyle/style.css';
import '../../Styles/SideBarStyling/style.css';
import Close from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
const sidebarActiveLink =()=> {
    let x = document.querySelectorAll(".sidebar-link");
    if(x){
        x.forEach(e => {
            e.classList.remove("active");
        });
        let page = window.location.pathname.replace("/",".") + "-link";
        if(page)
        document.querySelector(page).classList.add("active");
    }
}
const sidebarClick = (e) => {
    console.log(e);
    closeSideBar();
    let el = document.querySelectorAll(".sidebar-link");
    el.forEach(element => { 
        element.classList.remove("active");
    });
    e.classList.add("active");
}
const closeSideBar = () => {
    console.log("sidebar closed");
    let u = document.getElementById("sidebar").classList;
    u.add("close-sidebar");
    u.remove("show-sidebar");
 }
//  const activeState = () => {
//  }
 
    
export default function SideBar() {
    return <>
    <div id="sidebar" onLoad={sidebarActiveLink}>
        <Grid container >
            <Grid item xs={8} md={12} lg={12}>
                <div className="logo-wrapper">
                    <img src="images/LogoVirtualMedicare.png" className="logo-image" alt="logo" />
                </div>
            </Grid>
            <Grid item xs={4} lg={12} className="side-bar-grid">
                <div className="close-btn-wrapper">
                    <Close className="main-section-font-color close-btn" onClick={closeSideBar}/>
                </div>
            </Grid>
            <Grid xs={12}>
                <div>
                    <h2 className="main-section-font-color side-bar-main-heading">Enrollment Application: Application ID</h2>
                </div>
                <div className="side-bar-menu">
                    <Link to="/applicant-information"><h3 onClick={(e) => {sidebarClick(e.target)}} className="sidebar-link applicant-information-link main-section-font-color">Applicant Information</h3>                    </Link>
                    <Link to="/contact-information"><h3 onClick={(e) => {sidebarClick(e.target)}} className="sidebar-link contact-information-link main-section-font-color contactActive">Contact Information</h3></Link>
                    <Link to="/medicare-information"><h3 onClick={(e) => {sidebarClick(e.target)}} className="sidebar-link medicare-information-link main-section-font-color">Medicare Information</h3></Link>
                    <Link to="/eligibility-questions"><h3 onClick={(e) => {sidebarClick(e.target)}} className="sidebar-link main-section-font-color eligibility-questions-link">Eligibility Questions</h3></Link>
                    <Link to="/applicant-review"><h3 onClick={(e) => {sidebarClick(e.target)}} className="sidebar-link main-section-font-color applicant-review-link">Application Review</h3></Link>
                    <Link to="/applicant-effective-date"><h3 onClick={(e) => {sidebarClick(e.target)}} className="sidebar-link main-section-font-color applicant-effective-date-link">Application Effective Date</h3></Link>
                    <Link to="/applicant-signature"><h3 onClick={(e) => {sidebarClick(e.target)}} className="sidebar-link main-section-font-color applicant-signature-link">Application Signature</h3></Link>
                </div>
                <div className="side-bar-bottom-text">
                    <p>Need Enrollment Assistance?</p>
                    <p>(800) 830-7574</p>
                    <p>TTY: 711</p>
                    <p>To Speak With A Licensed Representative</p>
                </div>
            </Grid>

        </Grid>
        </div>
    </>
}