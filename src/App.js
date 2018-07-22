import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Archive from "./pages/Archive";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import PagedArchive from "./pages/PagedArchive";
import Player from "./pages/Player";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/episodes" component={Archive} />
      <Route path="/episodes/page/:number" component={PagedArchive} />
      <Route path="/episode/:slug" component={Blog} />
      <Route path="/player" component={Player} />
    </div>
  </Router>
);

export default App;
