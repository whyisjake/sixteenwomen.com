import React from "react";
import _ from "lodash";
import WPAPI from "wpapi";
import axios from "axios";

import Rubric from "../components/rubric";
import Hed from "../components/hed";
import Dek from "../components/dek";
import DateTime from "../components/dateTime";

const wp = new WPAPI({ endpoint: "http://admin.sixteenwomen.com/wp-json" });

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      isLoading: false,
      error: {}
    };
  }

  componentDidMount = () => {
    const slug = this.props.match.params.slug;

    const route = wp
      .posts()
      .slug(slug)
      .embed()
      .toString();

    axios
      .get(route)
      .then(res => {
        const post = res.data[0];
        this.setState({ post });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  componentWillUnmount = () => {};

  render() {
    console.log("Render State", this.state);
    const { isLoading, post } = this.state;
    console.log("State", post);
    let hed = _.get(post, "title.rendered");
    let body = _.get(post, "content.rendered");
    let rubric = _.get(post, "_embedded.wp:term.0.0.name");
    let rawExcerpt = _.get(post, "excerpt.rendered");
    let excerpt = rawExcerpt === body ? "" : rawExcerpt;
    return (
      <div>
        {isLoading && <h1>Loading</h1>}
        <div className="pt-3">
          <div className="container d-flex flex-column pt-5">
            <div className="row my-auto my-5 pt-5 pb-4">
              <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
                <Rubric text={rubric} />
                <Hed text={hed} />
                <Dek text={excerpt} />
                <DateTime dateTime={post.date} />
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-column py-1">
          <div className="row my-auto my-5 pb-2">
            <div
              className="col-lg-8 col-md-10 col-sm-12 mx-auto"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
