import React from "react";
import { Link } from "react-router-dom";

class Lede extends React.Component {
  render() {
    const middle = this.props.middle ? "mx-5" : "";
    return (
      <div className={"card border rounded " + middle}>
        <Link to="https://www.google.com">
          <img
            className="card-img-top"
            src="/images/photo-40.jpg"
            alt="Card asdf cap"
          />
        </Link>
        <div className="card-body pt-4">
          <p className="card-text mb-4 pb-0">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
          <a className="card-link" href="https://www.google.com">
            <h3 className="card-title font-weight-normal text-dark">
              Cactus project
            </h3>
          </a>
          <p className="card-text text-secondary lead mb-4">
            This is a wider card with supporting text below as a natural lorem
          </p>
        </div>
        <div className="card-footer bg-white py-3 border-0">
          <small>
            <Link
              className="card-link my-0 mx-0 px-0 text-secondary"
              to="https://www.google.com"
            >
              <i className="fa fa-comment mr-2" />32 comments
            </Link>
          </small>
        </div>
      </div>
    );
  }
}

export default Lede;
