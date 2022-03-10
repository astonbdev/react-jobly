import { NavLink } from 'react-router-dom';
/** Nav renders navbar components
 *
 * props: none
 * state: none
 *
 * App => Nav
 */
function Nav() {
  return (
    <div className="Nav">
      <NavLink exact to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </div>
  )
}

export default Nav;