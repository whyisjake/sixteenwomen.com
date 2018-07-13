import React from "react";

class Hed extends React.Component {
  render() {
    return (
      <div>
        {this.props.text && (
          <h1 className="mb-4 display-4">{this.props.text}</h1>
        )}
      </div>
    );
  }
}

export default Hed;
