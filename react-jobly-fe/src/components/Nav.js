import { NavLink, Link } from 'react-router-dom';
import UserContext from './userContext';
import { useContext } from 'react'

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
    <div className="Nav">

      {!currentUser &&
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </>}

      {currentUser &&
        <>
          <NavLink exact to="/">Jobly</NavLink>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to={`/profile/${currentUser.username}`}>Profile</NavLink>
          <Link to="/" onClick={() => logout()}>Logout {currentUser.firstName}</Link>
        </>}

    </div>
  )
}

export default Nav;