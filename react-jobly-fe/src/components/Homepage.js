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
      <Row className='justify-content-center'>
        <Col xs={6}>
          <div className="Homepage">
            <h1 className="Homepage-title">Welcome to Jobly, {currentUser.firstName}</h1>
          </div>
        </Col>
      </Row>
    );
  }

  return (
    <Row className='justify-content-center'>
      <Col xs={6}>
        <div className="Homepage">
          <h1 className="Homepage-title center-block">Welcome to Jobly</h1>
        </div>
      </Col>
    </Row>
  );
}

export default Homepage;