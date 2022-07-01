import React from "react";
export const Avatar = ({
  size = `md`,
  isfallback = false,
  fallbackText = ``,
  fallbackColor = `var)`,
  showStatus = false,
  imageUrl = `https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg`,
  typeOfStatus = ``,
  isVerified = false,
  sizeOfStatus = `md`,
  cssStatus,
  cssText,
  cssImage,
  cssWrapperAvatar,
}) => {
  return (
    <>
     
      {isfallback ? (
        <div
          className="image-container"
          style={{ width: `fit-content`, ...cssWrapperAvatar }}
        >
          <div
            className={`avatar-letter avatar-${size}`}
            style={{ background: fallbackColor, ...cssText }}
          >
            {fallbackText}
          </div>
          {showStatus && (
            <span
              style={{ ...cssStatus }}
              className={`status ${
                isVerified ? `status-bg-verified` : `status-bg-${typeOfStatus} `
              } status-${sizeOfStatus} ${
                isVerified
                  ? ` status-verified-${sizeOfStatus}`
                  : ` status-${sizeOfStatus}`
              }`}
            >
              {isVerified && (
                <span
                  className={`status-verified-checkmark status-verified-checkmark-${sizeOfStatus}`}
                ></span>
              )}
            </span>
          )}
        </div>
      ) : (
        <div
          className="image-container"
          style={{ width: `fit-content`, ...cssWrapperAvatar }}
        >
          <img
            src={imageUrl}
            alt="avatar"
            className={`avatar avatar-${size}`}
            style={{ ...cssImage }}
          />
          {showStatus && (
            <span
              className={`status ${
                isVerified ? `status-bg-verified` : `status-bg-${typeOfStatus} `
              } status-${sizeOfStatus} ${
                isVerified
                  ? ` status-verified-${sizeOfStatus}`
                  : ` status-${sizeOfStatus}`
              }`}
            >
              {isVerified && (
                <span
                  style={{ ...cssStatus }}
                  className={`status-verified-checkmark status-verified-checkmark-${sizeOfStatus}`}
                ></span>
              )}
            </span>
          )}
        </div>
      )}
    </>
  );
};
