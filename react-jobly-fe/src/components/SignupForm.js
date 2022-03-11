import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from '../api';

function SignupForm({ updateToken }) {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [signupData, setSignupData] = useState(initialState);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [errors, setErrors] = useState(null);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignupData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsRegistering(true);
  }

  useEffect(function registerUser() {
    if (!isRegistering) return;
    async function register() {
      try {
        const token = await JoblyApi.registerUser(signupData);
        updateToken(token);
        setIsRegistering(false);
        setIsRedirect(true);
      } catch (err) {
        setErrors(() => err);
        setIsRegistering(false);
      }
    }
    register();
  }, [isRegistering]);

  if (isRedirect) return <Redirect to="/" />

  if (isRegistering) {
    return <p className='loading'>Loading...</p>
  }

  return (
    <form className='SignupForm' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input id='username' name='username' onChange={handleChange} />

      <label htmlFor='password'>Password</label>
      <input id='password' name='password' onChange={handleChange} />

      <label htmlFor='firstName'>First Name</label>
      <input id='firstName' name='firstName' onChange={handleChange} />

      <label htmlFor='lastName'>Last Name</label>
      <input id='lastName' name='lastName' onChange={handleChange} />

      <label htmlFor='email'>Email</label>
      <input type="email" id='email' name='email' onChange={handleChange} />

      <button className="SignupForm-button">SignUp</button>
      <br />
      {errors && errors.map((e, i) => {
        return <p className="SignupForm-errors" key={i}>{e}</p>
      })}
    </form>
  )
}

export default SignupForm;