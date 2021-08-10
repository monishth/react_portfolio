import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>@mt.clicks</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Gallery />
          </Route>
          <Route path="/projects/:id"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
