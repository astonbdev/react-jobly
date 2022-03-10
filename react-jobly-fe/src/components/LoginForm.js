import {useState, useEffect} from 'react';
import JoblyApi from '../api';

function LoginForm({ updateToken }) {
  const initialState = {
    username: "",
    password: "",
  }
  const [loginData, setLoginData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsFetching(true);
  }

  useEffect(function loginUser(){
    if(!isFetching) return;

    async function login(){
      const token = await JoblyApi.loginUser(loginData);
      updateToken(token);
      setIsFetching(false);
      setLoginData(initialState);
    }
    login();
  }, [isFetching]);

  if(isFetching) {
    return <p className='loading'>Loading...</p>
  }

  return (
    <form className='LoginForm' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input id='username' name='username' onChange={handleChange} />

      <label htmlFor='password'>Password</label>
      <input id='password' name='password' onChange={handleChange} />

      <button className="LoginForm-button">Login</button>
    </form>
  )
}

export default LoginForm;