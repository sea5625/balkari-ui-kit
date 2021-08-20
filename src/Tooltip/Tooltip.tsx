/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../shared/colors';

import {
    FaInfoCircle,
    FaCheckCircle,
    FaExclamationCircle,
    FaTimesCircle
} from "react-icons/fa";

type TooltipProps = {
    /** Set up data to show through tooltip  */
    data: any;
    /** Absolute coordinates X through e.currentTarget */
    x: any;
    /** Absolute coordinates Y through e.currentTarget */
    y: any;
    /** Absolute coordinates Node Weight through e.currentTarget */
    w: any;
    /** Absolute coordinates Node Height through e.currentTarget */
    h: any;
    /** Tooltip Display Settings */
    visible: boolean;
    /** Sets the type of icon when the icon option is 'true'. */
    icon: boolean;
    /** Sets the appearance of the tooltip Icon.*/
    iconKind: "default" | "info" | "success" | "warning" | "error";
    /** Sets Tooltip Positions */
    tooltipPosition: "top" | "bottom" | "left" | "right";
};

/** `Tooltip` display additional information upon mouse event. The information should be contextual, useful, and nonessential.
 **/

const Tooltip = ({
    data,
    x,
    y,
    w,
    h,
    visible,
    icon,
    tooltipPosition,
    iconKind
}: TooltipProps) => {

    let top;
    let left;

    if (tooltipPosition === "left" || tooltipPosition === "right") {
        top = y + (h / 2)
    } else if (tooltipPosition === "top") {
        top = y - 5
    } else {
        top = y + h + 5
    }

    if (tooltipPosition === "top" || tooltipPosition === "bottom") {
        left = x + (w / 2)
    } else if (tooltipPosition === "left") {
        left = x - 5
    } else {
        left = x + w + 5
    }
    return (
        <div
            className={`${tooltipPosition}`}
            css={[style]}
            style={{
                display: visible ? "block" : "none",
                top,
                left
            }}
        >
            <div css={[tooltip_detail, icon_kind[iconKind]]}>
                {icon === true ? (
                    iconKind === "default" ? (
                        <FaInfoCircle />
                    ) : iconKind === "success" ? (
                        <FaCheckCircle />
                    ) : iconKind === "error" ? (
                        <FaTimesCircle />
                    ) : iconKind === "warning" ? (
                        <FaExclamationCircle />
                    ) : iconKind === "info" ? (
                        <FaInfoCircle />
                    ) : ("")
                ) : null}
                {Array.isArray(data) &&
                    data.map((el, key) => {
                        return <p key={key}>{el}</p>;
                    })}
                {(typeof data === "string" || typeof data === "number") && (
                    <p>{data}</p>
                )}
            </div>

        </div>
    );
};

Tooltip.defaultProps = {
    data: null,
    x: 0,
    y: 0,
    h: 0,
    w: 0,
    visible: false,
    tooltipPosition: "top",
    icon: false,
    iconKind: "default"
};

const style = css`
    position: fixed;
    padding: 0.5rem;
    font-size: 0.75rem;
    z-index: 99;
    line-height: 1rem;
    text-align: left;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;

    &.top{
        transform:translate(-50%, -100%);
    }
    &.left{
        transform:translate(-100%, -50%);
    }
    
    &.right{
        transform:translateY(-50%);
    }
    &.bottom{
        transform:translate(-50%);

    }
`;

const tooltip_detail = css`
    display: flex;
    flex-grow: 1;
    svg {
        line-height:1rem;
        font-size: 0.75rem;
        margin-right:0.4rem;
    }
`

const icon_kind = {
    default: css`
    svg {
        fill:#fff;    
    }
    `,
    info: css`
    svg {
        fill:${color.info};    
    }
    `,
    warning: css`
    svg {
        fill:${color.warning};    
    }
    `,
    error: css`
    svg {
        fill:${color.danger};    
    }
    `,
    success: css`
    svg {
        fill:${color.success};    
    }
    `,
}

export default Tooltip;