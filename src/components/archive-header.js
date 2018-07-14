import React from "react";

class ArchiveHeader extends React.Component {
  render() {
    return (
      <div className="pt-5">
        <div className="container d-flex flex-column py-5">
          <div className="row my-auto my-5 pt-5">
            <div className="col-lg-8 col-md-10 col-sm-12 mx-auto text-center text-dark">
              <h1 className="mb-3 font-weight-normal display-3">
                Hand picked articles
              </h1>
              <p className="lead text-secondary">
                Scaevola ocurreret et sit, illud instructior lorem ipsum
              </p>
              <ul className="list-inline mt-5">
                <li className="list-inline-item">
                  <a
                    className="btn-link h4 text-secondary pr-1"
                    href="https://instagram.com/sixteenwomen"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-link h4 text-secondary p-1"
                    href="https://www.sixteenwomen.com/rss"
                  >
                    <i className="fa fa-rss" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-link h4 text-secondary p-1"
                    href="https://www.sixteenwomen.com/player"
                  >
                    <i className="fa fa-headphones" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArchiveHeader;
