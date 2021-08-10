import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato"
        ></link>
      </Helmet>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Gallery />
          </Route>
          <Route
            path="/projects/:id"
            render={(props) => <Project {...props} />}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
