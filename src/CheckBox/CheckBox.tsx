/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../shared/colors';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

type CheckBoxProps = {
  /** Provide an id to uniquely identify the CheckBox */
  id: string;
  /** Specify the value of the CheckBox  */
  value?: string;
  /** Specify whether the underlying input should be checked */
  checked?: boolean;
  /** Specify whether the Checkbox should be disabled */
  disabled?: boolean;
  /**	Specify an optional className to be applied to the node */
  className?: string;
  /** Specify whether to visually show the label */
  label?: boolean;
  /** Provide the text that will be read by a screen reader when visiting this control */
  labelValue?: string;
  /** Optionally provide an onChange handler that is called whenever CheckBox is updated */
  onChange?: (e?: any) => void;
  /** Optionally provide an onClick handler that is called whenever CheckBox is clicked */
  onClick?: (e?: any) => void;
};

/** The `Checkbox` is used when there are multiple items to select in a list. Users can select zero, one, or any number of items.
 **/

const CheckBox = ({
  id,
  value,
  checked,
  disabled,
  className,
  label,
  labelValue,
  onChange,
  onClick,
  ...other
}: CheckBoxProps) => {
  return (
    <div
      className={className}
      css={
        disabled
          ? disabledContainer
          : checked
          ? [checkedContainer]
          : [checkBoxContainer]
      }
    >
      <input
        css={[hideInput]}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        onClick={onClick}
        type="checkbox"
        {...other}
      />
      {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      {label ? (
        <label css={[disabled ? disabledLabelStyle : labelStyle]} htmlFor={id}>
          {labelValue}
        </label>
      ) : null}
    </div>
  );
};

CheckBox.defaultProps = {
  id: '',
  value: '',
  checked: false,
  onClick: () => {},
  onChange: () => {},
};

const checkBoxContainer = css`
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

const checkedContainer = css`
  ${checkBoxContainer};
  svg {
    fill: ${color.primary_90};
  }
`;

const disabledContainer = css`
  ${checkBoxContainer};
  color: ${color.mediumdark};
  cursor: not-allowed;
  svg {
    fill: ${color.mediumdark};
    cursor: not-allowed;
  }
`;

const hideInput = css`
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
export default CheckBox;
