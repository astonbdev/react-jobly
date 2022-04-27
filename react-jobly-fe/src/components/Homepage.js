import UserContext from './userContext';
import { useContext } from 'react';
import { Row, Col } from 'reactstrap';

/**Homepage
 *
 * props: none
 * state: none
 *
 * Routes => Homepage
 */
function Homepage() {
  const currentUser = useContext(UserContext);

  if (currentUser) {
    return (
      <Row className='justify-content-center d-flex vh-90'>
        <Col xs={6}>
          <h1 className="Homepage-title text-primary display-1 m-5">Welcome to Jobly, {currentUser.firstName}</h1>
          <img id="jobly-logo" className="jobly-brand" src="jobly-brand.png" alt="brand"></img>

        </Col>
      </Row>
    );
  }

  return (
    <Row className='justify-content-center d-flex vh-90'>
      <Col xs={6}>
        <h1 className="Homepage-title text-primary display-1 m-5">Welcome to Jobly</h1>
        <img className="jobly-brand" src="jobly-brand.png" alt="brand"></img>
      </Col>
    </Row>
  );
}

export default Homepage;