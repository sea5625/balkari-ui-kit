/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { boolean, select } from "@storybook/addon-knobs";
import DataTable from "./DataTable";
import {
    defaultRows,
    sortHeaders,
    headers,
    limitOptions
} from "./stories/shared";

const wrapper = css`
    margin-bottom: 5rem;
`;

export const Default = () => {
    const [limit, setLimit] = useState(limitOptions[0]);
    const [offset, setOffset] = useState(0);

    const strippedRow = boolean("strippedRow", true);
    const sorting = boolean("sorting", false);
    const paging = boolean("paging", false);
    const selection = boolean("selection", false);
    const size = select(
        "size",
        ["extra small", "small", "default", "large"],
        "default"
    );
    return (
        <DataTable
            rows={defaultRows.slice(offset, offset + limit)}
            headers={sorting ? sortHeaders : headers}
            size={size}
            strippedRow={strippedRow}
            sorting={sorting}
            paging={
                paging
                    ? {
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
                      }
                    : false
            }
            selection={selection}
        />
    );
};

export const StrippedRow = () => {
    return (
        <DataTable
            rows={defaultRows.slice(0, 10)}
            headers={headers}
            strippedRow
        />
    );
};

export const Selection = () => {
    return (
        <DataTable
            rows={defaultRows.slice(0, 10)}
            headers={headers}
            selection
        />
    );
};

export const Sorting = () => {
    return (
        <DataTable
            rows={defaultRows.slice(0, 10)}
            headers={sortHeaders}
            sorting
        />
    );
};

export const Sizing = () => {
    return (
        <div>
            <div css={wrapper}>
                <DataTable
                    rows={defaultRows.slice(0, 10)}
                    headers={headers}
                    size="extra small"
                />
            </div>
            <div css={wrapper}>
                <DataTable
                    rows={defaultRows.slice(0, 10)}
                    headers={headers}
                    size="small"
                />
            </div>
            <div css={wrapper}>
                <DataTable rows={defaultRows.slice(0, 10)} headers={headers} />
            </div>
            <div css={wrapper}>
                <DataTable
                    rows={defaultRows.slice(0, 10)}
                    headers={headers}
                    size="large"
                />
            </div>
        </div>
    );
};

export const Paging = () => {
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

export const CustomedStyledCell = () => {
    return (
        <DataTable
            rows={defaultRows.slice(0, 10)}
            headers={headers}
            customStyledCell
        />
    );
};

export default {
    title: "Tables|Table",
    component: DataTable,
    decorators: [withKnobs]
};
