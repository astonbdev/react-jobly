import Nav from './Nav';
import Routes from './Routes';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext from "./userContext";
import JoblyApi from '../api';
import jwt from 'jsonwebtoken';

/**
 * Main App Component
 *
 * App -> Nav, Routes
 *
 */

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  function updateToken(token){
    setToken(() => {
      JoblyApi.token = token;
      return token;
    });
  }

  useEffect(function getUser(){
    if(token === null) return;

    async function fetchUser(){
      const username = jwt.decode(token).payload.username;
      const user = await JoblyApi.getUser(username);
      setUser(() => user);
    }
    fetchUser();
  }, [token])

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Router>
          <Nav />
          <Routes updateToken={updateToken}/>
        </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;