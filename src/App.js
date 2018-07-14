import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import PagedArchive from "./pages/PagedArchive";
import Blog from "./pages/Blog";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />

      <Route exact path="/episodes" component={Archive} />
      <Route path="/episodes/page/:number" component={PagedArchive} />

      <Route path="/episode/:slug" component={Blog} />
    </div>
  </Router>
);

export default App;
