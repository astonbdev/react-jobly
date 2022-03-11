import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from '../api';

/**LoginForm
 *
 * Props: updateToken => fn
 * States: formData => {username, password},
 *         isRedirect => bool,
 *         errors => ['error message',...]
 *
 * Routes => LoginForm
 */
function LoginForm({ updateToken }) {
  const initialState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isRedirect, setIsRedirect] = useState(false);
  const [errors, setErrors] = useState(false);

  console.log('LOGIN FORM', formData, isRedirect, errors);

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
      const token = await JoblyApi.loginUser(formData);
      updateToken(token);
      setFormData(initialState);
      setIsRedirect(true);
    } catch (err) {
      setErrors(() => err);
      setFormData(initialState);
    }
  }

  if (isRedirect) return <Redirect to="/" />;

  return (
    <form className='LoginForm' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input id='username'
        name='username'
        value={formData.username}
        onChange={handleChange} required />

      <label htmlFor='password'>Password</label>
      <input id='password'
        type="password"
        name='password'
        value={formData.password}
        onChange={handleChange} required />

      <button className="LoginForm-button">Login</button>
      <br />
      {errors && errors.map((e, i) => {
        return <p className="LoginForm-errors" key={i}>{e}</p>
      })}
    </form>
  )
}

export default LoginForm;