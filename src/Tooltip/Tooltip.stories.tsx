/** @jsx jsx */
import Tooltip from "./Tooltip";
import { jsx } from "@emotion/core";
import { useState } from "react";
import Button from "../Button/Button"
import RadioAndCheckBoxGroup from "../RadioAndCheckBoxGroup/RadioAndCheckBoxGroup"
import RadioButton from "../RadioButton/RadioButton"
import TextInput from "../TextInput/TextInput"
export default {
    title: "Tooltip | Tooltip",
    component: Tooltip,
};

export const tooltip = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        visible: false
    })
    const onMouseOverPeer = (e) => {
        const { top, left, width, height } = e.currentTarget.getBoundingClientRect();

        setState({
            x: left,
            y: top,
            w: width,
            h: height,
            visible: true
        })
    }

    const onMouseOutPeer = () => {
        setState({
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            visible: false
        })
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }} onMouseOver={onMouseOverPeer}
                onMouseOut={onMouseOutPeer}>
                Hover Me
            </div>
            <Tooltip
                tooltipPosition="top"
                w={state.w}
                h={state.h}
                x={state.x}
                y={state.y}
                visible={state.visible}
                data="Default tooltip" />
        </div >
    );
};

tooltip.story = {
    name: "Default"
};

export const TooltipPosition = () => {
    const [statePosition, setPositionState] = useState({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        visible: false
    })
    const onMouseOverPeer = (e) => {
        const { top, left, width, height } = e.currentTarget.getBoundingClientRect();

        setPositionState({
            x: left,
            y: top,
            w: width,
            h: height,
            visible: true
        })
    }

    const onMouseOutPeer = () => {
        setPositionState({
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            visible: false
        })
    }

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div style={{ display: "inline-block" }} onMouseOver={onMouseOverPeer}
                    onMouseOut={onMouseOutPeer}>
                    Hover Me
                </div>
                <Tooltip
                    tooltipPosition="top"
                    icon
                    w={statePosition.w}
                    h={statePosition.h}
                    x={statePosition.x}
                    y={statePosition.y}
                    visible={statePosition.visible}
                    data="Position Top" />
                <Tooltip
                    tooltipPosition="bottom"
                    icon
                    w={statePosition.w}
                    h={statePosition.h}
                    x={statePosition.x}
                    y={statePosition.y}
                    visible={statePosition.visible}
                    data="Position Bottom" />
                <Tooltip
                    tooltipPosition="right"
                    icon
                    w={statePosition.w}
                    h={statePosition.h}
                    x={statePosition.x}
                    y={statePosition.y}
                    visible={statePosition.visible}
                    data="Position Right" />
                <Tooltip
                    tooltipPosition="left"
                    icon
                    w={statePosition.w}
                    h={statePosition.h}
                    x={statePosition.x}
                    y={statePosition.y}
                    visible={statePosition.visible}
                    data="Position Left" />
            </div >
        </div >
    );
};


export const IconTooltip = () => {

    const [radioValue, setRadioValue] = useState("default");

    const onChangeRadio = e => {
        setRadioValue(e.target.value);
    };

    const defaultProps = {
        label: true,
        labelValue: 'Default',
        id: 'default',
        value: 'default',
        onClick: onChangeRadio,
        checked: radioValue === 'default',
    };

    const infoProps = {
        label: true,
        labelValue: 'Info',
        id: 'info',
        value: 'info',
        onClick: onChangeRadio,
        checked: radioValue === 'info',
    };

    const warningProps = {
        label: true,
        labelValue: 'Warning',
        id: 'warning',
        value: 'warning',
        onClick: onChangeRadio,
        checked: radioValue === 'warning',
    };

    const successProps = {
        label: true,
        labelValue: 'Success',
        id: 'success',
        value: 'success',
        onClick: onChangeRadio,
        checked: radioValue === 'success',
    };

    const errorProps = {
        label: true,
        labelValue: 'Error',
        id: 'error',
        value: 'error',
        onClick: onChangeRadio,
        checked: radioValue === 'error',
    };

    const [state, setState] = useState({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        visible: false
    })
    const onMouseOverPeer = (e) => {
        const { top, left, width, height } = e.currentTarget.getBoundingClientRect();

        setState({
            x: left,
            y: top,
            w: width,
            h: height,
            visible: true
        })
    }

    const onMouseOutPeer = () => {
        setState({
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            visible: false
        })
    }

    return (
        <div>
            <div style={{ marginBottom: "4rem" }}>
                <RadioAndCheckBoxGroup
                    legend
                    legendValue={'Icon Tooltip Kind'}
                    helper
                    helperValue={'Default, Info, Warning, Success, Error'}
                    gap={'2rem'}
                >
                    <RadioButton {...defaultProps} />
                    <RadioButton {...infoProps} />
                    <RadioButton {...warningProps} />
                    <RadioButton {...successProps} />
                    <RadioButton {...errorProps} />
                </RadioAndCheckBoxGroup>
            </div>
            <div style={{ textAlign: "center" }}>
                <div style={{ display: "inline-block" }} onMouseOver={onMouseOverPeer}
                    onMouseOut={onMouseOutPeer}>
                    Hover Me
                </div>

                <Tooltip
                    tooltipPosition="top"
                    icon
                    {...radioValue}
                    iconKind={radioValue}
                    w={state.w}
                    h={state.h}
                    x={state.x}
                    y={state.y}
                    visible={state.visible}
                    data="Default tooltip" />
            </div >
        </div >
    );
};

export const WithButton = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        visible: false
    })
    const onMouseOverPeer = (e) => {
        const { top, left, width, height } = e.currentTarget.getBoundingClientRect();

        setState({
            x: left,
            y: top,
            w: width,
            h: height,
            visible: true
        })
    }

    const onMouseOutPeer = () => {
        setState({
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            visible: false
        })
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }} onMouseOver={onMouseOverPeer}
                onMouseOut={onMouseOutPeer}>
                <Button size="small">Hover Me</Button>
            </div>
            <div style={{ display: "inline-block", marginLeft: "1rem" }} onMouseOver={onMouseOverPeer}
                onMouseOut={onMouseOutPeer}>
                <Button size="small" kind="secondary">Hover Me</Button>
            </div>
            <Tooltip
                tooltipPosition="top"
                icon
                w={state.w}
                h={state.h}
                x={state.x}
                y={state.y}
                visible={state.visible}
                data="With Button Tooltip" />
        </div >
    );
};

export const WithInput = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        visible: false
    })
    const onMouseOverPeer = (e) => {
        const { top, left, width, height } = e.currentTarget.getBoundingClientRect();

        setState({
            x: left,
            y: top,
            w: width,
            h: height,
            visible: true
        })
    }

    const onMouseOutPeer = () => {
        setState({
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            visible: false
        })
    }

    const labelInputProps = {
        label: true,
        labelValue: "E-mail (ID)",
        placeHolder: "Please enter your E-mail (ID)"
    };

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block", width: "100%" }} onMouseOver={onMouseOverPeer}
                onMouseOut={onMouseOutPeer}>
                <TextInput {...labelInputProps} />
            </div>

            <Tooltip
                tooltipPosition="bottom"
                icon
                w={state.w}
                h={state.h}
                x={state.x}
                y={state.y}
                visible={state.visible}
                data="With Input Tooltip" />
        </div >
    );
};