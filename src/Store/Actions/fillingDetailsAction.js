export const cmsFillingDate = "CMS_FILLING_DATE";
export const cmsFillingNumber = "CMS_FILLING_NUMBER";

// CMS FILLING DATE ACTION CREATOR
export const CMSFillingDate = (date) => {
    return{
        type: cmsFillingDate,
        date: date
    }
}
// CMS FILLING NUMBER ACTION CREATOR
export const CMSFillingNumber = (number) => {
    return{
        type: cmsFillingNumber,
        number: number
    }
}