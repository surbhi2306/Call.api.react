import React from "react";

//functional component for form
const Card = ({ first_name, last_name, email, avatar }) => {
  return (
    <div className="tc bg-light dib br3 grow bw2 m-3 pt-5">
      <div className="row mx-5">
        <img alt="kunika" src={avatar} className="rounded-circle z-depth-2" />
      </div>
      <div className="row mx-5">
        <div className="pt-3">
          <h4 className="text-dark">
            {first_name} {last_name}
          </h4>
          <p className="text-muted">
            <small>{email}</small>
          </p>
        </div>
      </div>
      <div className="row border-top no-gutters">
        <div className="col-6 border-right px-3 py-2">
          <a href="#">
            <i
              className="fa fa-envelope-o fa-lg text-dark"
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="col-6 px-3 py-2">
          <a href="#">
            <i className="fa fa-skype fa-lg text-dark" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
