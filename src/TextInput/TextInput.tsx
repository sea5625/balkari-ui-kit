/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../shared/colors';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

type TextInputProps = {
  /** Specify a custom id for the TextInput */
  id?: string;
  /** Specify the value of the TextInput  */
  value?: string;
  /** Specify a custom name for the TextInput */
  name?: string;
  /** Specify an optional className to be applied to the TextInput node string */
  className?: string;
  /** Specify the type of the TextInput */
  type?: string;
  /** Specify the maximum number of characters of the TextInput */
  maxLength?: number;
  /** Specify whether the TextInput should be disabled */
  disabled?: boolean;
  /** Indicate that the TextInput of the input element is read-only. */
  readOnly?: boolean;
  /** Sets the size of the TextInput */
  size: 'large' | 'medium' | 'small';
  /** Sets the width of the TextInput to random. */
  width?: string;
  /** Render the textInput element with the Button JSX.Element */
  withButton?: JSX.Element;
  /** Specify the placeholder attribute for the TextInput */
  placeHolder: string;
  /** Specify whether to visually show the helper */
  helper?: boolean;
  /** Provide text that is used alongside the control label for additional help */
  helperValue: string;
  /** Specify whether to visually show the label */
  label?: boolean;
  /** Specify whether to visually show the label focus style */
  labelFocus?: boolean;
  /** Provide the text that will be read by a screen reader when visiting this control */
  labelValue: string;
  /** Specify whether the control is currently invalid */
  invalid: boolean;
  /** Provide the text that is displayed when the control is in an invalid state */
  invalidValue?: string;
  /** Optionally provide an onClick handler that is called whenever the TextInput is clicked */
  onClick?: (e?: any) => void;
  /** Optionally provide an onChange handler that is called whenever TextInput is updated */
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optionally provide an onFocus handler that is called whenever TextInput is focusEvent */
  onFocus?: (e?: React.FocusEvent) => void;
  /** Optionally provide an onBlur handler that is called whenever TextInput is blurEvent */
  onBlur?: (e?: any) => void;
  /** Specify whether to visually show the password visible button */
  passwordVisibleButton?: boolean;
  /** Specify whether to visually show the password visible icon */
  passwordVisibleIcon?: any;
};

/** The `TextInput` enable the user to interact with and input content and data. This component can be used for form entries.
 **/

const TextInput = ({
  id,
  value,
  name,
  className,
  type,
  disabled,
  readOnly,
  size,
  placeHolder,
  helper,
  helperValue,
  label,
  labelFocus,
  labelValue,
  invalid,
  invalidValue,
  onClick,
  onChange,
  onFocus,
  onBlur,
  maxLength,
  passwordVisibleButton,
  passwordVisibleIcon,
  width,
  withButton,
  ...other
}: TextInputProps) => {
  return (
    <div css={[textInputContainer, { width }]}>
      {label && (
        <label htmlFor={id} css={[inputlabel, labelFocus && labelFocusStyle]}>
          {labelValue}
        </label>
      )}
      <div css={[textInputWraper]}>
        <input
          className={className}
          css={
            invalid
              ? [invalidStyle, sizes[size], withButtonStyle]
              : [style, sizes[size], withButtonStyle]
          }
          id={id}
          value={value}
          name={name}
          type={type}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeHolder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          {...other}
        ></input>
        {passwordVisibleButton &&
          (passwordVisibleIcon ? (
            <button
              disabled={disabled}
              onClick={onClick}
              css={[passwordVisibility]}
            >
              <BsEyeSlash />
            </button>
          ) : (
            <button
              disabled={disabled}
              onClick={onClick}
              css={[passwordVisibility]}
            >
              <BsEye />
            </button>
          ))}
        {withButton}
      </div>
      {invalid ? (
        <p css={[invalidHelper]}>{invalidValue}</p>
      ) : (
        helper && (
          <p css={[inputHelper]}>
            <span>* </span>
            <span>{helperValue}</span>
          </p>
        )
      )}
    </div>
  );
};

TextInput.defaultProps = {
  disabled: false,
  labelValue: '',
  helperValue: '',
  invalidValue: '',
  invalid: false,
  placeHolder: '',
  type: 'text',
  size: 'medium',
  onChange: () => {},
  onClick: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

const textInputContainer = css`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
`;

const textInputWraper = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const style = css`
  box-sizing: border-box;
  margin: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: initial;
  outline: 2px solid transparent;
  outline-offset: -2px;
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  color: #161616;
  background-color: ${color.lighter};
  border: none;
  border-bottom: 1px solid #525252;
  &:hover {
    border-bottom: 3px solid ${color.darkest};
  }
  &:focus {
    border-bottom: 3px solid ${color.primary_90};
  }
  &:disabled {
    color: ${color.mediumdark};
    background-color: ${color.light};
    border-bottom: none;
    cursor: not-allowed;

    &::placeholder {
      color: ${color.mediumdark};
    }
  }
  &:read-only {
    border: none;
    color: ${color.dark};
    background-color: ${color.medium};

    &:hover:enabled {
      border: none;
    }

    &::placeholder {
      color: ${color.dark};
    }
  }
`;

const withButtonStyle = css`
  margin-right: 0.25rem;
`;

const inputlabel = css`
  box-sizing: border-box;
  padding: 0;
  font-size: 100%;
  font-family: inherit;
  border: 0;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.34;
  letter-spacing: 1px;
  display: inline-block;
  margin: 0 0 0.5rem;
  color: #525252;
  line-height: 1rem;
  vertical-align: initial;
`;

const labelFocusStyle = css`
  color: ${color.primary_90};
`;

const inputHelper = css`
  font-size: 0.75rem;
  line-height: 1.5;
  letter-spacing: 1px;
  z-index: 0;
  width: 100%;
  margin-top: 0.25rem;
  color: #525252;
  opacity: 1;
`;

const invalidHelper = css`
  ${inputHelper};
  font-weight: 600;
  color: ${color.danger} !important;
`;

const invalidStyle = css`
  ${style};
  border: 2px solid ${color.danger} !important;
`;

const passwordVisibility = css`
  position: absolute;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  padding: 0;
  background: none;
  border: 0;
  cursor: pointer;
  svg {
    font-size: 1rem;
    fill: #525252;
  }
`;

const sizes = {
  large: css`
    font-size: 1.125rem;
    height: 3rem;
  `,
  medium: css`
    font-size: 1rem;
    height: 2.5rem;
  `,
  small: css`
    font-size: 0.875rem;
    height: 2rem;
  `,
};

export default TextInput;
