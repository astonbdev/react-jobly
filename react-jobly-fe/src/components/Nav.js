import { NavLink, Link } from 'react-router-dom';
import UserContext from './userContext';
import { useContext } from 'react';
import './Nav.css';

/** Nav renders navbar components
 *
 * props: logout => fn
 * state: none
 *
 * App => Nav
 */
function Nav({ logout }) {
  const currentUser = useContext(UserContext);

  return (
    <nav className="Nav container-fluid">
      <div className="Nav navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink exact to="/" className="Nav navbar-brand">Jobly</NavLink>
        <ul className="Nav navbar-nav">

          {!currentUser &&
            <>
              <li className="Nav-link nav-item">
                <NavLink className="Nav" to="/login">Login</NavLink>
              </li>
              <li className="Nav-link nav-item">
                <NavLink className="Nav nav-link" to="/signup">Signup</NavLink>
              </li>
            </>}

          {currentUser &&
            <>
              <li className="Nav-link nav-item">
                <NavLink className="Nav nav-link" to="/companies">Companies</NavLink>
              </li>
              <li className="Nav-link nav-item">
                <NavLink className="Nav nav-link" to="/jobs">Jobs</NavLink>
              </li>
              <li className="Nav-link nav-item">
                <NavLink className="Nav nav-link" to={`/profile/${currentUser.username}`}>Profile</NavLink>
              </li>
              <li className="Nav-link nav-item nav-right">
                <Link className="Nav nav-link" to="/" onClick={() => logout()}>Logout {currentUser.firstName}</Link>
              </li>
            </>}
        </ul>
      </div>
    </nav>
  )
}

export default Nav;