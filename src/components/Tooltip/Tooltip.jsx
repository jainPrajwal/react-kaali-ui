export const Tooltip = ({ position, mode = `light` }) => {
  const style = {
    color: mode === `dark` ? `black` : `var(--kaali-font-color)`,
    backgroundColor: mode === `dark` ? `var(--kaali-font-color)` : `black`,
  };
  return (
    <button class="btn btn-demo" style={style}>
      {position}{" "}
      <span class={`tooltip  tooltip-${position || `top`} tooltip-${mode}`} style={style}>
        {position || `top`}
      </span>
    </button>
  );
};
