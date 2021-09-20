import { applicantEffectiveDate, applicantInformationAction, applicantSignature, contactInformatonAction, eligibilityQuestions, medicareInformationAction } from "../Actions/applicantAction";
import {
    cmsFillingDate,
    cmsFillingNumber
} from '../Actions/fillingDetailsAction'
const initialState = {
    applicant_information_details: [''],
    contact_information_details: [''],
    medicare_information_details: [''],
    eligibility_questions_details: [''],
    applicant_effective_date: [''],
    applicant_signature: [''],
    cms_filling_date: '04-09-2021',
    cms_filling_number: '123',
}

export default function ApplicantReducer(state = initialState, action) {
    switch (action.type) {
        case cmsFillingDate:
            return { ...state, cms_filling_date: action.date }
        case cmsFillingNumber:
            return { ...state, cms_filling_number: action.number }
        case applicantInformationAction:
            return { ...state, applicant_information_details: action.data }
        case contactInformatonAction:
            return { ...state, contact_information_details: action.data }
        case medicareInformationAction:
            return { ...state, medicare_information_details: action.data }
        case eligibilityQuestions:
            return { ...state, eligibility_questions_details: action.data }
        case applicantEffectiveDate:
            return { ...state, applicant_effective_date: action.data }
        case applicantSignature:
            return { ...state, applicant_signature: action.data }
            console.log(action.data)
        case "delete":
            return { ...state, eligibility_questions_details: "" , applicant_information_details: "", medicare_information_details: "", applicant_signature: "", applicant_effective_date: "", contact_information_details: ""}
        default:
            return { ...state }
    }

}