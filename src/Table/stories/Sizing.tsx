/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import DataTable from "../DataTable";

import { defaultRows, headers } from ".//shared";

const Sizing = () => {
    return (
        <div>
            <div css={wrapper}>
                <p css={subTitle}>Extra Small</p>
                <DataTable
                    rows={defaultRows.slice(0, 10)}
                    headers={headers}
                    size="extra small"
                />
            </div>
            <div css={wrapper}>
                <p css={subTitle}>Small</p>
                <DataTable
                    rows={defaultRows.slice(0, 10)}
                    headers={headers}
                    size="small"
                />
            </div>
            <div css={wrapper}>
                <p css={subTitle}>Default</p>
                <DataTable rows={defaultRows.slice(0, 10)} headers={headers} />
            </div>
            <div css={wrapper}>
                <p css={subTitle}>Large</p>
                <DataTable
                    rows={defaultRows.slice(0, 10)}
                    headers={headers}
                    size="large"
                />
            </div>
        </div>
    );
};

const wrapper = css`
    margin-bottom: 1rem 0;
`;

const subTitle = css`
    margin: 1.25rem 0;
    font-size: 1rem;
`;

export default Sizing;
