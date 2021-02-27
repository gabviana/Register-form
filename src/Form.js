import React, { useState } from 'react';
import { Input } from './components/Input/Input';
import { Avisos } from './components/Avisos/Avisos';
import { inputValidation } from './controllers/inputValidation';
import { onlyNumber, existSpecial, notNumber, validatePassword } from './utils/FormValidation'
import styles from './Form.module.css';


export const Form = () => {

    const [inputValue, setInputValue] = useState({
      name: '',
      surname: '',
      phone: '',
      email: '',
      password: '',
      repPass: '',
    });
    //const [repPass, setRepPass] = useState();
    console.log("pass", inputValue.password);
    console.log("pass rep", inputValue.repPass);

    const [registerFail, setRegisterFail] = useState({ message: null, color: null });
    const [errors, setErrors] = useState({ message: null, color: null });
    const inputValidators = {
        name: [notNumber],
        /*surname: [separatedSurname],*/
        email: [existSpecial],
        phone: [onlyNumber],
        password: [validatePassword],
        //repeatpassword: [(rptpass) => { validatePassword(inputValue.password, rptpass) }]
    }

    //console.log(inputValue.repeatpassword)
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === "name") {
          const surname = value.split(" ")
          setInputValue({
            ...inputValue,
            [name]: surname[0], 
            ["surname"]: surname[surname.length - 1] // separatedSurname(value)
            })
        } else {
          setInputValue({
            ...inputValue,
            [name]: value
            })
        }

        if (!value) return setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
          const error = inputValidation(value, inputValidators[name], { minLength: 9, repeatedPass: inputValidation.repPass});
          setErrors(prevErrors => ({
              ...prevErrors,
              [name]: error
          }));
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputValue)
    }
  

    return (
      <div className={styles["Form"]}>
          <h1>Be part of our TalentY family</h1>
          <p>Register it will take only a few seconds!</p>
          <Input type={"text"} name={"name"} onChange={handleInputChange} placeholder={"Name"} required />
          <Avisos flag={errors.name} type={errors.name && 'warning'} />

          <Input type={"number"} name={"phone"} onChange={handleInputChange} placeholder={"Phone Number"} required />
          <Avisos flag={errors.phone} type={errors.phone && 'warning'} />

          <Input type={"email"} name={"email"} onChange={handleInputChange} placeholder={"E-mail"} required />
          <Avisos flag={errors.email} type={errors.email && 'warning'} />

          <Input type={"password"} name={"password"} onChange={handleInputChange} placeholder={"Password"} required />
          <Input type={"password"} name={"repeatpassword"} onChange={handleInputChange} placeholder={"Repeat password"} required />
         
          <Avisos flag={errors.password} type={errors.password && 'warning'} />
          {/*
           <Input type={"password"} name={"repeatpassword"} onChange={(e) => setRepPass(e.target.value)} placeholder={"Repeat password"} required />
           (inputValidation.password !== repPass) && <Avisos flag={errors.password} type={errors.password && 'warning'} />*/}

          <Avisos flag={registerFail.message} type={registerFail.color} />
          <button className={styles["styles-button"]} onClick={handleSubmit}>Submit</button>

          {/* inputValue && (
          <div> 
            <p>{inputValue.name}</p> 
            <p>{inputValue.surname}</p> 
            <p>{inputValue.phone}</p>
            <p>{inputValue.email}</p>
            <p>{inputValue.password}</p>
            <p>{inputValue.repeatpassword}</p>
          </div>) 
          */}
      </div>
    );
}
