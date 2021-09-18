export const applicantInformationAction = "APPLICANT_INFORMATION";
export const contactInformatonAction = "CONTACT_INFORMATION_ACTION";
export const medicareInformationAction = "MEDICARE_INFORMATION_ACTION";
export const eligibilityQuestions = "ELIGIBILITY_QUESTIONS";
export const applicantEffectiveDate = "APPLICANT_EFFECTIVE_DATE";
export const applicantSignature = "APPLICANT_SIGNATURE";

// APPLICANT INFORMATION ACTION
export const ApplicantInformation = (data) => {
    return {
        type: applicantInformationAction,
        data: data
    }
}

// CONTACT INFORMATION ACTION
export const ContactInformation = (data) => {
    return {
        type: contactInformatonAction,
        data: data
    }
}

//  MEDICARE INFORMATION ACTION
export const MedicareInformation = (data) => {
    return{
        type: medicareInformationAction,
        data: data
    }
}
// ELIGIBILITY QUESTIONS ACTION
export const EligibilityQuestions = (data) => {
    return{
        type: eligibilityQuestions,
        data: data
    }
}

// APPLICANT EFFECTIVE DATE ACTION
export const ApplicantEffectiveDate = (data) => {
    return{
        type: applicantEffectiveDate,
        data: data
    }
}

// APPLICANT SIGNATURE ACTION
export const ApplicantSignature = (data) => {
    return{
        type: ApplicantSignature,
        data: data
    }
}