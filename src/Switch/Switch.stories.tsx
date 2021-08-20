/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { action } from "@storybook/addon-actions";
import Switch from "./Switch";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export const Default = () => {
    const checked = boolean("checked", false);
    const labelText = text("labelText", "");
    const onText = text("onText", "");
    const offText = text("offText", "");
    const status = select(
        "status",
        ["primary", "danger", "info", "success", "warning"],
        "primary"
    );
    const onClick = action("onClick");
    const disabled = boolean("disabled", false);
    return (
        <Switch
            checked={checked}
            labelText={labelText}
            onText={onText}
            offText={offText}
            status={status}
            disabled={disabled}
            callbackFunc={onClick}
        />
    );
};

export const Label = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Switch
            checked={checked}
            callbackFunc={() => {
                setChecked(!checked);
            }}
            labelText={"Switch Label"}
        />
    );
};

export const Off = () => {
    return <Switch checked={false} offText="Off" />;
};

export const On = () => {
    return <Switch checked={true} onText="On" />;
};

export const Disabled = () => {
    return <Switch checked={false} disabled />;
};

export const Status = () => {
    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                <p>Default</p>
                <Switch checked={true} />
            </div>
            <div style={{ marginBottom: "1rem" }}>
                <p>Info</p>
                <Switch checked={true} status="info" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
                <p>Success</p>
                <Switch checked={true} status="success" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
                <p>Warning</p>
                <Switch checked={true} status="warning" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
                <p>Danger</p>
                <Switch checked={true} status="danger" />
            </div>
        </div>
    );
};

export const Example = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Switch
            checked={checked}
            callbackFunc={() => {
                setChecked(!checked);
            }}
        />
    );
};

export default {
    title: "Form|Switch",
    component: Switch,
    decorators: [withKnobs]
};
