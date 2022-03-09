import Nav from './Nav';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
