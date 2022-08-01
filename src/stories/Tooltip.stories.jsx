import { Button, Tooltip } from "../components";
import React from "react";

export default {
  title: `Tooltip`,
  component: Tooltip,
  argTypes: {
    position: {
      options: [`top`, `left`, `right`, `bottom`],
      control: { type: `radio` },
    },
    mode: {
      options: [`dark`, `light`],
      control: { type: `radio` },
    },
  },
};

const Template = (args) => {
  return (
    <div className="mt-lg pt-lg d-flex jc-center">
      <Tooltip {...args}>
        <Button variant={`primary`}>Tooltip</Button>
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
  style: { fontFamily: `sans-serif` },
  label: `Primary Button`,
};
TooltipBottom.args = {
  position: `bottom`,
  mode: `light`,
  label: `tooltip`,
  style: { fontFamily: `sans-serif` },
};

TooltipLeft.args = {
  position: `left`,
  mode: `light`,
  label: `tooltip`,
  style: { fontFamily: `sans-serif` },
};

TooltipRight.args = {
  position: `left`,
  mode: `light`,
  label: `tooltip`,
  style: { fontFamily: `sans-serif` },
};
