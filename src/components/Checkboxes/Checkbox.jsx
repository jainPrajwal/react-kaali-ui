import { useState } from "react";
import "./Checkbox.css";
const Checkbox = ({ color }) => {
    const [isChecked, setIsChecked] = useState(true);
  
    const toggleValue = () => {
      setIsChecked((prevState) => !prevState);
    };
    return (
      <label className={`checkbox-label checkbox${color}-label`} >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleValue()}
        />
        <span className="checkmark"></span>
      </label>
    );
  };
  
  export { Checkbox };