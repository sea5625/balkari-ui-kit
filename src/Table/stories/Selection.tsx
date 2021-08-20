/** @jsx jsx */
import { jsx } from "@emotion/core";

import DataTable from "../DataTable";

import { defaultRows, headers } from "./shared";

const Selection = () => {
    return (
        <DataTable
            rows={defaultRows.slice(0, 10)}
            headers={headers}
            selection
        />
    );
};

export default Selection;
