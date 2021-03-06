import React from "react";

const Home = () => (
  <div>
    <div className="container">
      <div className="pt-5">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 py-5 mr-auto text-center my-5">
              <img
                src="/site-images/logo.png"
                alt="Sixteen Women"
                style={{ maxWidth: "100%" }}
              />
              <p className="lead pt-3 pb-4">
                Go behind the lives and crimes of the sixteen women that have
                been executed for crimes in America
              </p>
              <a
                className="btn btn-lg btn-danger mr-2"
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

export default Home;
