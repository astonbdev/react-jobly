import { Route, Switch} from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetails from './CompanyDetails';

/**
 * Router component
 *
 * props: none
 * state:none
 *
 * App -> Routes -> Homepage, CompanyList, CompanyDetails, JobList
 */

//Add redirect
function Routes (){
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetails />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
    </Switch>
  )
}
export default Routes;
