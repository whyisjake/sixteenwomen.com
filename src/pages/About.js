import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pt-5 pb-5 mb-2">
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 mx-auto" style={{textAlign: 'center'}}>
              <img src="/site-images/logo.png" alt="Sixteen Women" />
              <hr className="mt-3 mb-5" />
              <p className="lead pt-3 pb-4 mr-5 pr-5">Go behind the lives and crimes of the sixteen women that have been executed for crimes in America</p>
              <a className="btn btn-lg btn-info mr-2" id="buy-button" href="https://itunes.com/subscribe" rel="noopener noreferrer" target="_blank">Subscribe on iTunes</a>
              <p className="mt-4 mb-4"><small className="text-secondary"><i className="fa fa-heart mr-2"></i>via Design@USC</small></p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-10 col-sm-12 mx-auto">
              <img className="w-100 my-5 pb-4" src="site-images/album-art.jpg" />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
              <h3 className="h4 mb-3">Stories</h3>
              <p className="lead mb-4 text-secondary mr-5">Lorem ipsum dolor sit amet, cum nibh error sapientem</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12 ml-auto">
              <ul className="text-secondary list-unstyled mb-4">
                <li className="lead mb-2"><i className="fa fa-check mr-2 text-secondary"></i>Mobile first design</li>
                <li className="lead mb-2"><i className="fa fa-check mr-2 text-secondary"></i>1000×8 SVG icons are included</li>
                <li className="lead mb-2"><i className="fa fa-check mr-2 text-secondary"></i>Easy customization</li>
                <li className="lead mb-2"><i className="fa fa-check mr-2 text-secondary"></i>Clean code</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 mr-auto">
              <ul className="text-secondary list-unstyled mb-4">
                <li className="lead mb-2"><i className="fa fa-check mr-2 text-secondary"></i>Mobile first design</li>
                <li className="lead mb-2"><i className="fa fa-check mr-2 text-secondary"></i>1000×8 SVG icons are included</li>
                <li className="lead mb-2"><i className="fa fa-check mr-2 text-secondary"></i>Easy customization</li>
                <li className="lead mb-2"><i className="fa fa-check mr-2 text-secondary"></i>Clean code</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
