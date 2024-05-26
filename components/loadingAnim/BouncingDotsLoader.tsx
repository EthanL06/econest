import React from "react";
import "./loading.css";

const BouncingDotsLoader: React.FC<{}> = (props) => {
  return (
    <div className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BouncingDotsLoader;

