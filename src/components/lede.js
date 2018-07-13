import React from "react";

class Lede extends React.Component {
  render() {
    return (
      <div>
        {this.props.src && (
          <img
            className="w-100 my-4 pb-3"
            alt={this.props.alt}
            {...this.props}
          />
        )}
      </div>
    );
  }
}

export default Lede;
