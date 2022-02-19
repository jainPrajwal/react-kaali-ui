import { Avatar } from "../components/Avatars/Avatar";

export default {
    title: "Avatar",
    component: Avatar
}


const Template = (args) => <Avatar {...args} />;

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {size:"lg", isfallback: false, fallbackText : "RR", fallbackColor: "var(--red)", showStatus: true, typeOfStatus: "available"} 