import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import Main from "./components/Main";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  const { apiKey } = process.env.REACT_APP_API;

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Main />
        <Container className="">
          <Switch>
            {/* <PrivateRoute path="/" component={Home} /> */}

            {/* <Route path="/" exact component={Home} /> */}
            {/* <PrivateRoute path="/profile" component={Profile} /> */}
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
