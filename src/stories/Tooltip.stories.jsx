import { Tooltip } from "../components";

export default {
  title: `Tooltip`,
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const TooltipTop = Template.bind({});
export const TooltipBottom = Template.bind({});
export const TooltipLeft = Template.bind({});
export const TooltipRight = Template.bind({});

TooltipTop.args = {
  position: `top`,
  mode: `light`
};
TooltipBottom.args = {
  position: `bottom`,
  mode: `light`
};

TooltipLeft.args = {
  position: `left`,
  mode: `light`
};

TooltipRight.args = {
  position: `right`,
  mode: `light`
};
