import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { UserGlobalProvider } from './context/userContext/UserState';
import SignInPage from './components/SignIn-Up/SignInPage';
import SignUpPage from './components/SignIn-Up/SignUpPage';
import HomePage from './components/main-sections/HomePage';

const App =()=> {

  return (
    <UserGlobalProvider>
      <div className="App">
        <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/signup' component={SignUpPage} />

          </Switch>
        </Router>
      </div>
    </UserGlobalProvider>
  );
}

export default App;
