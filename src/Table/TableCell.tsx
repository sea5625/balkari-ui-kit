/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import cx from "classnames";
import { color } from "../shared/colors";

type TableCellProps = {
    children: React.ReactNode;
    className?: string;
    customStyledCell?: boolean;
    callbackFunc?: () => void;
};

const TableCell = ({
    children,
    className,
    callbackFunc,
    customStyledCell
}: TableCellProps) => {
    const componentClass = cx("data-table-cell", className, {
        ["data-table-cell-custom"]: customStyledCell
    });

    return (
        <td
            css={[style]}
            className={componentClass}
            onClick={callbackFunc && callbackFunc}
        >
            <span>{children}</span>
        </td>
    );
};

TableCell.defaultProps = {};

const style = css`
    display: table-cell;
    line-height: 1.5;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    &.data-table-cell-custom {
        &.data-table-cell-link {
            cursor: pointer;
            font-weight: bold;
            &:hover {
                text-decoration: underline;
                color: ${color.primary};
            }
        }
        &.data-table-cell-background {
            > span {
                text-align: center;
                min-width: 4.125rem;
                display: inline-block;
            }
            &.red {
                > span {
                    background: ${color.red_20};
                    color: ${color.red};
                }
            }
            &.amber {
                > span {
                    background: ${color.amber_20};
                    color: ${color.amber};
                }
            }
            &.green {
                > span {
                    background: ${color.green_20};
                    color: ${color.green};
                }
            }
        }
    }
`;

export default TableCell;
