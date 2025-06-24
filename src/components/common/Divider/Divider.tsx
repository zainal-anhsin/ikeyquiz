import React from "react";

const Divider: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    style={{
      width: "100%",
      maxWidth: "1200px",
      height: 4,
      background: "#f2f6fe",
      margin: "40px auto 0 auto",
      border: "none",
      borderRadius: 2,
      ...style,
    }}
  />
);

export default Divider;
