/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import cx from "classnames";

type Props = {
    children: React.ReactNode;
    className?: string;
    strippedRow?: boolean;
    isSortable?: boolean;
    size?: "extra large" | "large" | "default" | "small" | "extra small";
    selection?: boolean;
};
const Table = ({
    children,
    className,
    strippedRow,
    size,
    selection
}: Props) => {
    const componentClass = cx("data-table", className, {
        ["data-table-stripped-row"]: strippedRow,
        ["data-table-extra-small"]: size === "extra small",
        ["data-table-small"]: size === "small",
        ["data-table-default"]: size === "default",
        ["data-table-large"]: size === "large",
        ["data-table-selection"]: selection
    });
    return (
        <table css={[style]} className={componentClass}>
            {children}
        </table>
    );
};

Table.defaultProps = {
    size: "default",
    strippedRow: true
};

const style = css`
    table-layout: fixed;
    width: 100%;
    border-left: 1px solid #e9ecef;
    border-right: 1px solid #e9ecef;
    border-bottom: 1px solid #e9ecef;
    &.data-table-stripped-row {
        tbody tr:nth-of-type(2n - 1) {
            background: rgba(0, 0, 0, 0.05);
        }
    }
    &.data-table-extra-small {
        th,
        td {
            padding: 0.4rem 0.75rem;
        }
    }
    &.data-table-small {
        th,
        td {
            padding: 0.6rem 0.75rem;
        }
    }
    &.data-table-default {
        th,
        td {
            padding: 0.75rem;
        }
    }
    &.data-table-large {
        th,
        td {
            padding: 0.9rem 0.75rem;
        }
    }
    &.data-table-selection {
        th:first-of-type,
        td:first-of-type {
            text-align: center;
            width: 1rem;
            cursor: pointer;
            position: relative;
            svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
`;

export default Table;
