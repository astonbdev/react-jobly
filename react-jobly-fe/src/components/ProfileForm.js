import { useState } from 'react';

/**ProfileForm
 *
 * Props: updateUser => fn,
 *        user => {username, fName, lName, email, [applications...]}
 *        msgs => [str...]
 *
 * States: formData => {username, fName, lName, email}
 *
 * Routes => ProfileForm
 */
//more explicit name for msgs -> statusMsgs
//could catch errors and display inside of here and not captured in app IE try catch around updateUser
function ProfileForm({ updateUser, user}) {
  const initialState = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };

  const [formData, setFormData] = useState(initialState);
  const [statusMsgs, setStatusMsgs] = useState(null);

  console.log('PROFILE FORM', formData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** calls updateUser passed from app, updates statusMsgs */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try{
      const successMsg = await updateUser(formData);
      setStatusMsgs(() => successMsg)
    }
    catch(err){
      setStatusMsgs(() => err);
    }
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
        {statusMsgs && statusMsgs.map((msg,i) => <p className='ProfileForm-msg' key={i}>{msg}</p>)}
      </div>
    </form>
  )
}

export default ProfileForm;