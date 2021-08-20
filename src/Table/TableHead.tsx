/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type TableHeadProps = {
    children: React.ReactNode;
};

const TableHead = ({ children }: TableHeadProps) => {
    return <thead css={[style]}>{children}</thead>;
};

const style = css`
    border-top: 1px solid #ddd;
    border-bottom: 2px solid #ccc;
`;

TableHead.defaultProps = {};

export default TableHead;
