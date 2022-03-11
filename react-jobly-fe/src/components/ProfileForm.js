import { useState, useEffect } from 'react';
import JoblyApi from '../api';

/**ProfileForm
 * 
 * Props: updateToken => fn,
 *        user => {username, fName, lName, email, [applications...]}
 * States: profileData => {username, fName, lName, email}
 * 
 * Routes => ProfileForm
 */
function ProfileForm({ updateToken, user }) {
  console.log("ProfileForm User:", user);

  const initialState = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  }
  const [profileData, setProfileData] = useState(initialState);
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

  useEffect(function registerUser() {
    if (!isUpdating) return;

    async function register() {
      const token = await JoblyApi.registerUser(profileData);
      updateToken(token);
      setIsUpdating(false);
      setProfileData(initialState);
    }
    register();
  }, [isUpdating]);

  if (isUpdating) {
    return <p className='loading'>Loading...</p>
  }

  return (
    <form className='ProfileForm' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input disabled id='username' name='username' />

      <label htmlFor='firstName'>First Name</label>
      <input id='firstName'
        name='firstName'
        value={profileData.firstName}
        onChange={handleChange} />

      <label htmlFor='lastName'>Last Name</label>
      <input id='lastName'
        name='lastName'
        value={profileData.lastName}
        onChange={handleChange} />

      <label htmlFor='email'>Email</label>
      <input type="email"
        id='email'
        name='email'
        value={profileData.email}
        onChange={handleChange} />

      <button className="ProfileForm-button">SignUp</button>
    </form>
  )
}

export default ProfileForm;