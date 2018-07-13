import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col my-5 pt-5">
            <h2 className="display-4 mb-0">Recommended for you</h2>
          </div>
        </div>
        <div className="row mb-5 py-5">
          <div className="col-lg-12 m-auto">
            <div className="card-group">
              <div className="card border rounded">
                <Link to="/">
                  <img
                    className="card-img-top"
                    src="/images/photo-42.jpg"
                    alt="Card asdf cap"
                  />
                </Link>
                <div className="card-body pt-4">
                  <p className="card-text mb-4 pb-0">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <Link className="card-link" to="/">
                    <h3 className="card-title font-weight-normal text-dark">
                      Cactus project
                    </h3>
                  </Link>
                  <p className="card-text text-secondary lead mb-4">
                    This is a wider card with supporting text below as a natural
                    lorem
                  </p>
                </div>
                <div className="card-footer bg-white py-3 border-0">
                  <small>
                    <Link
                      className="card-link my-0 mx-0 px-0 text-secondary"
                      to="#"
                    >
                      <i className="fa fa-comment mr-2" />32 comments
                    </Link>
                  </small>
                </div>
              </div>
              <div className="card mx-5 border rounded">
                <Link to="/">
                  <img
                    className="card-img-top"
                    src="/images/photo-41.jpg"
                    alt="Card asdf cap"
                  />
                </Link>
                <div className="card-body pt-4">
                  <p className="card-text mb-4 pb-0">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <Link className="card-link" to="/">
                    <h3 className="card-title font-weight-normal text-dark card-link">
                      Ceramics work
                    </h3>
                  </Link>
                  <p className="card-text text-secondary lead mb-4">
                    This is a wider card with supporting text below as a natural
                    lorem ipsum dolor set amet ipsum dolor
                  </p>
                </div>
                <div className="card-footer bg-white py-3 border-0">
                  <small>
                    <Link
                      className="card-link my-0 mx-0 px-0 text-secondary"
                      to="#"
                    >
                      <i className="fa fa-comment mr-2" />32 comments
                    </Link>
                  </small>
                </div>
              </div>
              <div className="card border rounded">
                <Link to="/">
                  <img
                    className="card-img-top"
                    src="/images/photo-48.jpg"
                    alt="Card asdf cap"
                  />
                </Link>
                <div className="card-body pt-4">
                  <p className="card-text mb-4 pb-0">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <Link className="card-link" to="/">
                    <h3 className="card-title font-weight-normal text-dark card-link">
                      Letters project
                    </h3>
                  </Link>
                  <p className="card-text text-secondary lead mb-4">
                    This is a wider card with supporting text below as a natural
                    lorem
                  </p>
                </div>
                <div className="card-footer bg-white py-3 border-0">
                  <small>
                    <Link
                      className="card-link my-0 mx-0 px-0 text-secondary"
                      to="#"
                    >
                      <i className="fa fa-comment mr-2" />32 comments
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
