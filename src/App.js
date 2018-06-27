import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";

const App = () => (
  <Router>
    <div>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/episodes" component={Episodes} />
    </div>
  </Router>
);

const Home = () => (
  <div className="container">
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div className="container">
    <h1>About</h1>
    <p>Narrative and Storytelling Lab project by Caitlin Stetson, Jake Spurlock, Paige Sullivan, and Tom Henkenius.</p>
    <p>More info <a href="https://design.usc.edu">here</a></p>
  </div>
);

const Episodes = ({ match }) => (
  <div className="container">
    <h2>Episodes</h2>
    <ul>
      <li>
        Episode 1: Christina Marie Riggs
      </li>
      <li>
        TK
      </li>
      <li>
        TK
      </li>
    </ul>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
