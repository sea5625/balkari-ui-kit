/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { color } from "../shared/colors";

type TabNavProps = {
    children: React.ReactNode;
    onClickNav: (navKey) => void;
    isSelected: boolean;
    navKey: number;
    disabled?: boolean;
    navPosition?: "top" | "left" | "right";
};

const TabNav = ({
    children,
    onClickNav,
    isSelected,
    navKey,
    disabled,
    navPosition
}: TabNavProps) => {
    return (
        <li
            className={`tab-nav ${isSelected ? "active" : ""} ${navPosition}`}
            css={[style]}
        >
            <button onClick={() => onClickNav(navKey)} disabled={disabled}>
                {children}
            </button>
        </li>
    );
};

const style = css`
    button {
        width: 100%;
        height: 100%;
        color: #404e67;
        &:disabled {
            color: #ddd;
            cursor: not-allowed;
        }
    }
    &.top {
        border-bottom: 1px solid #ddd;
        button {
            padding: 0.75rem 2.125rem;
        }
    }
    &.left,
    &.right {
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
    }
    &.active {
        button {
            color: ${color.primary};
        }
        &.top {
            border-bottom: 2px solid ${color.primary};
        }
        &.left {
            border-left: 2px solid ${color.primary};
        }
        &.right {
            border-right: 2px solid ${color.primary};
        }
    }
`;

TabNav.defaultProps = {
    navPosition: "top"
};

export default TabNav;
