import React from "react";

class IconList extends React.Component {
  render() {
    const links = this.props.links;
    const listItems = links.map((link, idx) => (
      <li key={idx} className="list-inline-item">
        <a className="btn-link h4 text-secondary pr-1" href={link.href}>
          <i className={link.iconClass} />
        </a>
      </li>
    ));
    return <ul className="list-inline mt-5">{listItems}</ul>;
  }
}

export default IconList;
