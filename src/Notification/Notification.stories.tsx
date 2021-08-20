/** @jsx jsx */
import Notification from "./Notification";
import Button from "../Button/Button";
import { jsx, css } from "@emotion/core";
import { useState, useEffect } from "react";
import {
    withKnobs,
    text,
    boolean,
    select,
    number
} from "@storybook/addon-knobs";
import * as moment from "moment";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

export default {
    title: "Notification| Notification",
    component: Notification,
    decorators: [withKnobs]
};

export const notification = () => {
    const notificationProps = {
        title: text("Notification Title", "Notification title"),
        subTitle: text("Notification Sub Title", "Notification sub title"),
        type: select("Notification Type", ["inline", "toast"], "inline"),
        kind: select(
            "Notification Kinds",
            ["primary", "error", "info", "success", "warning"],
            "primary"
        ),
        icon: boolean("Icon Visible", true),
        timeOut: number("Notification Visible (1sec : 1000)", 0),
        caption: text(
            "Notifications Occurring Time and Additional Information",
            "00:00:00AM, an event of something"
        ),
        hideCloseButton: boolean("Close Button Visible", false),
        maxWidth: text("inline Notification width", "Default (38rem)")
    };
    return <Notification {...notificationProps} />;
};

notification.story = {
    name: "Default"
};

const notificationWrapper = css`
    margin-top: 1rem;
    margin-bottom: 2rem;
    & > div + div {
        margin-top: 1rem;
    }
`;

export const NotificationType = () => {
    const inlineTypeProps = {
        title: "Inline Notification",
        subTitle: "Sub Title"
    };
    const toastTypeProps = {
        title: "Toast Notification",
        subTitle: "Sub Title",
        caption: "00:00:00AM, an event of something"
    };
    return (
        <div>
            <div css={[notificationWrapper]}>
                <Notification {...inlineTypeProps} />
                <Notification type="toast" {...toastTypeProps} />
            </div>
        </div>
    );
};

export const HideCloseButton = () => {
    const inlineTypeProps = {
        title: "Inline Notification",
        subTitle: "Sub Title",
        hideCloseButton: true
    };
    const toastTypeProps = {
        title: "Toast Notification",
        subTitle: "Sub Title",
        caption: "00:00:00AM, an event of something",
        hideCloseButton: true
    };
    return (
        <div>
            <div css={[notificationWrapper]}>
                <Notification {...inlineTypeProps} />
                <Notification type="toast" {...toastTypeProps} />
            </div>
        </div>
    );
};

export const InlineNotificationKind = () => {
    return (
        <div>
            <div css={[notificationWrapper]}>
                <Notification
                    title="Inline Notification"
                    subTitle="Default Noti"
                />
                <Notification
                    kind="info"
                    title="Inline Notification"
                    subTitle="Info Noti"
                />
                <Notification
                    kind="error"
                    title="Inline Notification"
                    subTitle="Error Noti"
                />
                <Notification
                    kind="success"
                    title="Inline Notification"
                    subTitle="Success Noti"
                />
                <Notification
                    kind="warning"
                    title="Inline Notification"
                    subTitle="Warning Noti"
                />
            </div>
        </div>
    );
};

export const ToastNotificationKind = () => {
    return (
        <div>
            <div css={[notificationWrapper]}>
                <Notification
                    type="toast"
                    title="Toast Notification"
                    subTitle="Default Noti"
                    caption={moment().toString() + ", an event of something"}
                />
                <Notification
                    type="toast"
                    kind="info"
                    title="Toast Notification"
                    subTitle="Info Noti"
                    caption={moment().toString() + ", an event of something"}
                />
                <Notification
                    type="toast"
                    kind="error"
                    title="Toast Notification"
                    subTitle="Error Noti"
                    caption={moment().toString() + ", an event of something"}
                />
                <Notification
                    type="toast"
                    kind="success"
                    title="Toast Notification"
                    subTitle="Success Noti"
                    caption={moment().toString() + ", an event of something"}
                />
                <Notification
                    type="toast"
                    kind="warning"
                    title="Toast Notification"
                    subTitle="Warning Noti"
                    caption={moment().toString() + ", an event of something"}
                />
            </div>
        </div>
    );
};

