import React from "react";

class CardImg extends React.Component {
  render() {
    return (
      <div>
        {this.props.src && (
          <img
            className="card-img-top"
            src={this.props.src}
            alt={this.props.alt}
          />
        )}
      </div>
    );
  }
}

export default CardImg;
