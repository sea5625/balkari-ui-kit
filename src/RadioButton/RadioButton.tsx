/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../shared/colors';
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im';

type RadioButtonProps = {
  /** Provide an id to uniquely identify the RadioButton */
  id?: string;
  /** Specify a custom name for the RadioButton */
  name?: string;
  /** Specify the value of the RadioButton  */
  value?: string | number;
  /** Specify whether the underlying RadioButton should be checked */
  checked?: boolean;
  /** Specify whether the RadioButton should be disabled */
  disabled?: boolean;
  /**	Specify an optional className to be applied to the node */
  className?: string;
  /** Specify whether to visually show the label */
  label?: boolean;
  /** Provide the text that will be read by a screen reader when visiting this control */
  labelValue?: string;
  /** Optionally provide an onChange handler that is called whenever RadioButton is updated */
  onChange?: (e?: any) => void;
  /** Optionally provide an onClick handler that is called whenever RadioButton is clicked */
  onClick?: (e?: any) => void;
};

/** The `RadioButton` is used when there are multiple items to select in a list. Users can select zero, one, or any number of items.
 **/

const RadioButton = ({
  id,
  name,
  value,
  checked,
  disabled,
  className,
  label,
  labelValue,
  onChange,
  onClick,
  ...other
}: RadioButtonProps) => {
  return (
    <div
      className={className}
      css={
        disabled
          ? disabledContainer
          : checked
          ? [checkedRadioButtonContainer]
          : [radioButtonContainer]
      }
    >
      <input
        css={[hideRadioInput]}
        id={id}
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
        type="radio"
        {...other}
      />
      {disabled ? (
        <ImRadioUnchecked />
      ) : checked ? (
        <ImRadioChecked />
      ) : (
        <ImRadioUnchecked />
      )}
      {label ? (
        <label css={[disabled ? disabledLabelStyle : labelStyle]} htmlFor={id}>
          {labelValue}
        </label>
      ) : null}
    </div>
  );
};

RadioButton.defaultProps = {
  labelValue: 'Default Label',
  value: '',
  checked: false,
};

const radioButtonContainer = css`
  margin: 0 auto;
  position: relative;
  z-index: 999;
  svg {
    position: absolute;
    width: 1.1rem;
    height: 1.1rem;
    cursor: pointer;
  }
`;

const checkedRadioButtonContainer = css`
  ${radioButtonContainer};
  svg {
    fill: ${color.primary_90};
  }
`;

const disabledContainer = css`
  ${radioButtonContainer};
  color: ${color.mediumdark};
  cursor: not-allowed;
  svg {
    fill: ${color.mediumdark};
    cursor: not-allowed;
  }
`;

const hideRadioInput = css`
  opacity: 0;
  -webkit-appearance: none;
  display: inline-block;
  vertical-align: middle;
  margin-left: -3px;
`;

const labelStyle = css`
  z-index: 999;
  display: inline-block;
  position: relative;
  padding-left: 1.5rem;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 0.875rem;
`;

const disabledLabelStyle = css`
  ${labelStyle};
  cursor: not-allowed;
`;
export default RadioButton;
