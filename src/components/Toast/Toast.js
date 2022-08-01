import React, { useEffect } from "react";
import { useToast } from "./useToast";
import "./Toast.css";
import { handleCloseToast } from "./utils/handleCloseToast";



const Toast = ({
  type = `success`,
  element = <></>,
  id,
  toastDelay,
  exit = false,
}) => {
  

  const { toastDispatch } = useToast();

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleCloseToast({  toastDispatch, id });
    }, toastDelay || 2000);

    return () => clearTimeout(timerId);
  }, []);
  return (
    <>
      <div
        className={`alert-content alert-${type.toLowerCase()}  ${
          exit ? "exit" : ""
        }`}
      >
        {element}
      </div>
    </>
  );
};

export { Toast };
/**
 * 
 *   const [exit, setExit] = useState(false);

  const { toastDispatch } = useToast();

  const handleCloseToast = () => {
    setExit(true);
    setTimeout(() => {
      toastDispatch({
        type: "REMOVE_TOAST",
        payload: {
          id,
          type: "SUCCESS",
        },
      });
    }, 400);
  };
 */
