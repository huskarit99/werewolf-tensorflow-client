import Spin from "antd/es/spin";
// import "antd/es/spin/style/css";
import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="example">
      <Spin size="large" />
    </div>
  );
};
export default Loading;
