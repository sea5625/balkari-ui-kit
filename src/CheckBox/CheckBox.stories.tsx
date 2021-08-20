/** @jsx jsx */
import CheckBox from './CheckBox';
import { jsx } from '@emotion/core';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { useState } from 'react';

export default {
  title: 'Form|CheckBox',
  component: CheckBox,
  decorators: [withKnobs],
};

export const checkBox = () => {
  const checkBoxProps = {
    label: boolean('CheckBox Label visible (label)', true),
    labelValue: text('CheckBox Label Text (labelValue)', 'Check Box'),
    disabled: boolean('CheckBox disabled (disabled)', false),
    checked: boolean('Value Check using various properties. (checked)', false),
  };
  return <CheckBox {...checkBoxProps} />;
};

checkBox.story = {
  name: 'Default'
};

export const OneChoiceCheckBox = () => {
  const [checked, setChecked] = useState(false);

  const onChoiceCheckBoxProps = {
    label: true,
    labelValue: 'One Choice CheckBox',
    id: 'oneChoice',
    value: 'oneChoice',
    onClick: () => setChecked(!checked),
    checked: checked,
  };
  return <CheckBox {...onChoiceCheckBoxProps} />;
};

export const DisabledCheckBox = () => {
  const disabledCheckBoxProps = {
    label: true,
    labelValue: 'Disabled CheckBox',
    disabled: true,
  };
  return <CheckBox {...disabledCheckBoxProps} />;
};

export const ReadOnlyCheckBox = () => {
  const readOnlyCheckBoxProps = {
    label: true,
    labelValue: 'Read Only CheckBox',
    id: 'readOnly',
    value: 'readOnly',
    checked: true,
  };
  return <CheckBox {...readOnlyCheckBoxProps} />;
};
