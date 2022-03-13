import React, { useRef }from "react"
import Field from '../components/form/Field'

import loginStyle from "../styles/Login.module.css"

const LoginForm = ({onSubmit}) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form className={loginStyle.form_control} onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button className={loginStyle.btn} type="submit">Submit</button>
        </div>
      </form>
    );
};

const login = ({ setAuth }) => {

  console.log("here")
  console.log(setAuth)

  return (
    <>
      <LoginForm onSubmit={setAuth}>

      </LoginForm>
    </>
  )};

export default login;


{/* <form className="">
      <input className="formControl">
          
      </input>
  </form>; */}