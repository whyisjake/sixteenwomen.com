import React from "react";

class Hed extends React.Component {
  render() {
    const lede = this.props.lede;
    const alt = this.props.alt;
    return (
      <div>
        {this.props.text && (
          <img className="w-100 my-4 pb-3" src={lede} alt={alt} />
        )}
      </div>
    );
  }
}

export default Hed;
