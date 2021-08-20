/** @jsx jsx */
import RadioButton from './RadioButton';
import { jsx, css } from '@emotion/core';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { useState } from 'react';

export default {
  title: 'Form|RadioButton',
  component: RadioButton,
  decorators: [withKnobs],
};

export const radioButton = () => {
  const radioButtonProps = {
    label: boolean('Radio Button Label visible (label)', true),
    labelValue: text('Radio Button Label Text (labelValue)', 'Radio Button'),
    disabled: boolean('Radio button disabled (disabled)', false),
    checked: boolean(
      'Id, Name, Value Check using various properties. (checked)',
      false,
    ),
  };

  return <RadioButton {...radioButtonProps} />;
};

radioButton.story = {
  name: 'Default',
};

export const OneChoiceRadioButton = () => {
  const [checked, setChecked] = useState(false);
  const oneChoiceRadioButtonProps = {
    label: true,
    labelValue: 'One Choice Radio',
    id: 'oneCoice',
    value: 'oneCoice',
    onClick: () => setChecked(true),
    checked: checked,
  };
  return <RadioButton {...oneChoiceRadioButtonProps} />;
};

export const DisabledRadioButton = () => {
  const disabledRadioButtonProps = {
    label: true,
    labelValue: 'Disabled Radio',
    id: 'disabled',
    value: 'disabled',
    disabled: true,
  };
  return <RadioButton {...disabledRadioButtonProps} />;
};

export const ReadOnlyRadioButton = () => {
  const readOnlyRadioButtonProps = {
    label: true,
    labelValue: 'Read Only Radio',
    id: 'readOnly',
    value: 'readOnly',
    checked: true,
  };
  return <RadioButton {...readOnlyRadioButtonProps} />;
};
