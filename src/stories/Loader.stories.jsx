import { Loader } from "../components/Loader/Loader";
import "./styles.css";
export default {
  title: `Loader`,
  component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const PageLoader = Template.bind({});

PageLoader.args = {
  borderWidth: `12px`,
  borderTopColor: `orangered`,
  cssLoader: {},
  width: 64,
  height: 64,
};
