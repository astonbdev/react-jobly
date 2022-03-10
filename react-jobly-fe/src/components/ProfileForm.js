import {useState, useEffect} from 'react';
import JoblyApi from '../api';

function ProfileForm({updateToken, user}) {
  const initialState = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  }
  const [profileData, setProfileData] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setProfileData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsUpdating(true);
  }

  useEffect(function registerUser(){
    if(!isUpdating) return;

    async function register(){
      const token = await JoblyApi.registerUser(profileData);
      updateToken(token);
      setIsUpdating(false);
      setProfileData(initialState);
    }
    register();
  }, [isUpdating]);

  if(isUpdating) {
    return <p className='loading'>Loading...</p>
  }

  return (
    <form className='SignupForm' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input disabled id='username' name='username' />

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

export default ProfileForm;