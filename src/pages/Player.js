import React from "react";
import ReactPlayer from "react-player";

export default class About extends React.Component {
  render() {
    return (
      <div className="pt-5 pb-5 mb-2">
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
              <img src="/site-images/logo.png" alt="Sixteen Women" />
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZUCj7Ifex4Q"
                playing
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
