export const EMAIL_ALREADY_EXISTS = "Email already exists"
export const ADD_SUCCESSFUL = "Add successful"
export const UPDATE_SUCCESSFUL = "Update successful"
export const DELETE_SUCCESSFUL = "Delete successful"
export const INVALID_INPUT = "Invalid input"
export const PLEASE_TYPE_ALL_INPUT = "Please type all input"
export const EMAIL_ADDRESS_IS_INVALID = "Email address is invalid"
export const PHONE_NUMBER_START_NUMBER_0_AND_HAVE_10_CHARACTER = "Phone number have 10 character"
export const DOB_IS_INVALID = "DOB is invalid (dd/mm/yyyy)"
export const VALUE_DAY_OR_MONTH_OR_YEAR_IS_INVALID = "Value day or month or year is invalid"
export const NAME_LIMIT_25_CHARACTER = "Name limit 25 character"

export const typeInvalid = (params) => {
    return "Please type input " + params; 
}

export const selectInvalid = (params) => {
    return "Please select input " + params; 
}