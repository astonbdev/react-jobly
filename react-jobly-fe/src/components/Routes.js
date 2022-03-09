import { Route, Switch} from 'react-router-dom';
import Homepage from './Homepage';
import Companies from './Companies';
import Jobs from './Jobs';

function Routes (){
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/companies">
        <Companies />
      </Route>
      <Route exact path="/jobs">
        <Jobs />
      </Route>
    </Switch>
  )
}
export default Routes;
