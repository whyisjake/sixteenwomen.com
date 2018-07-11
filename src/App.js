import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
  <div>
    <div className="container">
      <div className="pt-5">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 py-5 mr-auto text-left my-5">
              <p className="display-4 mb-2 mt-4 mr-5">Sixteen Women</p>
              <p className="lead pt-3 pb-4 mr-5 pr-5">Go behind the lives and crimes of the sixteen women that have been executed for crimes in America</p>
              <a className="btn btn-lg btn-info mr-2" id="buy-button" href="https://itunes.com/subscribe" rel="noopener noreferrer" target="_blank">Subscribe on iTunes</a>
              <p className="mt-4 mb-4"><small className="text-secondary"><i className="fa fa-heart mr-2"></i>via Design@USC</small></p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src="site-images/album-art.jpg" style={{maxWidth:"100%"}} alt="Sixteen Women Album Art" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid" id="hero-08" style={{background: "#24252A"}}>
      <div className="row" style={{minHeight: '100vh'}}>
        <div className="col-lg-4 col-md-8 col-sm-12 py-5 m-auto">
          <h2 className="display-4 mb-3 text-light" style={{fontFamily: "'Montserrat', sans-serif"}}>Coming soon! </h2>
          <p className="mb-5 lead text-light mr-5">Cempus amet donec, egestas pulvinar amet semper accusamus commodo, magna lorem ipsum dolor set lorem ipsum dolor set amet</p>
          <form>
            <div className="form-row mb-4">
              <div className="col-lg-8 col-md-8 col-sm-12 pb-2 mx-auto mx-lg-o">
                <input className="form-control form-control-lg border-0 rounded-0" type="text" placeholder="Enter your E-mail" />
              </div>
              <div className="col-lg-4 col-md-8 col-sm-12 pb-2 mx-auto mx-lg-0">
                <button className="btn btn-warning w-100 btn-lg border-0 rounded-0" type="submit">Register <i className="fa fa-angle-right ml-2"></i></button>
              </div>
            </div>
          </form>
          <ul className="list-inline mt-5 mb-4">
            <li className="list-inline-item"><a className="btn-link h2 text-light pr-1" href="#"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a className="btn-link h2 text-light p-1" href="#"><i className="fa fa-facebook-official"></i></a></li>
            <li className="list-inline-item"><a className="btn-link h2 text-light p-1" href="#"><i className="fa fa-dribbble"></i></a></li>
            <li className="list-inline-item"><a className="btn-link h2 text-light p-1" href="#"><i className="fa fa-behance-square"></i></a></li>
            <li className="list-inline-item"><a className="btn-link h2 text-light p-1" href="#"><i className="fa fa-github"></i></a></li>
          </ul>
          <p className="text-secondary"><small><i className="fa fa-heart mr-2"></i>Version 0.98 available<a className="btn-link text-secondary" href="#"><u>for download </u></a></small></p>
        </div>
        <div className="col-lg-6 col-md-12" style={{
          backgroundImage: "url('/images/photo-43.jpg')",
          backgroundPosition: 'center center no-repeat',
          backgroundSize: 'cover',
          minHeight: '110vh'
        }}>
      </div>
    </div>
  </div>
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

export default App;
