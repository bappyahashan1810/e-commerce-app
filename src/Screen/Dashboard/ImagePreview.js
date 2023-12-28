import React from "react";

const ImagePreview = ({ url, heading }) => {
  return (
    <div>
      {url.length > 0 && (
        <div className="mt-3">
          <h3 className="heading">{heading}</h3>
          <div className="w-full h-full object-cover">
            <img src={url} alt="todo" srcset="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
