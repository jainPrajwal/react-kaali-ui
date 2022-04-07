import React from "react";
import { Alert } from "../components";
import "./styles.css";


export default {
  title: "Alert",
  component: Alert,
}

const Template = (args) => <Alert {...args} />;

export const AlertDanger = Template.bind({});
export const AlertSuccess = Template.bind({});
export const AlertInfo = Template.bind({});
export const AlertWarning = Template.bind({});
AlertDanger.args = {type: "danger", text: "This is a danger Alert" }
AlertSuccess.args = {type: "success", text: "This is a success Alert" }
AlertInfo.args = {type: "info", text: "This is a danger info" }
AlertWarning.args = {type: "warning", text: "This is a warning Alert" }