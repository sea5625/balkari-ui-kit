/** @jsx jsx */
import { jsx } from "@emotion/core";
import { withKnobs } from "@storybook/addon-knobs";
import { useState } from "react";
import { select, number } from "@storybook/addon-knobs";
import Pagination from "./Pagination";

export const Default = () => {
    const [offset, setOffest] = useState(0);
    const limit = number("limit", 25);
    const total = number("total", 500);
    const position = select("position", ["start", "center", "end"], "start");
    return (
        <Pagination
            limit={limit}
            offset={offset}
            total={total}
            callbackFunc={(_offset: number) => {
                setOffest(_offset);
            }}
            position={position}
        />
    );
};

export default {
    title: "Paginations|Pagination",
    component: Pagination,
    decorators: [withKnobs]
};
