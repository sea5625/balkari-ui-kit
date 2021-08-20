/** @jsx jsx */
import Button from "./Button";
import { color } from "../shared/colors";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Notification from "../Notification/Notification";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { BsHeartFill, BsChevronRight } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { useState, useEffect } from "react";

export default {
    title: "Buttons|Button",
    component: Button,
    decorators: [withKnobs],
};

export const button = () => {
    const label = text("children", "BUTTON");
    const kind = select(
        "kind",
        [
            "primary",
            "secondary",
            "link",
            "success",
            "info",
            "warning",
            "danger"
        ],
        "primary"
    );
    const disabled = boolean("disabled", false);

    const size = select(
        "size",
        ["tiny", "small", "medium", "large", "giant"],
        "medium"
    );
    const width = text("width", "");
    const height = text("height", "");
    const copyText = text("copy text", "");

    return (
        <Button
            size={size}
            kind={kind}
            disabled={disabled}
            width={width}
            height={height}
            copyText={copyText}
            onClick={action("onClick")}
        >
            {label}
        </Button>
    );
};

button.story = {
    name: "Default"
};

export const primaryButton = () => {
    return <Button>Primary</Button>;
};

export const secondaryButton = () => {
    return <Button kind="secondary">Secondary</Button>;
};

export const statusButton = () => {
    return (
        <ButtonGroup>
            <Button kind="success">Success</Button>
            <Button kind="info">Info</Button>
            <Button kind="warning">Warning</Button>
            <Button kind="danger">Danger</Button>
        </ButtonGroup>
    );
};

export const link = () => {
    return <Button kind="link">Link</Button>;
};

const buttonWrapper = css`
    margin-bottom: 2rem;
    .description {
        margin-bottom: 0.5rem;
    }
    & > div + div {
        margin-top: 2rem;
    }
`;

