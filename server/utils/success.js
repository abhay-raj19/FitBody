export const CreateSuccess = (statuscode, successMessage, data) => {
    const successObj = {
        status: statuscode,  
        message: successMessage,
        data: data
    }
    return successObj;
}