import { Button, Tooltip } from "../components";
import React from "react";

export default {
  title: `Tooltip`,
  component: Tooltip,
};

const Template = (args) => {
  return (
    <div className="mt-lg pt-lg text-center" style={{ height: `100vh` }}>
      <Tooltip {...args}>
        <Button type={`primary`}>Tooltip</Button>
      </Tooltip>
    </div>
  );
};
export const TooltipTop = Template.bind({});
export const TooltipBottom = Template.bind({});
export const TooltipLeft = Template.bind({});
export const TooltipRight = Template.bind({});

TooltipTop.args = {
  position: `top`,
  mode: `light`,
  label: `tooltip`,
  cssTooltip: {fontFamily: `sans-serif`},
  label: `Primary Button`,
};
TooltipBottom.args = {
  position: `bottom`,
  mode: `light`,
  label: `tooltip`,
  cssTooltip: {fontFamily: `sans-serif`},
};

TooltipLeft.args = {
  position: `right`,
  mode: `light`,
  label: `tooltip`,
  cssTooltip: {fontFamily: `sans-serif`},
};

TooltipRight.args = {
  position: `left`,
  mode: `light`,
  label: `tooltip`,
  cssTooltip: {fontFamily: `sans-serif`},
};
