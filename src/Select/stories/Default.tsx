/** @jsx jsx */
import { jsx } from "@emotion/core";
import Select from "../Select";
import { defaultOptions } from "./shared";

const Default = () => {
    return <Select options={defaultOptions} />;
};

export default Default;
