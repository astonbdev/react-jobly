import { useState } from 'react';

/**ProfileForm
 *
 * Props: updateUser => fn,
 *        user => {username, fName, lName, email, [applications...]}
 *        msgs => [str...]
 * States: formData => {username, fName, lName, email}
 *
 * Routes => ProfileForm
 */
function ProfileForm({ updateUser, user, msgs }) {
  const initialState = {
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
    updateUser(formData);
  }

  return (
    <form className='ProfileForm' onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input disabled id='username'
        name='username'
        value={user.username} />

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
        onChange={handleChange}
        required />
      <button className="ProfileForm-button">Update Profile</button>
      <div className="ProfileForm-msgs">
        {msgs && msgs.map((msg,i) => <p className='ProfileForm-msg' key={i}>{msg}</p>)}
      </div>
    </form>
  )
}

export default ProfileForm;