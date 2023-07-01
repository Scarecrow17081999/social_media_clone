import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 54, color: "grey" }} spin />
);

const Loader = () => {
  return (
    <Spin
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      indicator={antIcon}
    />
  );
};

export default Loader;
