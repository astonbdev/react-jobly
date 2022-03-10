import { NavLink } from 'react-router-dom';
import UserContext from './userContext';
import {useContext} from 'react'
/** Nav renders navbar components
 *
 * props: none
 * state: none
 *
 * App => Nav
 */
function Nav() {
  const { user } = useContext(UserContext);
  //TODO display navlinks based on user logged in or not

  return (
    <div className="Nav">
      <NavLink exact to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </div>
  )
}

export default Nav;