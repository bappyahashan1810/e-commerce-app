import React from "react";

const ColorList = ({ colors, deleteColor }) => {
  return (
    <div>
      {colors.length > 0 && <h2 className="heading">Color list:</h2>}
      {colors.length > 0 && (
        <div className="flex flex-wrap">
          {colors.map((color) => (
            <div key={color.id} className="p-2">
              <div
                className="w-[30px] h-[30px]  rounded-full"
                style={{ backgroundColor: color.color }}
                onClick={() => deleteColor(color.color)}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorList;
