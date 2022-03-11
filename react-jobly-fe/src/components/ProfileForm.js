import { useState } from 'react';
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
  const initialState = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };

  const [formData, setFormData] = useState(initialState);

  console.log('PROFILE FORM', formData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const token = await JoblyApi.updateUser(formData);
    updateToken(token);
    setFormData(initialState);
  }

  return (
    <form className='ProfileForm' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input disabled id='username'
        name='username'
        value={formData.username} />

      <label htmlFor='firstName'>First Name</label>
      <input id='firstName'
        name='firstName'
        value={formData.firstName}
        onChange={handleChange} />

      <label htmlFor='lastName'>Last Name</label>
      <input id='lastName'
        name='lastName'
        value={formData.lastName}
        onChange={handleChange} />

      <label htmlFor='email'>Email</label>
      <input type="email"
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange} />

      <button className="ProfileForm-button">SignUp</button>
    </form>
  )
}

export default ProfileForm;