# Register Form and Input Validation

This repository was created to develop a register form and front-end validation. No libraries used, all code and CSS is original.

The form contains a name, e-mail, phone, password and password inputs. If the user introduces name and surname, the information will be submitted separatly in name and surname:

```javascript
const [inputValue, setInputValue] = useState({
    "name": string,
    "surname": string,
    "phone": number,
    "email": string,
    "password": string
});
```

The validation to follow is:
* Name can't contain numbers;
* Email must be valid;
* Phone number must have 9 characters;
* Passwords must match each other;

The object with all data will be printed on console when submit button is clicked.


## Languages and Frameworks:
* React;
* HTML, CSS;
* JavaScript.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Main objectives:
* Implement a full form;
* Implement a input validation and manage errors;
* Print user data on console.

## Author
Gabriela Viana
