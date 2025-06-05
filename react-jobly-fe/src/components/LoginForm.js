import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Input, Label, Row, Col } from "reactstrap"

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

  // Avoid logging sensitive data like passwords
  console.log('LOGIN FORM', { username: formData.username }, isRedirect, errors);

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
      // Create a copy of the form data to avoid modifying the original state directly
      const loginData = { ...formData };
      
      // Call the API with the credentials
      const token = await JoblyApi.loginUser(loginData);
      
      // Update token and redirect on success
      updateToken(token);
      
      // Clear sensitive data from state (especially password)
      setFormData(initialState);
      setIsRedirect(true);
    } catch (err) {
      setErrors(() => err);
      // Still clear sensitive data on error
      setFormData(initialState);
    }
  }

  if (isRedirect) return <Redirect to="/" />;

  return (
    <Row className="justify-content-center text-primary">
      <Col md={3}>
        <Form className='LoginForm' onSubmit={handleSubmit}>
          <Label htmlFor='username'>Username</Label>
          <Input id='username'
            name='username'
            value={formData.username}
            onChange={handleChange} required />

          <Label htmlFor='password'>Password</Label>
          <Input id='password'
            type="password"
            name='password'
            value={formData.password}
            onChange={handleChange} required />
          <Button className="LoginForm-button mt-3">Login</Button>
          {errors && errors.map((e, i) => {
            return <p className="LoginForm-errors" key={i}>{e}</p>
          })}
        </Form>
      </Col>
    </Row>
  )
}

export default LoginForm;