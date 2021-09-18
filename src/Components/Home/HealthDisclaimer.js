import { Grid } from "@material-ui/core";
import '../../Styles/GenearlizeStyle/style.css'
import '../../Styles/HomePageStyling/homePageStyle.css'
import { useState } from 'react'
import ExpandedText from "./ExpandedText";
export default function HealthDisclaimer() {
    const [isExpanded, setIsExpanded] = useState(false)
    // FUNCTION TO SET ISEXAPNDED AS TRUE WHEN USER CLICKED ON READ MORE
    const expandedText = () => {
        setIsExpanded(true)
        document.querySelector(".collapsed-text").classList.add("hide");

    }
    // GETTING EXPENDED PARAGRAPH 
    const getMoreText = () => {
        if (isExpanded) {
            return <div>
                <ExpandedText />
            </div>
        }
        else {
            return null;
        }
    }
    
    let expandedDiv = getMoreText()

    return <>

        <Grid container className="light-gray-bg-color">
            <section className="health-discalimer-wrapper ">
                <Grid item xs={12}>
                    <div className="health-discalimr-heading-wrapper">
                        <h1 className="main-section-font-color health-disalimer-heading">Health Plan Disclaimers</h1>
                    </div>
                    <div className="health-disclaimer-details-wrapper white-bg-color">
                        <p className="collapsed-text main-section-font-color health-disclaimer-details-p">
                            <strong>Plans are insured through UnitedHealthcare Insurance Company </strong>
                            or one of its affiliated companies, a Medicare Advantage organization with a Medicare contract and a Medicare-approved Part D sponsor. Enrollment in these plans depends on the plan’s contract renewal with Medicare. You do not need to be an AARP member to enroll in a Medicare Advantage plan or Medicare Prescription Drug plan. UnitedHealthcare Insurance Company pays royalty fees to AARP for the use of its intellectual property. These fees are used for the general purposes of AARP. AARP and its affiliates are not insurers. AARP does not employ or...<span className="read-more font-sky" onClick={expandedText}>Read more</span>
                        </p>
                        {expandedDiv}
                    </div>
                </Grid>
            </section>
        </Grid>
    </>
}