export const TimeoutNotification = () => {
    const [timeOut, setTimeOut] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeOut(0);
        }, timeOut);
        return () => clearTimeout(timer);
    }, [timeOut]);

    return (
        <div>
            <div css={[notificationWrapper]}>
                current Time Out : {timeOut}
                <div />
                <ButtonGroup>
                    <Button
                        size="small"
                        kind="secondary"
                        onClick={() => setTimeOut(0)}
                    >
                        Clear Time
                    </Button>
                    <Button size="small" onClick={() => setTimeOut(1000)}>
                        Time Out 1 second
                    </Button>
                    <Button size="small" onClick={() => setTimeOut(5000)}>
                        Time Out 5 second
                    </Button>
                </ButtonGroup>
                {timeOut === 0 ? (
                    ""
                ) : (
                    <Notification
                        timeOut={timeOut}
                        type="toast"
                        title="Toast Notification"
                        subTitle="Default Noti"
                        caption={
                            moment().toString() + ", an event of something"
                        }
                    />
                )}
            </div>
        </div>
    );
};

export const ToastPosition = () => {
    const [notiPosition, setPosition] = useState(null);
    const [timeOut, setTimeOut] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeOut(0);
            setPosition(null);
        }, timeOut);
        return () => clearTimeout(timer);
    }, [timeOut, notiPosition]);

    return (
        <div>
            <div css={[notificationWrapper]}>
                <ButtonGroup gap="4rem">
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("top_left"), setTimeOut(2000);
                        }}
                    >
                        Top Left
                    </Button>
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("top"), setTimeOut(2000);
                        }}
                    >
                        Top
                    </Button>
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("top_right"), setTimeOut(2000);
                        }}
                    >
                        Top Right
                    </Button>
                </ButtonGroup>
            </div>
            <div css={[notificationWrapper]}>
                <ButtonGroup gap="4rem">
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("bottom_left"), setTimeOut(2000);
                        }}
                    >
                        Bottom Left
                    </Button>
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("bottom"), setTimeOut(2000);
                        }}
                    >
                        Bottom
                    </Button>
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("bottom_right"), setTimeOut(2000);
                        }}
                    >
                        Bottom Right
                    </Button>
                </ButtonGroup>
            </div>
            {notiPosition === null ? null : (
                <Notification
                    notiPosition={notiPosition}
                    type="toast"
                    title="Toast Message"
                    subTitle="Warning Toast Message"
                    kind="warning"
                    caption={moment().toString()}
                    timeOut={timeOut}
                    onCloseButtonClick={() => setTimeOut(0)}
                />
            )}
        </div>
    );
};

export const InlinePosition = () => {
    const [notiPosition, setPosition] = useState(null);
    const [timeOut, setTimeOut] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeOut(0);
            setPosition(null);
        }, timeOut);
        return () => clearTimeout(timer);
    }, [timeOut, notiPosition]);

    return (
        <div>
            <div css={[notificationWrapper]}>
                <ButtonGroup gap="4rem">
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("top_left"), setTimeOut(1000);
                        }}
                    >
                        Top Left
                    </Button>
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("top"), setTimeOut(2000);
                        }}
                    >
                        Top
                    </Button>
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("top_right"), setTimeOut(2000);
                        }}
                    >
                        Top Right
                    </Button>
                </ButtonGroup>
            </div>
            <div css={[notificationWrapper]}>
                <ButtonGroup gap="4rem">
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("bottom_left"), setTimeOut(2000);
                        }}
                    >
                        Bottom Left
                    </Button>
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("bottom"), setTimeOut(2000);
                        }}
                    >
                        Bottom
                    </Button>
                    <Button
                        size="small"
                        width="15%"
                        onClick={() => {
                            setPosition("bottom_right"), setTimeOut(2000);
                        }}
                    >
                        Bottom Right
                    </Button>
                </ButtonGroup>
            </div>
            {notiPosition === null ? null : (
                <Notification
                    notiPosition={notiPosition}
                    title="Inline Notification"
                    subTitle="Error Notification"
                    kind="error"
                    timeOut={timeOut}
                    onCloseButtonClick={() => setTimeOut(0)}
                />
            )}
        </div>
    );
};
