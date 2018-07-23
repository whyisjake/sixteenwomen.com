import React from "react";
import Moment from "react-moment";

class DateTime extends React.Component {
  render() {
    const dateToFormat = new Date(this.props.dateTime);
    return (
      <h6 className="mb-3">
        {this.props.dateTime && (
          <p className="text-secondary small">
            Last updated:{" "}
            <Moment date={dateToFormat} format="MM/DD/YYYY \a\t h:MM a" />
          </p>
        )}
      </h6>
    );
  }
}

export default DateTime;
