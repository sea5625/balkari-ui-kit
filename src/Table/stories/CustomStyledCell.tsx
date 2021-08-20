/** @jsx jsx */
import { jsx } from "@emotion/core";
import DataTable from "../DataTable";

import { defaultRows, headers } from "./shared";

const CustomedStyledCell = () => {
    return (
        <DataTable
            rows={defaultRows.slice(0, 10)}
            headers={headers}
            customStyledCell
        />
    );
};

export default CustomedStyledCell;
