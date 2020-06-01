import React from "react";

export default function({ src, width = 300, height = 200 }) {
  return (
    <div
      className="image"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "8px"
      }}
    />
  );
}
