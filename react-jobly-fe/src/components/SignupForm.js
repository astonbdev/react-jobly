import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from '../api';

/** SearchForm
 * 
 * Props: updateToken => fn
 * States: signupData => {username, password, fName, lName, email},
 *         isRedirect => bool,
 *         errors => ['error message',...]
 * 
 * Routes => SignupForm
 */
function SignupForm({ updateToken }) {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isRedirect, setIsRedirect] = useState(false);
  const [errors, setErrors] = useState(null);

  console.log('SIGNUP FORM', formData, isRedirect, errors);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const token = await JoblyApi.registerUser(formData);
      updateToken(token);
      setIsRedirect(true);
    } catch (err) {
      setErrors(() => err);
    }
  }

  if (isRedirect) return <Redirect to="/" />

  return (
    <form className='SignupForm' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input id='username'
        name='username'
        value={formData.email}
        onChange={handleChange} required />

      <label htmlFor='password'>Password</label>
      <input id='password'
        name='password'
        value={formData.email}
        onChange={handleChange}
        required />

      <label htmlFor='firstName'>First Name</label>
      <input id='firstName'
        name='firstName'
        value={formData.email}
        onChange={handleChange}
        required />

      <label htmlFor='lastName'>Last Name</label>
      <input id='lastName'
        name='lastName'
        value={formData.email}
        onChange={handleChange}
        required />

      <label htmlFor='email'>Email</label>
      <input id='email'
        type="email"
        name='email'
        value={formData.email}
        onChange={handleChange}
        required />

      <button className="SignupForm-button">SignUp</button>
      <br />
      {errors && errors.map((e, i) => {
        return <p className="SignupForm-errors" key={i}>{e}</p>
      })}
    </form>
  )
}

export default SignupForm;