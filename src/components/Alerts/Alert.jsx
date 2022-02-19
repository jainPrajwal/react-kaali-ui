import { useEffect, useState } from "react";

const Alert = ({type, text}) => {
  const [isHidden, Hide] = useState(false);
  useEffect(() => {
    
    setTimeout(() => {
     
      if (isHidden) Hide(false);
    }, 3000);
  }, [isHidden]);

  return (
    <div className={`alert-content alert-${type} ${isHidden ? "hide" : ""}`}>
      {text}
      <span
        className="btn-dismiss"
        id="btn-danger-close"
        onClick={() => Hide(true)}
      >
        &times;
      </span>
      
    </div>
  );
};

export { Alert };
