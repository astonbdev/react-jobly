import { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardBody,
  Card,
  Row,
  Col
} from 'reactstrap';

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
function ProfileForm({ updateUser, user }) {
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
    try {
      const successMsg = await updateUser(formData);
      setStatusMsgs(() => successMsg)
    }
    catch (err) {
      setStatusMsgs(() => err);
    }
  }

  return (
    <Row className="justify-content-center">
      <Col md={3}>
        <Card className='text-primary'>
          <CardBody>
            <Form className='ProfileForm' onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Input disabled id='username'
                  name='username'
                  value={user.username} />
              </FormGroup>


              <FormGroup>
                <Label htmlFor='firstName'>First Name</Label>
                <Input id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='email'>Email</Label>
                <Input type="email"
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required />
              </FormGroup>
              <Button className="ProfileForm-button">Update Profile</Button>
              <div className="ProfileForm-msgs">
                {statusMsgs && statusMsgs.map((msg, i) => <p className='ProfileForm-msg' key={i}>{msg}</p>)}
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default ProfileForm;