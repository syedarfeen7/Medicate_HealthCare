import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../Styles/HeaderStyle/style.css';
import '../../Styles/GenearlizeStyle/style.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

//  FUNCTION TO SHOW THE SIDE BAR OR CLOSE THE SIDE BAR IN RESPOSIVE VIEW
const showSideBar = () => {
    console.log("sidebar opened");
    let sidebar = document.getElementById("sidebar");
    let u = sidebar.classList;
    let rootHeight = document.getElementById("root").clientHeight;
    sidebar.style.height = `${rootHeight}px`;
    u.remove("close-sidebar");
    u.add("show-sidebar");
}
export default function Header() {
    const classes = useStyles();
    const pathLocation = useLocation()

    const [homePage, setHomePage] = useState(false)
    const [enrollmentCompletedPage, setEnrollmentCompletedPage] = useState(false)
    useEffect(() => {

        // GETTING THE CURRENT PAGE ADDRESS
        setHomePage(pathLocation.pathname === "/")
        setEnrollmentCompletedPage(pathLocation.pathname === "/enrollment-completed")
    }, [])
    return (
        <div className={classes.root}>
            <Grid container className="" >
                <Grid item xs={12}>
                    <header className="top-bar-header">
                        <nav className="top-bar-nav bg-sky">
                            <p className="top-bar-text font-white">We are not affiliated with Medicare and are a non-government agency that is hosted by Senior Choice Plans, a licensed insurance agency.</p>
                        </nav>
                    </header>
                </Grid>

                <Grid container className="light-gray-bg-color">

                    {/* TERNINARY OPERTAOR TO CHECK THE CURRENT PATH LOCATION */}
                    {enrollmentCompletedPage || homePage ?
                        <>
                            <Grid item lg={12} md={12} xs={12}>
                                <div className="logo-wrapper">
                                    <img src="images/LogoVirtualMedicare.png" className="logo-image" alt="logo" />
                                </div>
                            </Grid>
                        </>
                        :
                        <>
                            {/* IN CASE THE PATH WAS NOT COLPLETED OR HOME PAGE THEN THIS SECTION WILL WORK */}
                            {homePage ?
                                <>
                                    <Grid item lg={5} md={12} xs={12}>
                                        <div className="logo-wrapper">
                                            <img src="images/LogoVirtualMedicare.png" className="logo-image" alt="logo" />
                                        </div>
                                    </Grid>
                                </>
                                :
                                <>
                                    <Grid item xs={1} className="toggle-btn"  >
                                        <div className="toggle-btn">
                                            <MenuIcon className="main-section-font-color menuIcon" onClick={showSideBar} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={11} className="logo-lg-screen">
                                        <div className="logo-wrapper">
                                            <img src="images/LogoVirtualMedicare.png" className="logo-image" alt="logo" />
                                        </div>
                                    </Grid>
                                </>
                            }
                            <Grid item lg={2} md={12} xs={11}>
                                <div className="logo-wrapper">
                                    <img src="images/Logo-Healthcare.png" className="united-health-care-image" alt="logo" />
                                </div>
                            </Grid>
                            <Grid item lg={2} md={4} xs={6}>
                                <div>
                                    <p className="monthly-premium font-blue">$0 Monthly premium</p>
                                </div>
                            </Grid>
                            <Grid item lg={3} md={4} xs={6}>
                                <div>
                                    <p className="choice-plan-2 font-blue">AARP Medicare advantage choice Plan 2 (PPO)</p>
                                </div>
                            </Grid>

                        </>

                    }

                </Grid>
            </Grid>
        </div>
    );
}