import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetails from './CompanyDetails';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';

/** Routes render component
 *
 * props: updateToken => fn,
 *        updateUser => fn,
 *        user => {username, fName, lName, email, [applications...]}
 *        msgs => [str...]
 *
 *
 * state: none
 *
 * App -> Routes -> (Homepage, CompanyList,
 *                   CompanyDetails, JobList,
 *                   SignupForm, LoginForm,
 *                   ProfileForm)
 */
function Routes({ updateToken, updateUser, user }) {
  //UI concerns here, not security of the routes
  return (
    <Switch>
      <>
        <Route exact path="/">
          <Homepage />
        </Route>
        {user &&
          <>
            <Route exact path="/companies">
              <CompanyList />
            </Route>
            <Route exact path="/companies/:handle">
              <CompanyDetails />
            </Route>
            <Route exact path="/jobs">
              <JobList />
            </Route>
            <Route exact path="/profile/:username">
              <ProfileForm updateUser={updateUser} user={user} />
            </Route>
          </>
        }
        {!user &&
          <>
            <Route exact path="/signup">
              <SignupForm updateToken={updateToken} />
            </Route>
            <Route exact path="/login">
              <LoginForm updateToken={updateToken} />
            </Route>
          </>
        }
        <Redirect to="/" />
      </>
    </Switch>
  );
}
export default Routes;