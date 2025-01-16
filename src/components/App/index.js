// == Import
import React from 'react';
import Footer from '../Footer';
import Home from 'src/containers/Home';
import HomeLogged from 'src/containers/HomeLogged';
import MessagesApp from 'src/components/MessagesApp';
import ModalsEvent from 'src/containers/ModalsEvent';
import ProfilPage from 'src/components/ProfilPage';
import About from 'src/components/About';
import PageError from 'src/components/404';
import EventsPage from 'src/containers/EventsPage';
import UserProfils from 'src/components/UserProfils';
import Store from 'src/store';
import { useHistory } from 'react-router-dom';
import LeftProfil from 'src/containers/leftProfil';
// import ModalsDeleteEvent from 'src/containers/ModalsDeleteEvent';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Spinner from 'src/components/Spinner';
import './styles.scss';


// == Composant
const App = ({ user_id, isLogged }) => {
  
// changer SWITCH avec Routes
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={HomeLogged} />
          <Route path="/messages" exact>
          {isLogged ? <MessagesApp /> : <Redirect exact to="/" />}
          </Route>
          <Route path="/events" exact >
          {isLogged ? <EventsPage /> : <Redirect exact to="/" />}
          </Route>
          <Route path={`/events/${user_id}`} exact>
          {isLogged ? <ModalsEvent /> : <Redirect exact to="/" />}
          </Route>
          <Route path={`/users/:user_id`} exact>
          {isLogged ? <ProfilPage /> : <Redirect exact to="/" />}
          </Route> 
          <Route path="/about" exact component={About} />
          <Route component={PageError} />
          <Route path={`/users/${user_id}/events/:id `} exact >
          {isLogged ? <ProfilPage /> : <Redirect exact to="/" />}
          </Route> 

        </Switch>
      </Router>
    </div>

  );
};

// == Export
export default App;
