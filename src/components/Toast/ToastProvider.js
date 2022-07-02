import React, {  useReducer } from "react";
import { Toast } from "./Toast";
import { initialToastState } from "./ToastReducer";
import { toastReducer } from "./ToastReducer";
import "./Toast.css";
import { ToastContext } from "./ToastContext";


const ToastProvider = ({ children }) => {
  const [toastState, toastDispatch] = useReducer(
    toastReducer,
    initialToastState
    );

  return (
    <ToastContext.Provider value={{ toastState, toastDispatch }}>
      <div>
        <div className={"alert-wrapper"}>
          {toastState.map((toast) => {
            return <Toast {...toast} key={toast.id} />;
          })}
        </div>
        {children}
      </div>
    </ToastContext.Provider>
  );
};

export { ToastProvider };
