import React from "react";

import { Avatar } from "../components";
import "./styles.css";
export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: [`lg`, `md`, `sm`],
      control: { type: `radio` },
    },
    sizeOfStatus: {
      options: [`md`, `sm`],
      control: { type: `radio` },
    },
    typeOfStatus: {
      options: [`available`, `do-not-disturb`],
      control: { type: `radio` },
    },
  },
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
  isVerified: false,
  sizeOfStatus: `md`,
  styleStatus: {},
  styleText: {},
  styleImage: {},
  styleWrapperAvatar: {},
  imageUrl: `https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg`
};
