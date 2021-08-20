/** @jsx jsx */
import { jsx } from "@emotion/core";
import DataTable from "../DataTable";

import { defaultRows, headers } from "./shared";

const StrippedRow = () => {
    return (
        <DataTable
            rows={defaultRows.slice(0, 10)}
            headers={headers}
            strippedRow
        />
    );
};

export default StrippedRow;
