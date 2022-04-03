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
 *         msgs => [string...]
 *
 * App -> (Nav, Routes)
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  console.log('APP', currentUser, token);
  console.log("Jobly API token is saved: ", JoblyApi.token === token);

  //check local storage token for the first time,
  //if there is update the token
  useEffect(function checkLocalToken() {
    const localToken = localStorage.getItem("token");
    if (localToken) updateToken(localToken);
  }, [])

  function updateToken(token) {
    setToken(() => {
      JoblyApi.token = token;
      return token;
    });
    localStorage.setItem("token", token);
  }


  function logout() {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("token");
  }

  /** updates user on backend
   * updateData => {firstName, lastName, email}
   *
   * returns success status msg in array
   */
  async function updateUser(updateData) {
    const res = await JoblyApi.updateUser(updateData, currentUser.username);
    setCurrentUser(res);
    return ["Profile Updated!"];
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
      <Router>
        <Nav logout={logout} />
        <div className="App">
          <Routes updateToken={updateToken}
            updateUser={updateUser}
            user={currentUser} />
        </div>
      </Router>
    </UserContext.Provider>

  );
}

export default App;