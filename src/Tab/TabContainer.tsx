/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type TabContainerProps = {
    children: React.ReactNode;
    navPosition?: "top" | "left" | "right";
    rest?: any;
};

const TabContainer = ({ children, navPosition }: TabContainerProps) => {
    return (
        <div className={`bx-tab ${navPosition}`} css={[style]}>
            {children}
        </div>
    );
};

TabContainer.defaultProps = {
    navPosition: "top"
};

const style = css`
    width: 100%;
    ul {
        list-style: none;
    }
    &.top {
        .bx-tab-nav {
            ul {
                display: flex;
                width: 100%;
            }
        }
    }
    &.left,
    &.right {
        display: flex;
        .bx-tab-nav {
            width: 15%;
            min-width: 8.75rem;
        }
        .bx-tab-content {
            width: 85%;
            max-width: calc(100% - 8.75rem);
        }
    }
    &.right {
        flex-direction: row-reverse;
    }
`;

export default TabContainer;
