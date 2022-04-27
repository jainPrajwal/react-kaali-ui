const Avatar = ({
  size,
  isfallback,
  fallbackText,
  fallbackColor,
  showStatus,
  typeOfStatus,
}) => {
  return isfallback ? (
    <div className="avatar-container">
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
    </div>
  ) : (
    <div className="avatar-container">
      <div className="image-container">
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg"
          alt="avatar"
          className={`avatar avatar-${size}`}
        />
        {showStatus && (
          <span className={`status status-${typeOfStatus}`}></span>
        )}
      </div>
    </div>
  );
};

export { Avatar };
