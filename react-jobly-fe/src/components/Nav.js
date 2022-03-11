import { NavLink, Link } from 'react-router-dom';
import UserContext from './userContext';
import {useContext} from 'react'
/** Nav renders navbar components
 *
 * props: none
 * state: none
 *
 * App => Nav
 */
function Nav({ logout }) {
  const currentUser = useContext(UserContext);
  //TODO display navlinks based on user logged in or not

  return (
    <div className="Nav">
      <NavLink exact to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      {!currentUser &&
      <div className='Nav-noUser'>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>}
      {currentUser &&
      <div className="Nav-loggedIn">
        <NavLink to={`/profile/${currentUser.username}`}>Profile</NavLink>
        <Link to="/" onClick={() => logout()}>Logout {currentUser.username}</Link>
      </div>
        }
    </div>
  )
}

export default Nav;