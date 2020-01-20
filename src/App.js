import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from 'react-router-dom';
import ListView from './views/List';
import ProfileView from './views/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/heros/:heroId">
            <HeroProfileView />
          </Route>
          <Route path="/heros">
            <ListView />
          </Route>
          <Route path="/">
            <Redirect to="/heros" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function HeroProfileView() {
  const { heroId } = useParams();
  return <ProfileView profileId={ heroId } />
}

export default App;
