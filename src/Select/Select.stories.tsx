/** @jsx jsx */
import { jsx } from "@emotion/core";
import Select from "./Select";
import { withKnobs } from "@storybook/addon-knobs";

import { defaultOptions } from "./stories/shared";

export const Default = () => {
    return <Select options={defaultOptions} />;
};

export default {
    title: "Form|Select",
    component: Select,
    decorators: [withKnobs]
};
