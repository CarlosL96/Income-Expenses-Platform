import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
 
import Login from './components/LoginComponent';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
         <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;