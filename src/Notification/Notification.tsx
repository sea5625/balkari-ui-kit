/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { color } from "../shared/colors";
import { useState, useEffect } from "react";
import {
    FaInfoCircle,
    FaCheckCircle,
    FaExclamationCircle,
    FaTimesCircle
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export type NotificationProps = {
    /** Sets the appearance of the Notification.*/
    kind: "primary" | "error" | "info" | "success" | "warning";
    /** Sets the type of icon when the icon option is 'true'. */
    icon?: boolean;
    /** Sets the Notification Title */
    title: string;
    /** Sets the Notification Sub Title */
    subTitle: string;
    /** Specify the type of the Notification */
    type: "inline" | "toast";
    /** Set the timeout time for Notification  */
    timeOut: number;
    /** In normal cases, the time when the event occurred when the alert was displayed. */
    caption?: string;
    /** Set the close button to invisible */
    hideCloseButton?: boolean;
    /** Hide close Button Click MouseEvent */
    onCloseButtonClick?: any;
    /** Sets Notification Positions */
    notiPosition:
        | "none"
        | "top_left"
        | "top"
        | "top_right"
        | "bottom_left"
        | "bottom"
        | "bottom_right";
    /** Sets Inline Notification maxWidth*/
    maxWidth: string;
};

/** 
The `Notification` are messages that communicate information to the user. The two main types of notifications are toast notifications and inline notifications.

 **/
const Notification = ({
    kind,
    icon,
    title,
    subTitle,
    type,
    timeOut,
    caption,
    hideCloseButton,
    onCloseButtonClick,
    notiPosition,
    maxWidth,
    ...rest
}: NotificationProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseButtonClick = () => {
        setIsOpen(false);
        onCloseButtonClick();
    };

    useEffect(() => {
        if (!timeOut) {
            return;
        }
        const timeOutId = setTimeout(() => {
            setIsOpen(false);
            onCloseButtonClick();
        }, timeOut);

        return () => {
            clearTimeout(timeOutId);
        };
    }, [onCloseButtonClick, timeOut]);

    if (!isOpen) {
        return null;
    }

    if (type === "inline") {
        return (
            <div
                {...rest}
                css={[
                    inline_style,
                    container_kinds[kind],
                    positions[notiPosition],
                    { maxWidth }
                ]}
                role="alert"
            >
                <div css={[inline_details, detail_kinds[kind], { maxWidth }]}>
                    {icon === true ? (
                        kind === "primary" ? (
                            <FaInfoCircle />
                        ) : kind === "success" ? (
                            <FaCheckCircle />
                        ) : kind === "error" ? (
                            <FaTimesCircle />
                        ) : kind === "warning" ? (
                            <FaExclamationCircle />
                        ) : kind === "info" ? (
                            <FaInfoCircle />
                        ) : (
                            ""
                        )
                    ) : null}
                    <p css={[inline_titleStyle]}> {title}</p>
                    <p css={[inline_subTitleStyle]}> {subTitle}</p>
                    <div css={[inline_closeButton]}>
                        {!hideCloseButton ? (
                            <button onClick={handleCloseButtonClick}>
                                <AiOutlineClose />
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        );
    }

    if (type === "toast") {
        return (
            <div
                {...rest}
                css={[
                    toast_style,
                    container_kinds[kind],
                    positions[notiPosition]
                ]}
                role="alert"
            >
                <div css={[toast_icon]}>
                    {icon === true ? (
                        kind === "primary" ? (
                            <FaInfoCircle />
                        ) : kind === "success" ? (
                            <FaCheckCircle />
                        ) : kind === "error" ? (
                            <FaTimesCircle />
                        ) : kind === "warning" ? (
                            <FaExclamationCircle />
                        ) : kind === "info" ? (
                            <FaInfoCircle />
                        ) : (
                            ""
                        )
                    ) : null}
                </div>
                <div>
                    <p css={toast_title}>{title}</p>
                    <div css={[toast_subTitle]}>{subTitle}</div>
                    <div css={[toast_captions]}>{caption}</div>
                </div>
                {!hideCloseButton ? (
                    <button
                        css={[toast_closeButton]}
                        onClick={handleCloseButtonClick}
                    >
                        <AiOutlineClose />
                    </button>
                ) : (
                    ""
                )}
            </div>
        );
    }
};

Notification.defaultProps = {
    kind: "primary",
    icon: true,
    // onCloseButtonClick: () => {},
    type: "inline",
    hideCloseButton: false,
    timeOut: 0,
    notiPosition: "none",
    maxWidth: "38rem"
};

// * Common
const container_kinds = {
    primary: css`
        background: rgb(225, 250, 245);
        border: 1px solid ${color.primary};
        border-left: 4px solid ${color.primary};
        svg {
            fill: ${color.primary};
        }
    `,
    error: css`
        background: rgb(255, 230, 227);
        border: 1px solid ${color.danger};
        border-left: 4px solid ${color.danger};
        svg {
            fill: ${color.danger};
        }
    `,
    success: css`
        background: rgb(230, 255, 240);
        border: 1px solid ${color.success};
        border-left: 4px solid ${color.success};
        svg {
            fill: ${color.success};
        }
    `,
    info: css`
        background: rgb(222, 242, 255);
        border: 1px solid ${color.info};
        border-left: 4px solid ${color.info};
        svg {
            fill: ${color.info};
        }
    `,
    warning: css`
        background: rgb(252, 243, 204);
        border: 1px solid ${color.warning};
        border-left: 4px solid ${color.warning};
        svg {
            fill: ${color.warning};
        }
    `
};
const detail_kinds = {
    primary: css`
        background: rgb(225, 250, 245);
        svg {
            fill: ${color.primary};
        }
    `,
    error: css`
        background: rgb(255, 230, 227);
        svg {
            fill: ${color.danger};
        }
    `,
    success: css`
        background: rgb(230, 255, 240);
        svg {
            fill: ${color.success};
        }
    `,
    info: css`
        background: rgb(222, 242, 255);
        svg {
            fill: ${color.info};
        }
    `,
    warning: css`
        background: rgb(252, 243, 204);
        svg {
            fill: ${color.warning};
        }
    `
};

const positions = {
    none: css``,
    top_left: css`
        position: fixed;
        left: 1rem;
        top: 1rem;
        z-index: 999;
    `,
    top: css`
        position: fixed;
        left: 33.33%;
        top: 1rem;
        z-index: 999;
    `,
    top_right: css`
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 999;
    `,
    bottom_left: css`
        position: fixed;
        left: 1rem;
        bottom: 1rem;
        z-index: 999;
    `,
    bottom: css`
        position: fixed;
        left: 33.33%;
        bottom: 1rem;
        z-index: 999;
    `,
    bottom_right: css`
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 999;
    `
};

//* Inline Notification
const inline_style = css`
    max-width: 38rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    padding: 1.25rem 0.75rem 1rem 1rem;
`;

const inline_details = css`
    max-width: 38rem;
    display: flex;
    flex-grow: 1;
    svg {
        font-size: 1.25rem;
    }
`;

const inline_titleStyle = css`
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    letter-spacing: 0.16px;
    margin-left: 0.75rem;
`;

const inline_subTitleStyle = css`
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.16px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

const inline_closeButton = css`
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
`;

//* Toast Notification
const toast_style = css`
    display: flex;
    width: 16rem;
    background: rgb(225, 250, 245);
    padding-left: 0.875rem;
    min-width: 25rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
`;

const toast_icon = css`
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 1rem;
    margin-right: 0.875rem;
`;

const toast_title = css`
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    letter-spacing: 0.16px;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    font-weight: 600;
    word-break: break-word;
`;

const toast_subTitle = css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.16px;
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: #161616;
    word-break: break-word;
`;

const toast_captions = css`
    font-size: 0.675rem;
    font-weight: 400;
    line-height: 1.29;
    letter-spacing: 0.16px;
    margin-bottom: 1rem;
    color: #707070;
`;

const toast_closeButton = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
    min-height: 3rem;
    margin-left: auto;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg {
        font-size: 1rem;
        flex-shrink: 0;
        margin-top: 0rem;
        margin-right: 0rem;
    }
`;

export default Notification;
