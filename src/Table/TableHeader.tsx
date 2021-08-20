/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import cx from "classnames";
import { color } from "../shared/colors";

type TableHeaderProps = {
    children: React.ReactNode;
    headerKey: string;
    text: string;
    onClickSortHeader?: (headerKey: string) => void;
    className?: string;
    sorting?: boolean;
    isSortable?: boolean;
    isSortHeader?: string;
    sortDirection?: "NONE" | "DESC" | "ASC";
};

const TableHeader = ({
    headerKey,
    text,
    sorting,
    onClickSortHeader,
    isSortable,
    sortDirection,
    isSortHeader,
    className
}: TableHeaderProps) => {
    const componentClass = cx("data-table", className, {
        ["sort"]: isSortable && sorting,
        ["sort-desc"]: isSortHeader && sortDirection === "DESC",
        ["sort-asc"]: isSortHeader && sortDirection === "ASC"
    });
    if (sorting && isSortable) {
        return (
            <th
                css={[style]}
                className={componentClass}
                onClick={() => {
                    onClickSortHeader && onClickSortHeader(headerKey);
                }}
            >
                {text}
            </th>
        );
    }
    return (
        <th css={[style]} className={componentClass}>
            {text}
        </th>
    );
};

const style = css`
    text-align: left;
    line-height: 1.5;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
    border-left: 1px solid #ddd;
    &.sort {
        position: relative;
        cursor: pointer;
        &::before,
        &::after {
            display: block;
            position: absolute;
            font-size: 0.7rem;
            font-weight: 100;
            line-height: 1.5;
            color: ${color.mediumdark};
        }

        &::before {
            top: calc(50% - 0.375rem);
            right: 1.25em;
            content: "↑";
        }
        &::after {
            top: calc(50% - 0.325rem);
            right: 0.65em;
            content: "↓";
        }

        &.sort-desc::before,
        &.sort-asc::after {
            color: #353c4e;
            font-weight: bold;
        }
    }
`;

TableHeader.defaultProps = {
    isSortable: false,
    sortDirection: "NONE"
};

export default TableHeader;
