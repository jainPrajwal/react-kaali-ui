import React, { createContext, useReducer } from "react";
import { v4 } from "uuid";
import { Toast } from "./Toast";
import { initialToastState } from "./ToastReducer";
import { toastReducer } from "./ToastReducer";
import "./Toast.css";
export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastState, toastDispatch] = useReducer(
    toastReducer,
    initialToastState
    );
    console.log(`provider`, toastState);
  // toastDispatch({
  //   type: "ADD_TOAST",
  //   payload: {
  //     id: v4(),
  //     type: "SUCCESS",
  //     message: "new notification",
  //   },
  // });
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
