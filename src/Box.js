import React from "react";

function Box({
  id,
  handleRemove,
  width = 10,
  height = 10,
  backgroundColor = "red"
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor
        }}
      />
      <button onClick={remove}>Remove this one</button>
    </div>
  );
}

export default Box;
