const dictionary = {
    EMAIL_EXISTS: "Email already exists",
    NO_RESPONSE:
        "We are unable to process your request at the moment. Please try again later.",
    INVALID_CREDENTIALS: "Invalid email or password",
    UNAUTHORIZED:
        "You are not authorized to access this resource. Try logging in again.",
    PROFILE_ERROR:
        "An error occurred while fetching your information. Please try again later.",
    LOGIN_FIRST: "You need to login first in order to access the Profile page",
};

const errorCodeToMsg = (error) => {
    return dictionary[error] || error;
};

export default errorCodeToMsg;
