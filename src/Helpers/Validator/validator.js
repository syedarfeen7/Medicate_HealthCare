import * as yup from 'yup';

// SCHEEMA TO VALIDATE THE APPLICANT INFORMATION
export const applicantInformationSheema = yup.object().shape({
  firstName: yup.string().required("first name is not allowed to be empty"),
  middleName: yup.string().required("middle name is not allowed to be empty"),
  secondName: yup.string().required("second name is not allowed to be empty"),
  sex: yup.string().required("Please select your gender"),
  title: yup.string(),
  dateOfBirth: yup.date().nullable().required("Please select your date of birth"),
})

// SCHEEMA TO VALIDATE CONTACT INFROMATION
export const contactInfromationScheema = yup.object().shape({
  streetOne: yup.string().required("Please enter your street"),
  countryStateZipCode: yup.string(),
  cityOne: yup.string().required("Please enter your city"),
  Checkbox: yup.boolean(),
  phoneNumber: yup.string(),
  emailAddress: yup.string().email(),
  languagePreference: yup.string(),
})

export const contactInformationMailingAddressScheema = yup.object().shape({
  streetTwo: yup.string().required("Please enter your street"),
  state: yup.string().required("Please enter your state"),
  cityTwo: yup.string().required("Please enter your city"),
  zipCode: yup.string().required("Please enter Zip Code"),
  
})

// SCEEMA TO VALIDATE MEDICARE INFORMATION

export const medicareInformationScheema = yup.object().shape({
  medicareNumber: yup.string().nullable().required("Enter your medicare number"),
  medicarePartAStartDate: yup.string(),
  medicarePartBStartDate: yup.string(),
})

// SCHEEMA TO VALIDATE ELIGIBILITY QUESTIONS

export const eligibilityQuestionsScheema = yup.object().shape({
  medicareEnrollmentPeriod: yup.string().required("Please select any one enrollment period"),
  medicarePartBEffectiveDate: yup.date().nullable(),
  dateOfYouEstablishedResidencyOne: yup.date().nullable(),
  endDateOfPreviousCoverageOne: yup.date().nullable(),
  dateOfYouEstablishedResidencyTwo: yup.date().nullable(),
  endDateOfPreviousCoverageTwo: yup.date().nullable(),
  dateReleasedFromIncarceration: yup.date().nullable(),
  endDateOfPreviousCoverageThree: yup.date().nullable(),
  endDateOfPreviousCoverageFour: yup.date().nullable(),
  endDateOfPreviousCoverageFive: yup.date().nullable(),
  DateOfCoverageYouAreLeaving: yup.date().nullable(),
  dateOfYouEstablishedResidencyThree: yup.date().nullable(),
  dateOfYouEstablishedResidencyOne: yup.date().nullable(),
  enrolledMedicardProgram: yup.string(),
  nursingHome: yup.string(),
  nameOfFacility: yup.string(),
  phoneNumber: yup.string(),
  street: yup.string(),
  city: yup.string(),
  state: yup.string(),
  zipCode: yup.string(),
  healthInsurance: yup.string(),
  spouseWork: yup.string(),
  healthInsuranceTwo: yup.string(),
  perciptionDrugCoverage: yup.string(),
  primaryCarePhysicianFullName: yup.string(),
  primaryCarePhysicianIDNumber: yup.string(),
  primaryCarePhysicianPhoneNumber: yup.string(),
  currentPatient: yup.string(),
  paymentOption: yup.string(),
  
  
})

export const eligibilityQuestionMedicardNumberScheema = yup.object().shape({
  medicardNumber: yup.string().required('Please enter Medicard number'),
  
})

// APPLICANT EFFECTIVE DATE SCHEEMA

export const applicantEffectiveDateScheema = yup.object().shape({
  appliantEffectiveDate: yup.string().required("Please select any one applicant effective date")
})

// APPLICANT SIGNATURE SCHEEMA

export const applicantSignatureScheema = yup.object().shape({
  appplicantSignatureMMethod: yup.string().required("Please select any one"),
  signature: yup.string().required("Please enter your signature"),
  acknowledge: yup.string().required("Please accept agreement ")
})

export const applicantAuthorizedScheema = yup.object().shape({
  firstName: yup.string().required("Please enter first name"),
  secondName: yup.string().required("Please enter second name"),
  relationshipToEnrolle: yup.string().required("Please enter relationship to enrollee"),
  street: yup.string().required("Please enter street"),
  state: yup.string().required("Please enter state"),
  city: yup.string().required("Please enter city"),
  zipCode: yup.string().required("Please enter zip code"),
  phoneNumber: yup.string(),

})