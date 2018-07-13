import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

export default class ComingSoon extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div
        className="container-fluid"
        id="hero-08"
        style={{ background: "#24252A" }}
      >
        <div className="row" style={{ minHeight: "100vh" }}>
          <div className="col-lg-4 col-md-8 col-sm-12 py-5 m-auto">
            <h2
              className="display-4 mb-3 text-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Coming soon!{" "}
            </h2>
            <p className="mb-5 lead text-light mr-5" />
            <form>
              <div className="form-row mb-4">
                <div className="col-lg-8 col-md-8 col-sm-12 pb-2 mx-auto mx-lg-o">
                  <input
                    className="form-control form-control-lg border-0 rounded-0"
                    type="text"
                    placeholder="Enter your E-mail"
                  />
                </div>
                <div className="col-lg-4 col-md-8 col-sm-12 pb-2 mx-auto mx-lg-0">
                  <button
                    className="btn btn-warning w-100 btn-lg border-0 rounded-0"
                    type="submit"
                  >
                    Register <i className="fa fa-angle-right ml-2" />
                  </button>
                </div>
              </div>
            </form>
            <ul className="list-inline mt-5 mb-4">
              <li className="list-inline-item">
                <a className="btn-link h2 text-light pr-1" href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-link h2 text-light p-1" href="#">
                  <i className="fa fa-facebook-official" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-link h2 text-light p-1" href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-link h2 text-light p-1" href="#">
                  <i className="fa fa-behance-square" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-link h2 text-light p-1" href="#">
                  <i className="fa fa-github" />
                </a>
              </li>
            </ul>
            <p className="text-secondary">
              <small>
                <i className="fa fa-heart mr-2" />Version 0.98 available<a
                  className="btn-link text-secondary"
                  href="#"
                >
                  <u>for download </u>
                </a>
              </small>
            </p>
          </div>
          <div
            className="col-lg-6 col-md-12"
            style={{
              backgroundImage: "url('/images/photo-43.jpg')",
              backgroundPosition: "center center no-repeat",
              backgroundSize: "cover",
              minHeight: "110vh"
            }}
          />
        </div>
      </div>
    );
  }
}
