import React from "react";

const SizeList = ({ sizeList, deleteSize }) => {
  return (
    <div>
      {sizeList.length > 0 && <h1 className="heading">Size:</h1>}
      {sizeList.length > 0 && (
        <div className="flex flex-wrap">
          {sizeList.map((size, index) => (
            <div key={index} className="size" onClick={() => deleteSize(size)}>
              {size.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizeList;
