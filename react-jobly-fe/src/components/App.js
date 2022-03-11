import Nav from './Nav';
import Routes from './Routes';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext from "./userContext";
import JoblyApi from '../api';
import jwt_decode from "jwt-decode";

/** Main App Component
 *
 * Props: None
 * States: currentUser => {username, fName, lName, email, [applications...]},
 *         token => string
 * 
 * App -> (Nav, Routes)
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  console.log('APP', currentUser, token);
  
  function updateToken(token) {
    setToken(() => {
      JoblyApi.token = token;
      return token;
    });
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  useEffect(function getUser() {
    if (token === null) return;

    async function fetchUser() {
      const username = await jwt_decode(token).username;
      const user = await JoblyApi.getUser(username);
      setCurrentUser(() => user);
    }
    fetchUser();
  }, [token])

  return (
    <UserContext.Provider value={currentUser}>
      <div className="App container">
        <Router>
          <Nav logout={logout} />
          <Routes updateToken={updateToken} user={currentUser} />
        </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;