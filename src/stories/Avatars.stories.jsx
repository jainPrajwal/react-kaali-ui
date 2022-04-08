import { Avatar } from "../components/Avatar/Avatar";
import "./styles.css";
export default {
  title: "Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  size: "lg",
  isfallback: false,
  fallbackText: "RR",
  fallbackColor: "var(--kaali-danger)",
  showStatus: true,
  typeOfStatus: "available",
};
