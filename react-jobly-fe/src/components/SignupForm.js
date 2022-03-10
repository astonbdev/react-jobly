import {useState, useEffect} from 'react';
import JoblyApi from '../api';

function SignupForm({ updateToken }) {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  }
  const [signupData, setSignupData] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignupData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setSignupData(initialState);
    setIsRegistering(true);
  }

  useEffect(function registerUser(){
    async function register(){
      const token = await JoblyApi.registerUser(signupData);
      updateToken(token);
      setIsRegistering(false);
    }
    register();
  }, [isRegistering]);

  if(isRegistering) {
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

      <button className="Signup-button">SignUp</button>
    </form>
  )
}

export default SignupForm;