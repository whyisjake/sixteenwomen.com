import React from "react";

function Blog(props) {
  console.log(props);
  return (
    <div className="archive">
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
      <div className="py-5 bg-white" id="cards">
        <div className="container py-3">
          <div className="row mb-5">
            <div className="col-lg-12 m-auto">
              <div className="card-group">
                <div className="card border rounded">
                  <a href="https://www.google.com">
                    <img
                      className="card-img-top"
                      src="/images/photo-40.jpg"
                      alt="Card asdf cap"
                    />
                  </a>
                  <div className="card-body pt-4">
                    <p className="card-text mb-4 pb-0">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <a className="card-link" href="https://www.google.com">
                      <h3 className="card-title font-weight-normal text-dark">
                        Cactus project
                      </h3>
                    </a>
                    <p className="card-text text-secondary lead mb-4">
                      This is a wider card with supporting text below as a
                      natural lorem
                    </p>
                  </div>
                  <div className="card-footer bg-white py-3 border-0">
                    <small>
                      <a
                        className="card-link my-0 mx-0 px-0 text-secondary"
                        href="https://www.google.com"
                      >
                        <i className="fa fa-comment mr-2" />32 comments
                      </a>
                    </small>
                  </div>
                </div>
                <div className="card mx-5 border rounded">
                  <a href="https://www.google.com">
                    <img
                      className="card-img-top"
                      src="/images/photo-47.jpg"
                      alt="Card asdf cap"
                    />
                  </a>
                  <div className="card-body pt-4">
                    <p className="card-text mb-4 pb-0">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <a className="card-link" href="https://www.google.com">
                      <h3 className="card-title font-weight-normal text-dark card-link">
                        Ceramics work
                      </h3>
                    </a>
                    <p className="card-text text-secondary lead mb-4">
                      This is a wider card with supporting text below as a
                      natural lorem ipsum dolor set amet ipsum dolor
                    </p>
                  </div>
                  <div className="card-footer bg-white py-3 border-0">
                    <small>
                      <a
                        className="card-link my-0 mx-0 px-0 text-secondary"
                        href="https://www.google.com"
                      >
                        <i className="fa fa-comment mr-2" />32 comments
                      </a>
                    </small>
                  </div>
                </div>
                <div className="card border rounded">
                  <a href="https://www.google.com">
                    <img
                      className="card-img-top"
                      src="/images/photo-42.jpg"
                      alt="Card asdf cap"
                    />
                  </a>
                  <div className="card-body pt-4">
                    <p className="card-text mb-4 pb-0">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <a className="card-link" href="https://www.google.com">
                      <h3 className="card-title font-weight-normal text-dark card-link">
                        Letters project
                      </h3>
                    </a>
                    <p className="card-text text-secondary lead mb-4">
                      This is a wider card with supporting text below as a
                      natural lorem
                    </p>
                  </div>
                  <div className="card-footer bg-white py-3 border-0">
                    <small>
                      <a
                        className="card-link my-0 mx-0 px-0 text-secondary"
                        href="https://www.google.com"
                      >
                        <i className="fa fa-comment mr-2" />32 comments
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="card-group">
                <div className="card border rounded">
                  <a href="https://www.google.com">
                    <img
                      className="card-img-top"
                      src="/images/photo-46.jpg"
                      alt="Card asdf cap"
                    />
                  </a>
                  <div className="card-body pt-4">
                    <p className="card-text mb-4 pb-0">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <a className="card-link" href="https://www.google.com">
                      <h3 className="card-title font-weight-normal text-dark">
                        Cactus project
                      </h3>
                    </a>
                    <p className="card-text text-secondary lead mb-4">
                      This is a wider card with supporting text below as a
                      natural lorem
                    </p>
                  </div>
                  <div className="card-footer bg-white py-3 border-0">
                    <small>
                      <a
                        className="card-link my-0 mx-0 px-0 text-secondary"
                        href="https://www.google.com"
                      >
                        <i className="fa fa-comment mr-2" />32 comments
                      </a>
                    </small>
                  </div>
                </div>
                <div className="card mx-5 border rounded">
                  <a href="https://www.google.com">
                    <img
                      className="card-img-top"
                      src="/images/photo-41.jpg"
                      alt="Card asdf cap"
                    />
                  </a>
                  <div className="card-body pt-4">
                    <p className="card-text mb-4 pb-0">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <a className="card-link" href="https://www.google.com">
                      <h3 className="card-title font-weight-normal text-dark card-link">
                        Ceramics work
                      </h3>
                    </a>
                    <p className="card-text text-secondary lead mb-4">
                      This is a wider card with supporting text below as a
                      natural lorem ipsum dolor set amet ipsum dolor
                    </p>
                  </div>
                  <div className="card-footer bg-white py-3 border-0">
                    <small>
                      <a
                        className="card-link my-0 mx-0 px-0 text-secondary"
                        href="https://www.google.com"
                      >
                        <i className="fa fa-comment mr-2" />32 comments
                      </a>
                    </small>
                  </div>
                </div>
                <div className="card border rounded">
                  <a href="https://www.google.com">
                    <img
                      className="card-img-top"
                      src="/images/photo-48.jpg"
                      alt="Card asdf cap"
                    />
                  </a>
                  <div className="card-body pt-4">
                    <p className="card-text mb-4 pb-0">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <a className="card-link" href="https://www.google.com">
                      <h3 className="card-title font-weight-normal text-dark card-link">
                        Letters project
                      </h3>
                    </a>
                    <p className="card-text text-secondary lead mb-4">
                      This is a wider card with supporting text below as a
                      natural lorem
                    </p>
                  </div>
                  <div className="card-footer bg-white py-3 border-0">
                    <small>
                      <a
                        className="card-link my-0 mx-0 px-0 text-secondary"
                        href="https://www.google.com"
                      >
                        <i className="fa fa-comment mr-2" />32 comments
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-12 text-center pt-5">
              <nav className="my-5" aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a
                      className="page-link text-secondary"
                      href="https://www.google.com"
                      tabIndex="-1"
                    >
                      <i className="fa fa-angle-left mx-1" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link text-info active"
                      href="https://www.google.com"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link text-info"
                      href="https://www.google.com"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link text-info"
                      href="https://www.google.com"
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link text-info"
                      href="https://www.google.com"
                    >
                      <i className="fa fa-angle-right mx-1" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
