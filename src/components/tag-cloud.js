import React from "react";

class Hed extends React.Component {
  render() {
    const tags = this.props.tags;
    const listItems = tags.map(tag => (
      <span key={tag.id} className="badge badge-pill badge-primary">
        {tag.name}
      </span>
    ));
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
            {listItems}
          </div>
        </div>
      </div>
    );
  }
}

export default Hed;
