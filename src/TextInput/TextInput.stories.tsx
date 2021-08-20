/** @jsx jsx */
import TextInput from "./TextInput";
import { jsx, css } from "@emotion/core";
import {
    withKnobs,
    text,
    boolean,
    select,
    number
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { useState } from "react";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

import {
    EmailValuePatternMatch,
    PhoneNumberPatternMatch,
    PasswordValuePatternMatch
} from "../shared/utils";

export default {
    title: "Form|TextInput",
    component: TextInput,
    decorators: [withKnobs]
};

export const textInput = () => {
    const textInputProps = {
        type: select(
            "Input control type (type)",
            ["text", "password", "email"],
            "text"
        ),
        label: boolean("Label visible boolean (label)", false),
        labelValue: text("Label Text (labelValue)", "Default Label"),
        helper: boolean("Helper visible boolean (helper)", false),
        helperValue: text("Helper Text (helperValue)", "Default Helper"),
        disabled: boolean("Input disabled (disabled)", false),
        invalid: boolean("Invalid State (invalid)", false),
        invalidValue: text(
            "Invalid Text (invalidValue)",
            "A valid value is required"
        ),
        placeHolder: text("Place Holder (PlaceHolder)", "Default Place Holder"),
        size: select(
            "Input Field size (size)",
            ["large", "medium", "small"],
            "medium"
        ),
        maxLength: number("Input Field max text length (maxLength)", 12),
        passwordVisibleButton: boolean("Password visible button bool", false),
        passwordVisibleIcon: boolean(
            "Password visible Icon type (Show password / Hide password)",
            false
        ),
        onChange: action("onChange Test")
    };

    return <TextInput {...textInputProps} />;
};

textInput.story = {
    name: "Default"
};

const inputWrapper = css`
    margin-bottom: 2rem;
    margin-top: 2rem;
    & > div + div {
        margin-top: 2rem;
    }
`;

export const labelInput = () => {
    const labelInputProps = {
        label: true,
        labelValue: "E-mail (ID)",
        placeHolder: "Please enter your E-mail (ID)"
    };
    return <TextInput {...labelInputProps} />;
};

export const labelAndHelperInput = () => {
    const labelAndHelperInputProps = {
        label: true,
        labelValue: "Password",
        helper: true,
        helperValue:
            "The password must contain a mix of English and numeric characters and must be between 6 and Enter up to 20 characters.",
        placeHolder: "Please enter your Password",
        id: "Password"
    };
    return <TextInput {...labelAndHelperInputProps} />;
};

export const onFocusWithLabelInput = () => {
    const [focus, setFocus] = useState(false);
    const onFocusInputProps = {
        label: true,
        labelValue: "E-mail (ID)",
        onFocus: () => setFocus(!focus),
        onBlur: () => setFocus(!focus),
        labelFocus: focus,
        id: "password"
    };
    return <TextInput {...onFocusInputProps} />;
};

export const DisabledInput = () => {
    const DisabledInputProps = {
        label: true,
        labelValue: "Disabled Input",
        value: "Disabled",
        disabled: true,
        id: "Password"
    };
    return <TextInput {...DisabledInputProps} />;
};

export const ReadOnlyInput = () => {
    const ReadOnlyInputProps = {
        label: true,
        labelValue: "Read Only Input",
        value: "Read Only Input",
        readOnly: true,
        id: "Password"
    };
    return <TextInput {...ReadOnlyInputProps} />;
};

export const Sizes = () => {
    return (
        <div css={[inputWrapper]}>
            <TextInput
                label
                labelValue="Small size input"
                placeHolder="Small size input"
                size="small"
            />
            <TextInput
                label
                labelValue="Medium size input"
                placeHolder="Medium size input"
                size="medium"
            />
            <TextInput
                label
                labelValue="Large size input"
                placeHolder="Large size input"
                size="large"
            />
        </div>
    );
};

export const TogglePasswordVisibility = () => {
    const [type, setType] = useState(false);
    const [password, setPasword] = useState("password");

    const onChange = (e) => {
        setPasword(e.target.value);
    };

    const TogglePasswoardVisibilityProps = {
        name: "password",
        value: password,
        passwordVisibleButton: true,
        passwordVisibleIcon: type,
        onClick: () => setType(!type),
        onChange: onChange,
        type: type === false ? "password" : "text"
    };
    return <TextInput {...TogglePasswoardVisibilityProps} />;
};

export const InputValidation = () => {
    const [invalid, setInvalid] = useState(false);
    const [type, setType] = useState(false);

    const InputValidationProps = {
        label: true,
        labelValue: "Password",
        helper: true,
        helperValue:
            "The password must contain a mix of English and numeric characters and must be between 6 and Enter up to 20 characters.",
        placeHolder: "Please enter your Password",
        invalid: invalid,
        invalidValue: "A valid value is required",
        passwordVisibleButton: true,
        passwordVisibleIcon: type,
        onClick: () => setType(!type),
        type: type === false ? "password" : "text",
        id: "password"
    };

    return (
        <div>
            <TextInput {...InputValidationProps} />
            <div css={[inputWrapper]}>
                <Button size="small" onClick={() => setInvalid(!invalid)}>
                    Invalid Button
                </Button>
            </div>
        </div>
    );
};

export const CustomedWidth = () => {
    return (
        <div css={[inputWrapper]}>
            <TextInput
                label
                labelValue="witdh 25%"
                placeHolder="Width 25%"
                width="25%"
            />
            <TextInput
                label
                labelValue="witdh 50%"
                placeHolder="Width 50%"
                width="50%"
            />
            <TextInput
                label
                labelValue="witdh 75%"
                placeHolder="Width 75%"
                width="75%"
            />
            <TextInput
                label
                labelValue="Default (witdh 100%)"
                placeHolder="Default (witdh 100%)"
            />
        </div>
    );
};

export const WithButtonInput = () => {
    const primaryButton = () => {
        return <Button height="2.5rem">Primary</Button>;
    };

    const secondaryButton = () => {
        return (
            <Button kind="secondary" height="2.5rem">
                Secondary
            </Button>
        );
    };

    const linkButton = () => {
        return (
            <Button kind="link" height="2.5rem">
                Link
            </Button>
        );
    };

    return (
        <div css={[[inputWrapper]]}>
            <TextInput
                label
                labelValue="Primary Button"
                placeHolder="Primary Button"
                withButton={primaryButton()}
            />
            <TextInput
                label
                labelValue="Secondary Button"
                placeHolder="Secondary Button"
                withButton={secondaryButton()}
            />
            <TextInput
                label
                labelValue="Link Button"
                placeHolder="Link Button"
                withButton={linkButton()}
            />
        </div>
    );
};

export const JoinExample = () => {
    const [pwInputType, setPwInputType] = useState(false);
    const [confirmPwInputType, setConfirmPwInputType] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailInvalid, setEmailInvalid] = useState(false);
    const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [phoneNumberInvalid, setPhoneNumberInvalid] = useState(false);

    const [joinData, setJoinData] = useState({
        email: "",
        password: "",
        phoneNumber: ""
    });

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const validationInitialize = () => {
        setEmailInvalid(null);
        setPasswordInvalid(null);
        setPhoneNumberInvalid(null);
        setConfirmPasswordInvalid(null);
    };

    const onSubmit = () => {
        if (handleValidation() === false) {
            return;
        }
        alert(
            "Successfully registered\n" +
                "Email  :  " +
                joinData.email +
                "\n" +
                "Password  :  " +
                joinData.password +
                "\n" +
                "PhoneNumber  :  " +
                joinData.phoneNumber
        );

        //* AJAX JOIN POST ACTION

        validationInitialize();
        setJoinData({
            email: "",
            password: "",
            phoneNumber: ""
        });
        setConfirmPassword("");
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setJoinData({
            ...joinData,
            [name]: value
        });
    };

    const onChangePhoneNumber = (e) => {
        const { value } = e.target;
        const regex = /^[0-9\b -]{0,13}$/;

        if (regex.test(value)) {
            setJoinData({
                ...joinData,
                phoneNumber: value
            });

            if (value.length === 10) {
                setJoinData({
                    ...joinData,
                    phoneNumber: value.replace(
                        /(\d{3})(\d{3})(\d{4})/,
                        "$1-$2-$3"
                    )
                });
            }

            if (value.length === 13) {
                setJoinData({
                    ...joinData,
                    phoneNumber: value
                        .replace(/-/g, "")
                        .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
                });
            }
        }
    };

    const handleValidation = () => {
        //Email value check
        if (!EmailValuePatternMatch(joinData.email)) {
            setEmailInvalid(true);
            alert("Invalid E-mail format");
            return false;
        }
        validationInitialize();

        // Password value check
        if (!PasswordValuePatternMatch(joinData.password)) {
            setPasswordInvalid(true);
            alert(
                "Password must contain at least one number, special character, lower case letter, and uppercase letter. The length must be at least eight characters"
            );
            return false;
        }
        validationInitialize();

        if (joinData.password !== confirmPassword) {
            alert("Password is not the same");
            setConfirmPasswordInvalid(true);
            return false;
        }
        validationInitialize();

        //Phone num value check
        if (!PhoneNumberPatternMatch(joinData.phoneNumber)) {
            setPhoneNumberInvalid(true);
            alert("Phone number format is invalid");
            return false;
        }
        return true;
    };

    const joinExampleIdInputProps = {
        name: "email",
        value: joinData.email,
        label: true,
        labelValue: "E-mail (ID)",
        invalid: emailInvalid,
        invalidValue: "Invalid E-mail format",
        placeHolder: "Please enter your E-mail (ID)",
        onChange: onChange
    };

    const joinExamplePwInputProps = {
        name: "password",
        value: joinData.password,
        label: true,
        labelValue: "Password",
        helper: true,
        helperValue:
            "Password must contain at least one number, special character, lower case letter, and uppercase letter. Length must be at least 8 characters.",
        invalid: passwordInvalid,
        invalidValue:
            "Password must contain at least one number, special character, lower case letter, and uppercase letter. The length must be at least eight characters",
        placeHolder: "Please enter your password.",
        passwordVisibleButton: true,
        passwordVisibleIcon: pwInputType,
        type: pwInputType === false ? "password" : "text",
        onClick: () => setPwInputType(!pwInputType),
        onChange: onChange
    };

    const joinExampleConfirmPwInputProps = {
        name: "confirmPassword",
        value: confirmPassword,
        label: true,
        labelValue: "Confirm Password",
        invalid: confirmPasswordInvalid,
        invalidValue: "Password is not the same",
        placeHolder: "Please enter your confirm password.",
        passwordVisibleButton: true,
        passwordVisibleIcon: confirmPwInputType,
        type: confirmPwInputType === false ? "password" : "text",
        onClick: () => setConfirmPwInputType(!confirmPwInputType),
        onChange: onChangeConfirmPassword
    };

    const joinExamplePhoneNumberInputProps = {
        name: "phoneNumber",
        value: joinData.phoneNumber,
        label: true,
        labelValue: "PhoneNumber",
        invalid: phoneNumberInvalid,
        invalidValue: "Phone number format is invalid",
        placeHolder: "Please enter your phone number",
        onChange: onChangePhoneNumber
    };

    return (
        <div>
            <Typography lineHeight="5rem" head="h2" align="center">
                Join
            </Typography>
            <div css={[[inputWrapper]]}>
                <TextInput {...joinExampleIdInputProps} />
                <TextInput {...joinExamplePwInputProps} />
                <TextInput {...joinExampleConfirmPwInputProps} />
                <TextInput {...joinExamplePhoneNumberInputProps} />
            </div>
            <div css={[[inputWrapper]]}>
                <ButtonGroup rightAlign>
                    <Button
                        size="large"
                        width="100%"
                        onClick={onSubmit}
                        disabled={
                            !joinData.email ||
                            !joinData.password ||
                            joinData.phoneNumber.length !== 13 ||
                            !confirmPassword
                        }
                    >
                        Sign up
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};
