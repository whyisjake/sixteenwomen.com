import React from "react";

class Rubric extends React.Component {
  render() {
    return (
      <h6 className="mb-3">
        {this.props.text && (
          <span
            className="badge badge-secondary"
            dangerouslySetInnerHTML={{ __html: this.props.text }}
          />
        )}
      </h6>
    );
  }
}

export default Rubric;
