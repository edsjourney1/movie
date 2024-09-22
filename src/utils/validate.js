

export const checkValidate = (email, password, name) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z '.-]*$/.test(name);
    if(!isNameValid){
        return "Name is not Valid";
    }
    if(!isEmailValid){
        return "email id is not Valid";
    }
    if(!isPassValid){
        return "password is not Valid";
    }
    else
        return null
}


