import React from "react";
import Card from "../components/card";
import ArchiveHeader from "../components/archive-header";

function Archive(props) {
  return (
    <div className="archive">
      <ArchiveHeader />
      <div className="container py-3">
        <div className="row mb-5">
          <div className="col-lg-12 m-auto">
            <div className="card-group">
              <Card />
              <Card middle={true} />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3">
        <div className="row mb-5">
          <div className="col-lg-12 m-auto">
            <div className="card-group">
              <Card />
              <Card middle={true} />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archive;
