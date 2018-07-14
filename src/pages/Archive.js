import React from "react";
import _ from "lodash";
import WPAPI from "wpapi";
import axios from "axios";

import Card from "../components/card";
import ArchiveHeader from "../components/archive-header";

const wp = new WPAPI({ endpoint: "https://admin.sixteenwomen.com/wp-json" });

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
      error: {}
    };
  }

  componentDidMount = () => {
    const route = wp
      .posts()
      .perPage(9)
      .embed()
      .toString();

    axios
      .get(route)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  componentWillUnmount = () => {};

  render = () => {
    const posts = this.state.posts;
    const chunks = _.chunk(posts, 3);
    const rows = chunks.map((chunk, idx) => {
      const cardList = chunk.map((card, idx) => {
        const middle = idx === 1 ? true : false;
        return <Card middle={middle} {...card} key={idx} />;
      });
      return (
        <div key={idx} className="row mb-5">
          <div className="col-lg-12 m-auto">
            <div className="card-group">{cardList}</div>
          </div>
        </div>
      );
    });
    return (
      <div className="archive">
        <ArchiveHeader />
        <div className="container py-3">{rows}</div>
      </div>
    );
  };
}

export default Archive;
