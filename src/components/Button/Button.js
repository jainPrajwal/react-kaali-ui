import React from "react";
export const Button = ({ type }) => {
  return (
   
      <button class={`btn btn-${type}`}>{`${type}`} button</button>
    
  );
};
