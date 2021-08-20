/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type TableContainerProps = {
    children: React.ReactNode;
    rest?: any;
};

const TableContainer = ({ children }: TableContainerProps) => {
    return (
        <div className={`bx-data-table`} css={[style]}>
            {children}
        </div>
    );
};

TableContainer.defaultProps = {};

const style = css``;

export default TableContainer;
