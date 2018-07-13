import React from "react";

class Rubric extends React.Component {
  render() {
    return (
      <h6 className="mb-3">
        {this.props.text && (
          <span className="badge badge-secondary">{this.props.text}</span>
        )}
      </h6>
    );
  }
}

export default Rubric;
