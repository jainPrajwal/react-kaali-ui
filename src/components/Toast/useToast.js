import { useContext } from "react";
import { ToastContext } from "./ToastProvider";


const useToast = () => {
  console.log(`use Toast`, useContext(ToastContext))
  return useContext(ToastContext);
};

export { useToast };
