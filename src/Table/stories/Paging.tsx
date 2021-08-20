/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import DataTable from "../DataTable";
import { defaultRows, headers, limitOptions } from "./shared";

const Paging = () => {
    const [limit, setLimit] = useState(limitOptions[0]);
    const [offset, setOffset] = useState(0);

    return (
        <DataTable
            rows={defaultRows.slice(offset, offset + limit)}
            headers={headers}
            paging={{
                limitOptions,

                total: defaultRows.length,
                onClickLimit: (_limit) => {
                    setLimit(_limit);
                },
                onClickOffset: (_offset) => {
                    setOffset(_offset);
                },
                limit,
                offset
            }}
        />
    );
};

export default Paging;
