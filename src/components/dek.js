import React from "react";

class Hed extends React.Component {
  render() {
    return (
      <div>
        {this.props.text && (
          <p className="lead text-secondary mb-4">{this.props.text}</p>
        )}
      </div>
    );
  }
}

export default Hed;
