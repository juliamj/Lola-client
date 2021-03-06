import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import './styles/searchbar.css';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import EditProfile from './components/profile/EditProfile';
import Matches from './components/Matches';
import About from './components/About';
import Settings from './components/Settings';


import MatchedUserProfile from './components/MatchedUserProfile';
import Messages from './components/Messages';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppContext } from './components/Context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const token = localStorage.getItem('x-auth-token');

const isAuthenticated = () => {
  if (token === null || token === undefined || token === false) {
    console.log('a');
    return false;
  } else {
    return token;
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/users/login' }} />
      )
    }
  />
);

function App() {
  const { state } = useContext(AppContext);
  return (
    <div className='App page-container'>
    <div className="content-wrap">
      {state.isLoggedIn && <Header />}
      {/* <Header/> */}
      <Switch>
        <Route exact path='/'>
          {(!state.isLoggedIn && <Welcome />) || <Dashboard />}
        </Route>
        <Route exact path='/users/register'>
          <Register />
        </Route>
        <Route exact path='/users/login'>
          <Login />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        {/* for building */}
        {/* <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/editprofile'>
          <EditProfile />
        </Route>
        <Route exact path='/matches'>
          <Matches />
        </Route>
        <Route exact path='/matchedUserProfile/:id'>
          <MatchedUserProfile />
        </Route>
        <Route exact path='/messages'>
          <Messages />
        </Route> */}
       
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/editprofile' component={EditProfile} />
        <PrivateRoute exact path='/matches' component={Matches} />
        <PrivateRoute exact path='/matchedUserProfile/:id' component={MatchedUserProfile}/>
        <PrivateRoute exact path='/messages' component={Messages} />
        <PrivateRoute exact path='/settings' component={Settings} />
        

        {/* <PrivateRoute exact path='/settings' component={Settings} /> */}
      </Switch>
      <Footer />
      </div>
    </div>
  );
}

export default App;
