/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type TabContainerProps = {
    children: React.ReactNode;
    rest?: any;
};

const TabContainer = ({ children }: TabContainerProps) => {
    return (
        <div className={`bx-tab-content`} css={[style]}>
            {children}
        </div>
    );
};

TabContainer.defaultProps = {};

const style = css`
    padding: 1.25rem;
    word-break: break-all;
`;

export default TabContainer;
