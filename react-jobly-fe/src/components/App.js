import Nav from './Nav';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Main App Component
 *
 * App -> Nav, Routes
 *
 */

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes />
      </Router>
    </div>
  );
}

export default App;