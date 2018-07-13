import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Blog from "./pages/Blog";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/episodes" component={Archive} />
      <Route path="/episode/:slug" component={Blog} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <div className="container">
      <div className="pt-5">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 py-5 mr-auto text-left my-5">
              <img
                src="/site-images/logo.png"
                alt="Sixteen Women"
                style={{ maxWidth: "100%" }}
              />
              <p className="lead pt-3 pb-4 mr-5 pr-5">
                Go behind the lives and crimes of the sixteen women that have
                been executed for crimes in America
              </p>
              <a
                className="btn btn-lg btn-info mr-2"
                id="buy-button"
                href="https://itunes.com/subscribe"
                rel="noopener noreferrer"
                target="_blank"
              >
                Subscribe on iTunes
              </a>
              <p className="mt-4 mb-4">
                <small className="text-secondary">
                  <i className="fa fa-heart mr-2" />via Design@USC
                </small>
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src="site-images/album-art.jpg"
                style={{ maxWidth: "100%" }}
                alt="Sixteen Women Album Art"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