export const sizes = () => {
    return (
        <div>
            <div css={buttonWrapper}>
                <ButtonGroup nonFlex={true}>
                    <Button size="giant">Giant</Button>
                    <Button size="large">Large</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="small">Small</Button>
                    <Button size="tiny">Tiny</Button>
                </ButtonGroup>
            </div>
            <div css={buttonWrapper}>
                <ButtonGroup nonFlex={true}>
                    <Button kind="secondary" size="giant">
                        Giant
                    </Button>
                    <Button kind="secondary" size="large">
                        Large
                    </Button>
                    <Button kind="secondary" size="medium">
                        Medium
                    </Button>
                    <Button kind="secondary" size="small">
                        Small
                    </Button>
                    <Button kind="secondary" size="tiny">
                        Tiny
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export const disabled = () => {
    return (
        <div>
            <div css={buttonWrapper}>
                <ButtonGroup>
                    <Button kind="primary" size="medium" disabled>
                        Primary
                    </Button>
                    <Button kind="secondary" size="medium" disabled>
                        Secondary
                    </Button>
                    <Button kind="link" size="medium" disabled>
                        Link
                    </Button>
                </ButtonGroup>
            </div>
            <div css={buttonWrapper}>
                <ButtonGroup>
                    <Button kind="success" size="medium" disabled>
                        Success
                    </Button>
                    <Button kind="info" size="medium" disabled>
                        Info
                    </Button>
                    <Button kind="warning" size="medium" disabled>
                        Warning
                    </Button>
                    <Button kind="danger" size="medium" disabled>
                        Danger
                    </Button>
                </ButtonGroup>
            </div>
            <div css={buttonWrapper}>
                <ButtonGroup>
                    <Button iconOnly size="tiny" disabled>
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly size="small" disabled>
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly disabled>
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly size="large" disabled>
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly size="giant" disabled>
                        <BsHeartFill />
                    </Button>
                </ButtonGroup>
            </div>
            <div css={buttonWrapper}>
                <ButtonGroup>
                    <Button iconOnly iconType="square" size="tiny" disabled>
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly iconType="square" size="small" disabled>
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly iconType="square" disabled>
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly iconType="square" size="large" disabled>
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly iconType="square" size="giant" disabled>
                        <BsHeartFill />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export const customSized = () => {
    return (
        <div css={buttonWrapper}>
            <div>
                <Button height="2rem">Custom height</Button>
            </div>
            <div>
                <Button width="20rem">Custom width</Button>
            </div>
            <div>
                <Button width="100%">Full width</Button>
            </div>
        </div>
    );
};

export const withIcon = () => {
    return (
        <div>
            <div css={buttonWrapper}>
                <ButtonGroup nonFlex={true}>
                    <Button size="giant">
                        <BsHeartFill />
                        Like
                    </Button>
                    <Button size="large">
                        <BsHeartFill />
                        Like
                    </Button>
                    <Button>
                        <BsHeartFill />
                        Like
                    </Button>
                    <Button size="small">
                        <BsHeartFill />
                        Like
                    </Button>
                    <Button size="tiny">
                        <BsHeartFill />
                        Like
                    </Button>
                </ButtonGroup>
            </div>
            <div css={buttonWrapper}>
                <ButtonGroup nonFlex={true}>
                    <Button size="giant" iconPosition="right">
                        View All
                        <BsChevronRight />
                    </Button>
                    <Button size="large" iconPosition="right">
                        View All
                        <BsChevronRight />
                    </Button>
                    <Button iconPosition="right">
                        View All
                        <BsChevronRight />
                    </Button>
                    <Button size="small" iconPosition="right">
                        View All
                        <BsChevronRight />
                    </Button>
                    <Button size="tiny" iconPosition="right">
                        View All
                        <BsChevronRight />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export const iconOnlyCircle = () => {
    return (
        <div>
            <div css={buttonWrapper}>
                <ButtonGroup>
                    <Button iconOnly size="tiny">
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly size="small">
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly>
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly size="large">
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly size="giant">
                        <BsHeartFill />
                    </Button>
                </ButtonGroup>
            </div>
            <div css={buttonWrapper}>
                <ButtonGroup>
                    <Button kind="secondary" iconOnly size="tiny">
                        <BsHeartFill />
                    </Button>
                    <Button kind="secondary" iconOnly size="small">
                        <BsHeartFill />
                    </Button>
                    <Button kind="secondary" iconOnly>
                        <BsHeartFill />
                    </Button>
                    <Button kind="secondary" iconOnly size="large">
                        <BsHeartFill />
                    </Button>
                    <Button kind="secondary" iconOnly size="giant">
                        <BsHeartFill />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export const iconOnlySquare = () => {
    return (
        <div>
            <div css={buttonWrapper}>
                <ButtonGroup>
                    <Button iconOnly iconType="square" size="tiny">
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly iconType="square" size="small">
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly iconType="square">
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly iconType="square" size="large">
                        <BsHeartFill />
                    </Button>
                    <Button iconOnly iconType="square" size="giant">
                        <BsHeartFill />
                    </Button>
                </ButtonGroup>
            </div>
            <div css={buttonWrapper}>
                <ButtonGroup>
                    <Button
                        kind="secondary"
                        iconType="square"
                        iconOnly
                        size="tiny"
                    >
                        <BsHeartFill />
                    </Button>
                    <Button
                        kind="secondary"
                        iconType="square"
                        iconOnly
                        size="small"
                    >
                        <BsHeartFill />
                    </Button>
                    <Button kind="secondary" iconType="square" iconOnly>
                        <BsHeartFill />
                    </Button>
                    <Button
                        kind="secondary"
                        iconType="square"
                        iconOnly
                        size="large"
                    >
                        <BsHeartFill />
                    </Button>
                    <Button
                        kind="secondary"
                        iconType="square"
                        iconOnly
                        size="giant"
                    >
                        <BsHeartFill />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export const CopyButton = () => {

    /* State*/
    const [notiPosition, setPosition] = useState(null);
    const [timeOut, setTimeOut] = useState(0);
    const [copyText, setCopyText] = useState("");

    /* State Management Functions for Using Notification */
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeOut(0);
            setPosition(null);
            setCopyText("");
        }, timeOut);
        return () => clearTimeout(timer);
    }, [timeOut, notiPosition]);

    return (
        <div>
            <div css={buttonWrapper}>
                <ButtonGroup>
                    <Button iconOnly iconType="square" size="tiny" copyText="Primary Button" onClick={() => {
                        setCopyText("Primary Button"), setPosition("top_right"), setTimeOut(2000);
                    }}>
                        <MdContentCopy />
                    </Button>
                    <Button iconOnly kind="secondary" iconType="square" size="tiny" copyText="Secondary Button" onClick={() => {
                        setCopyText("Secondary Button"), setPosition("top_right"), setTimeOut(2000);
                    }}>
                        <MdContentCopy />
                    </Button>
                    <Button iconOnly kind="link" iconType="square" size="tiny" copyText="Secondary Button" onClick={() => {
                        setCopyText("Link Button"), setPosition("top_right"), setTimeOut(2000);
                    }}>
                        <MdContentCopy />
                    </Button>
                </ButtonGroup>
            </div>

            {/* Notification component*/}
            {notiPosition === null ? null : (
                <Notification
                    notiPosition={notiPosition}
                    title="Copied to clipboard."
                    subTitle={"content : " + copyText}
                    kind="info"
                    timeOut={timeOut}
                    onCloseButtonClick={() => setTimeOut(0)}
                />
            )}
        </div>
    );
};