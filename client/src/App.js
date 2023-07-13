import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route
          render={({ location }) => {
            const locationKey = location.pathname; // Use the pathname as the key
            return (
              <TransitionGroup>
                <CSSTransition
                  key={locationKey}
                  timeout={500}
                  classNames="page-transition"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />

                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
