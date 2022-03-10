import Nav from './Nav';
import Routes from './Routes';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext from "./userContext";
import JoblyApi from '../api';

/**
 * Main App Component
 *
 * App -> Nav, Routes
 *
 */

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  function updateUser(user, token){

    setUser(() => user);
    setToken(() => {
      JoblyApi.token = token;
      return token;
    });
  }

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Router>
          <Nav />
          <Routes updateUser={updateUser}/>
        </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;