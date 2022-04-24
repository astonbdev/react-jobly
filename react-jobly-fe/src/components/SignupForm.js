import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from '../api';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';

/** SignupForm
 *
 * Props: updateToken => fn
 * States: formData => {username, password, fName, lName, email},
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
    <Row className="justify-content-center text-primary">
      <Col md={3}>
        <Card>
          <CardBody>
            <Form className='SignupForm' onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Input id='username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Input id='password'
                  type="password"
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='firstName'>First Name</Label>
                <Input id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='email'>Email</Label>
                <Input id='email'
                  type="email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required />
              </FormGroup>
              <Button className="SignupForm-button">SignUp</Button>
              <br />
              {errors && errors.map((e, i) => {
                return <p className="SignupForm-errors" key={i}>{e}</p>
              })}
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default SignupForm;