import { Checkbox } from "../components";

export default {
    title: "Checkboxes",
    component: Checkbox
}

const Template = (args) => <Checkbox {...args} />;

export const CheckboxRed = Template.bind({});
export const CheckboxBlue = Template.bind({});
export const CheckboxGreen = Template.bind({});
export const CheckboxBlack = Template.bind({});

CheckboxRed.args = {color : "Red"}
CheckboxBlue.args = {color : "Blue"}
CheckboxGreen.args = {color : "Green"}
CheckboxBlack.args = {color : "Black"}
