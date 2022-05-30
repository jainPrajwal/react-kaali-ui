import React from "react";
export const Avatar = ({
  size=`md`,
  isfallback,
  fallbackText,
  fallbackColor,
  showStatus,
  imageUrl=`https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg`,
  typeOfStatus,
}) => {
  return isfallback ? (
    
      <div className="image-container">
        <div
          className={`avatar-letter avatar-${size}`}
          style={{ background: fallbackColor }}
        >
          {fallbackText}
        </div>
        {showStatus && (
          <span className={`status status-${typeOfStatus}`}></span>
        )}
      </div>
    
  ) : (
   
      <div className="image-container" style={{width: `fit-content`}}>
        <img
          src={imageUrl}
          alt="avatar"
          className={`avatar avatar-${size}`}
        />
        {showStatus && (
          <span className={`status status-${typeOfStatus}`}></span>
        )}
      </div>
   
  );
};
