import './App.css';
import './assets/css/ccm.css'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
      <Router>
    <div className="App">
        <Switch>

      <Home/>

        </Switch>

    </div>
      </Router>
  );
}

export default App;
