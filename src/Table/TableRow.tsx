/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type TableRowProps = {
    children: React.ReactNode;
    selection?: boolean;
};

const TableRow = (props: TableRowProps) => {
    const { children } = props;
    return <tr css={[style]}>{children}</tr>;
};

const style = css``;

TableRow.defaultProps = {};

export default TableRow;
