import React from "react";
import _ from "lodash";
import WPAPI from "wpapi";
import axios from "axios";

import getTags from "../helpers/helpers";

import Footer from "../components/footer";
import Rubric from "../components/rubric";
import Hed from "../components/hed";
import Dek from "../components/dek";
import DateTime from "../components/dateTime";
import Lede from "../components/lede";
import TagCloud from "../components/tag-cloud";

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
    const { isLoading, post } = this.state;
    let hed = _.get(post, "title.rendered");
    let body = _.get(post, "content.rendered");
    let rubric = _.get(post, "_embedded.wp:term.0.0.name");
    let rawExcerpt = _.get(post, "excerpt.rendered");
    let excerpt = rawExcerpt === body ? "" : rawExcerpt;
    let ledeImg = _.get(post, "_embedded.wp:featuredmedia[0]");
    let tags = getTags(_.get(post, "_embedded.wp:term"), "post_tag");

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
        {ledeImg && (
          <Lede
            src={ledeImg.source_url}
            title={ledeImg.title.rendered}
            alt={ledeImg.alt_text}
          />
        )}
        <div className="container d-flex flex-column py-1">
          <div className="row my-auto my-5 pb-2">
            <div
              className="col-lg-8 col-md-10 col-sm-12 mx-auto"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        </div>
        <TagCloud tags={tags} />
        <Footer />
      </div>
    );
  }
}

export default Blog;
