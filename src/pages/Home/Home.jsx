import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

const Home = (props) => {
  if (props.location.pathname !== props.match.path) return <Redirect to="/" />;
  else return <Fragment></Fragment>;
};

export default Home;
