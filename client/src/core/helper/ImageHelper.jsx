import React from "react";

const ImageHelper = ({
  image,
  width,
  height,
  roundedValue,
  shadowValue,
  children,
}) => {
  const defaultProductImg = "/img/capitan-america-en-avengers.jpg";
  const imageUrl = image ? image : defaultProductImg;

  return (
    <div
      className={`${width} ${height} relative ${roundedValue} ${shadowValue} `}
    >
      <img
        src={imageUrl}
        alt="product"
        className={`w-full h-full object-cover ${roundedValue}`}
      />

      {children}
    </div>
  );
};

export default ImageHelper;
