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
    <nav className="Nav navbar navbar-expand-lg navbar-light bg-white">
      <div className="Nav">
        <NavLink exact to="/" className="Nav navbar-brand text-primary">
          <img className="jobly-logo" src="jobly-logo.png" alt="logo"></img>
        </NavLink>
      </div>
      <div className="Nav">
        <ul className="Nav navbar-nav me-auto">

          {!currentUser &&
            <>
              <li className="Nav-link nav-item">
                <NavLink className="Nav nav-link text-primary" to="/login">Login</NavLink>
              </li>
              <li className="Nav-link nav-item">
                <NavLink className="Nav nav-link text-primary" to="/signup">Signup</NavLink>
              </li>
            </>}

          {currentUser &&
            <>
              <li className="Nav-link nav-item">
                <NavLink className="Nav nav-link text-primary" to="/companies">Companies</NavLink>
              </li>
              <li className="Nav-link nav-item">
                <NavLink className="Nav nav-link text-primary" to="/jobs">Jobs</NavLink>
              </li>
              <li className="Nav-link nav-item">
                <NavLink className="Nav nav-link text-primary" to={`/profile/${currentUser.username}`}>Profile</NavLink>
              </li>
              <li className="Nav-link nav-item">
                <Link className="Nav nav-link text-primary" to="/" onClick={() => logout()}>Logout</Link>
              </li>
            </>}
        </ul>
      </div>
    </nav>
  )
}

export default Nav;