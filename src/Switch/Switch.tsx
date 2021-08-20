/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { color } from "../shared/colors";

type Props = {
    /** Specify whether the underlying switch should be on */
    checked: boolean;
    /** Function to call when clicked  */
    callbackFunc?: (option) => void;
    /** Specify an optional className to be applied to the Switch node string */
    className?: string;
    /** Text value displayed when Switch is on */
    onText?: string;
    /** Text value displayed when Switch is off */
    offText?: string;
    /** Label text value on Switch */
    labelText?: string;
    /** Specify whether the Switch should be disabled */
    disabled: boolean;
    /** Set background color to indicate status when Switch is on */
    status: "primary" | "success" | "warning" | "info" | "danger";
};
const Switch = ({
    checked,
    status,
    onText,
    offText,
    labelText,
    disabled,
    callbackFunc
}: Props) => {
    console.log(callbackFunc, "callback");
    return (
        <div className={`bx-switch`} css={[style, statuss[status]]}>
            <label htmlFor="switch" id="switch">
                {labelText && labelText}
            </label>
            <input
                type="checkbox"
                className="switch-input"
                id="switch"
                checked={checked}
                onChange={() => {}}
            />
            <span
                className={`switch ${checked ? "on" : "off"} ${
                    disabled ? "disabled" : ""
                }`}
                onClick={!disabled ? callbackFunc : () => {}}
            >
                {checked && <span className="switch-text">{onText}</span>}
                {!checked && <span className="switch-text">{offText}</span>}
            </span>
        </div>
    );
};

const style = css`
    position: relative;
    label {
        display: inline-block;
        margin-bottom: 0.5rem;
        font-size: 0.75rem;
    }
    .switch-input {
        display: none;
    }
    .switch {
        display: flex;
        position: relative;
        width: 3rem;
        height: 1.5rem;
        background: #ddd;
        border-radius: 0.9375rem;
        transition: border 0.4s ease 0s, box-shadow 0.4s ease 0s,
            background-color 1.2s ease 0s;
        .switch-input {
            width: 100%;
            height: 100%;
        }
        .switch-text {
            line-height: 1.5rem;
            margin-left: 3.5rem;
        }
        &::before {
            cursor: pointer;
            position: absolute;
            top: 0;
            display: block;
            box-sizing: border-box;
            width: 3rem;
            height: 1.5rem;
            border-radius: 0.9375rem;
            box-shadow: 0 0 0 1px transparent, 0 0 0 3px transparent;
            transition: background-color 0.25s ease 0s, left 0.2s ease 0s;
            content: "";
            will-change: box-shadow;
        }
        &::after {
            cursor: pointer;
            position: absolute;
            top: 0.1875rem;
            display: block;
            box-sizing: border-box;
            width: 1.125rem;
            height: 1.125rem;
            background-color: #ffffff;
            border-radius: 50%;
            transition: transform 70ms cubic-bezier(0.2, 0, 1, 0.9);
            content: "";
        }
        &.on {
            &::after {
                transform: translateX(1.675rem);
            }
        }
        &.off {
            &::before {
                background-color: #8d8d8d;
            }
            &::after {
                left: 0.1875rem;
            }
        }
        &.disabled {
            &::before {
                cursor: not-allowed !important;
                background: #ddd !important;
            }
            &::after {
                cursor: not-allowed !important;
                background: #b0b0b0;
            }
        }
    }
`;

const statuss = {
    primary: css`
        .switch {
            &.on {
                &::before {
                    background: ${color.primary};
                }
            }
        }
    `,
    info: css`
        .switch {
            &.on {
                &::before {
                    background: ${color.info};
                }
            }
        }
    `,
    success: css`
        .switch {
            &.on {
                &::before {
                    background: ${color.success};
                }
            }
        }
    `,
    warning: css`
        .switch {
            &.on {
                &::before {
                    background: ${color.warning};
                }
            }
        }
    `,
    danger: css`
        .switch {
            &.on {
                &::before {
                    background: ${color.danger};
                }
            }
        }
    `
};

Switch.defaultProps = {
    status: "primary",
    disabled: false
};
export default Switch;
