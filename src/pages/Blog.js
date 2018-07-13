import React from "react";
import Rubric from "../components/rubric";
import Hed from "../components/hed";
import Dek from "../components/dek";
import DateTime from "../components/dateTime";

function Blog(props) {
  return (
    <div>
      <div className="pt-3">
        <div className="container d-flex flex-column pt-5">
          <div className="row my-auto my-5 pt-5 pb-4">
            <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
              <Rubric text="Jake was here" />
              <Hed text="Material Design System with Sketch&nbsp;Symbols" />
              <Dek text="Learn how to design smarter and faster using material guidelines built into nested" />
              <DateTime dateTime="2018-08-12 12:12:01" />
            </div>
          </div>
        </div>
      </div>
      <img className="w-100 my-4 pb-3" src="/images/photo-40.jpg" alt="asdf" />
      <div className="container d-flex flex-column py-5">
        <div className="row my-auto my-5 pb-2">
          <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
            <h3 className="h4 mb-4">Mission</h3>
            <p className="lead mb-4 text-secondary mr-5">
              Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis
              summo at, tale tibique conclusionemque pro ut. Nec tibique
              deleniti delectus te, zril quaestio conclusionemque vis no, posse
              appellantur mei ei. At vix corpora fastidii vulputate. Lorem ipsum
              dolor sit amet, cum nibh error sapientem at. Qui duis summo at,
              tale tibique conclusionemque pro ut, nec tibique deleniti delectus
            </p>
            <p className="lead mb-4 text-secondary mr-5">
              Nec tibique deleniti delectus te, zril quaestio conclusionemque
              vis no, posse appellantur mei ei. At vix corpora fastidii
              vulputate. Lorem ipsum dolor sit amet, cum nibh error sapientem
              at. Qui duis summo at, tale tibique conclusionemque pro ut, nec
              tibique deleniti delectus
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-10 col-sm-12 mx-auto">
            <img
              className="w-100 my-5 pb-4"
              src="/images/photo-46.jpg"
              alt="asd"
            />
          </div>
        </div>
        <div className="row my-auto my-5 pb-2">
          <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
            <h3 className="h4 mb-3">Features</h3>
            <p className="lead mb-4 text-secondary mr-5">
              Lorem ipsum dolor sit amet, cum nibh error sapientem at. Qui duis
              summo at, tale tibique conclusionemque pro ut. Nec tibique
              deleniti delectus te, zril quaestio conclusionemque vis no, posse
              appellantur mei ei. At vix corpora fastidii vulputate
            </p>
            <ul className="text-secondary list-unstyled mb-4">
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary" />Mobile first
                design{" "}
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary" />1000×8 SVG
                icons are included
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary" />Easy
                customization
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary" />Clean code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
