import React from "react";
import IconList from "../components/icon-list";
import { header } from "../config/archive-header";

class ArchiveHeader extends React.Component {
  render() {
    return (
      <div className="pt-5">
        <div className="container d-flex flex-column py-5">
          <div className="row my-auto my-5 pt-5">
            <div className="col-lg-8 col-2md-10 col-sm-12 mx-auto text-center text-dark">
              <h1 className="mb-3 font-weight-normal display-3">
                {header.headline}
              </h1>
              <p className="lead text-secondary">{header.subHead}</p>
              <IconList links={header.links} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArchiveHeader;
