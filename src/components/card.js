import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import striptags from "striptags";
import CardImg from "./card-img";

class Card extends React.Component {
  render() {
    console.log(this.props);
    const middle = this.props.middle ? "mx-5" : "";
    const url = `/episode/${this.props.slug}`;
    const title = _.get(this, "props.title.rendered");
    const ledeImg = _.get(this, "props._embedded.wp:featuredmedia[0]");
    const excerpt =
      striptags(_.get(this, "props.excerpt.rendered")).substr(0, 100) + "...";
    return (
      <div className={"card border rounded " + middle}>
        <Link to={url}>
          {ledeImg && (
            <CardImg
              src={ledeImg.source_url}
              title={ledeImg.title.rendered}
              alt={ledeImg.alt_text}
            />
          )}
        </Link>
        <div className="card-body pt-4">
          <Link to={url}>
            <h3
              className="card-title font-weight-normal text-dark"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Link>
          <p
            className="card-text text-secondary lead mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
        <div className="card-footer bg-white py-3 border-0">
          <small>
            <Link className="card-link my-0 mx-0 px-0 text-secondary" to={url}>
              <i className="fa fa-headphones mr-2" />Listen Now
            </Link>
          </small>
        </div>
      </div>
    );
  }
}

export default Card;
