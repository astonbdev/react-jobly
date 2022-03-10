import Nav from './Nav';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext from "./userContext";

/**
 * Main App Component
 *
 * App -> Nav, Routes
 *
 */

function App() {
  return (
    <UserContext.Provider value={null}>
      <div className="App">
        <Router>
          <Nav />
          <Routes />
        </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;