/** @jsx jsx */
import { jsx } from "@emotion/core";
import DataTable from "../DataTable";

import { defaultRows, sortHeaders } from "./shared";

const Sorting = () => {
    return (
        <DataTable
            rows={defaultRows.slice(0, 10)}
            headers={sortHeaders}
            sorting
        />
    );
};

export default Sorting;
