export const notNumber = (string) => {
    const regex = RegExp("[0-9]");
    if (regex.test(string)) {
        return ("only text");
    }
};

export const validatePassword = (password, repeatedPass) => {
    if (password !== repeatedPass) {
        return ("that both passwords match")
    }
}

/* export const validatePassword = (password, repeatedPassword) => {
    if (password != repeatedPassword) {
        return ("a valid password (passwords must match)")
    }
}

 //(password != repeatedPassword) ? console.log("passwords are not equal!") : console.log("ok, good")
export const separatedSurname = (fullname) => {
    console.log(fullname);
    const fullName = fullname.split(' ')
    console.log(fullName)
    const firstName = fullName[0]
    if (!firstName) {
        return (
            fullName[fullName.length - 1])
    }
}*/

export const onlyNumber = (number) => {
    {/*const regex = RegExp('/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/')*/}
    if (number.length !== 9) {
        return ("only 9 numbers");
    }
};

export const existSpecial = (string) => {
    const regex = RegExp("[@]");
    if (!regex.test(string)) {
        return ("@");
    }
};

// ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

export const validateMaxLength = (string, maxLength) => {
    if (string.length > maxLength) {
        return (`a max of ${maxLength} characters`);
    }
};

export const validateMinLength = (string, minLength) => {
    if (string.length < minLength) {
        return (`a min of ${minLength} characters`);
    }
};


export const checkFormErrors = (value, validators, options) => {
    const errors = [];
    if (!value || !validators) return;
    if (!(validators instanceof Array)) return;
    validators.forEach(validator => {
        if (validator === validateMaxLength && options) {
            const error = validator(value, options.maxLength)
            error && errors.push(error)
        } else if (validator === validateMinLength && options) {
            const error = validator(value, options.minLength)
            error && errors.push(error)
        } else if (validator === validatePassword && options) {
            const error = validator(value, options.repeatedPass)
            error && errors.push(error)
        }else {
            const error = validator(value)
            error && errors.push(error)
        }
    });
    return errors;
}

export const concatErrorString = (errors) => {
    let result = ''
    if (!errors.length) return result;
    errors.forEach((error, index) => {
        if (index < errors.length - 2) {
            result += error + ', ';
        } else if (index < errors.length - 1) {
            result += error + ' and '
        } else {
            result += error
        }
    })

    return "This field may include " + result;
}