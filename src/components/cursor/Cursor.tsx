import React, { useRef } from "react";

const Cursor = () => {

  const ref = useRef
  return (
    <div className="global-cursor">
      <div className="cursor-wrapper">
        <span className="cursor-dot" />
      </div>
    </div>
  );
};

export default Cursor;
