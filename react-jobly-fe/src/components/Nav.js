import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <NavLink exact to="/">Jobly</NavLink>
      <NavLink exact to="/companies">Companies</NavLink>
      <NavLink exact to="/jobs">Jobs</NavLink>
    </div>
  )
}

export default Nav;