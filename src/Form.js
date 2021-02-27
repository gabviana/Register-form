import React, { useState } from 'react';
import { Input } from './components/Input/Input';
import { Avisos } from './components/Avisos/Avisos';
import { inputValidation } from './controllers/inputValidation';
import { existSpecial, notNumber, validateMinLength, validateMaxLength, validatePassword, onlyNumber } from './utils/FormValidation'
import styles from './Form.module.css';


export const Form = () => {
  const [inputValue, setInputValue] = useState({});
  const [repPass, setRepPass] = useState();
  const [registerFail, setRegisterFail] = useState({ message: null, color: null });
  const [errors, setErrors] = useState({ message: null, color: null });
  const inputValidators = {
    name: [notNumber],
    email: [existSpecial],
    phone: [validateMinLength, validateMaxLength, onlyNumber],
    password: [validatePassword],
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const surname = value.split(" ");
      if (surname.length === 2) {
        setInputValue({
          ...inputValue,
          [name]: surname[0],
          ["surname"]: surname[surname.length - 1]
        })
      } else if (surname.length >= 3) {
        setInputValue({
          ...inputValue,
          [name]: surname[0],
          ["surname"]: surname[1] + " " + surname[2]
        })
      } else {
        setInputValue({
          ...inputValue,
          [name]: surname[0],
        })
      }
    } else {
      setInputValue({
        ...inputValue,
        [name]: value
      })
    }
    if (!value) return setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
    const error = inputValidation(value, inputValidators[name], { minLength: 9, maxLength: 9 });
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setRegisterFail({ message: 'Registered successfully', color: 'success' });
  }

  return (
    <div className={styles["Form"]}>
      <h1>Be part of our TalentY family</h1>
      <p>Register it will take only a few seconds!</p>
      <Input type={"text"} name={"name"} onChange={handleInputChange} placeholder={"Name"} required />
      <Avisos flag={errors.name} type={errors.name && 'warning'} />

      <Input type={"text"} name={"phone"} onChange={handleInputChange} placeholder={"Phone Number"} required />
      <Avisos flag={errors.phone} type={errors.phone && 'warning'} />

      <Input type={"email"} name={"email"} onChange={handleInputChange} placeholder={"E-mail"} required />
      <Avisos flag={errors.email} type={errors.email && 'warning'} />

      <Input type={"password"} name={"password"} onChange={handleInputChange} placeholder={"Password"} required />

      <Input type={"password"} name={"repPass"} onChange={(e) => setRepPass(e.target.value)} placeholder={"Repeat password"} required />
      
      {(inputValue.password !== repPass) && <Avisos flag={errors.password} type={errors.password && 'warning'} />}
      <button className={styles["styles-button"]} onClick={handleSubmit}>Submit</button>
      <div className={styles["res-success"]}>
        <Avisos flag={registerFail.message} type={registerFail.color} />
      </div>
    </div>
  );
}