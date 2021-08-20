import React, { useState } from 'react';
import RadioAndCheckBoxGroup from './RadioAndCheckBoxGroup';
import RadioButton from '../RadioButton/RadioButton';
import CheckBox from '../CheckBox/CheckBox';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Form|RadioAndCheckboxGroup',
  component: RadioAndCheckBoxGroup,
  decorators: [withKnobs],
};

export const radioAndCheckBoxGroup = () => {
  const radioAndCheckBoxGroupProps = {
    direction: radios(
      'Horizontal, Vertical display (direction)',
      { Row: 'row', Column: 'column' },
      'row',
    ),
    gap: text(' Interval between radio buttons (gap)', '1rem'),
    legend: boolean('Legend visible boolean (legend)', false),
    legendValue: text('Legend Text (legendValue)', ''),
    helper: boolean('Helper visible boolean (helper)', false),
    helperValue: text('Helper Text (helperValue)', ''),
  };

  return (
    <RadioAndCheckBoxGroup {...radioAndCheckBoxGroupProps}>
      <RadioButton label labelValue={'Radio Button 1'} />
      <CheckBox label labelValue={'CheckBox 1'} />
      <RadioButton label labelValue={'Radio Button 2'} />
      <CheckBox label labelValue={'CheckBox 2'} />
    </RadioAndCheckBoxGroup>
  );
};

radioAndCheckBoxGroup.story = {
  name: 'Default',
};

export const InlineRadioGroup = () => {
  const [radioValue, setRadioValue] = useState('apple');

  const onChangeRadio = e => {
    setRadioValue(e.target.value);
  };

  const appleProps = {
    label: true,
    labelValue: 'Apple',
    id: 'apple',
    value: 'apple',
    onClick: onChangeRadio,
    checked: radioValue === 'apple',
  };

  const bananaProps = {
    label: true,
    labelValue: 'Banana',
    id: 'banana',
    value: 'banana',
    onClick: onChangeRadio,
    checked: radioValue === 'banana',
  };

  const pearProps = {
    label: true,
    labelValue: 'Pear',
    id: 'pear',
    value: 'pear',
    onClick: onChangeRadio,
    checked: radioValue === 'pear',
  };

  const orangeProps = {
    label: true,
    labelValue: 'Orange',
    id: 'orange',
    value: 'orange',
    onClick: onChangeRadio,
    checked: radioValue === 'orange',
  };

  return (
    <RadioAndCheckBoxGroup
      legend
      legendValue={'Radio button group legend'}
      helper
      helperValue={'Radio button group helper'}
      gap={'2rem'}
    >
      <RadioButton {...appleProps} />
      <RadioButton {...bananaProps} />
      <RadioButton {...pearProps} />
      <RadioButton {...orangeProps} />
    </RadioAndCheckBoxGroup>
  );
};

export const BlockRadioGroup = () => {
  const [radioValue, setRadioValue] = useState('red');

  const onChangeRadio = e => {
    setRadioValue(e.target.value);
  };

  const redProps = {
    label: true,
    labelValue: 'Red',
    id: 'red',
    value: 'red',
    onClick: onChangeRadio,
    checked: radioValue === 'red',
  };

  const yellowProps = {
    label: true,
    labelValue: 'Yellow',
    id: 'yellow',
    value: 'yellow',
    onClick: onChangeRadio,
    checked: radioValue === 'yellow',
  };

  const blueProps = {
    label: true,
    labelValue: 'Blue',
    id: 'blue',
    value: 'blue',
    onClick: onChangeRadio,
    checked: radioValue === 'blue',
  };

  const pinkProps = {
    label: true,
    labelValue: 'Pink',
    id: 'pink',
    value: 'pink',
    onClick: onChangeRadio,
    checked: radioValue === 'pink',
  };

  return (
    <RadioAndCheckBoxGroup
      legend
      legendValue={'Radio button group legend'}
      helper
      helperValue={'Radio button group helper'}
      direction={'column'}
      gap={'2rem'}
    >
      <RadioButton {...redProps} />
      <RadioButton {...yellowProps} />
      <RadioButton {...blueProps} />
      <RadioButton {...pinkProps} />
    </RadioAndCheckBoxGroup>
  );
};

export const InlineCheckboxGroup = () => {
  const [checkBoxValue, setCheckBoxValue] = useState({
    android: true,
    ios: false,
    windows: false,
    linux: false,
  });

  const androidProps = {
    label: true,
    labelValue: 'Android',
    id: 'android',
    value: 'android',
    onClick: () => {
      setCheckBoxValue(values => ({ ...values, android: !values.android }));
    },
    checked: checkBoxValue.android,
  };

  const iosProps = {
    label: true,
    labelValue: 'iOS',
    id: 'iOS',
    value: 'iOS',
    onClick: () => {
      setCheckBoxValue(values => ({ ...values, ios: !values.ios }));
    },
    checked: checkBoxValue.ios,
  };

  const windowsProps = {
    label: true,
    labelValue: 'Windows',
    id: 'windows',
    value: 'windows',
    onClick: () => {
      setCheckBoxValue(values => ({ ...values, windows: !values.windows }));
    },
    checked: checkBoxValue.windows,
  };

  const linuxProps = {
    label: true,
    labelValue: 'Linux',
    id: 'linux',
    value: 'linux',
    disabled: true,
  };

  return (
    <RadioAndCheckBoxGroup
      legend
      legendValue={'CheckBox group legend'}
      helper
      helperValue={'CheckBox group helper'}
      gap={'2rem'}
    >
      <CheckBox {...androidProps} />
      <CheckBox {...iosProps} />
      <CheckBox {...windowsProps} />
      <CheckBox {...linuxProps} />
    </RadioAndCheckBoxGroup>
  );
};

export const BlockCheckboxGroup = () => {
  const [checkBoxValue, setCheckBoxValue] = useState({
    react: true,
    vue: false,
    anguler: false,
    svelte: false,
  });

  const reactProps = {
    label: true,
    labelValue: 'React',
    id: 'react',
    value: 'react',
    onClick: () => {
      setCheckBoxValue(values => ({ ...values, react: !values.react }));
    },
    checked: checkBoxValue.react,
  };

  const vueProps = {
    label: true,
    labelValue: 'Vue',
    id: 'vue',
    value: 'vue',
    onClick: () => {
      setCheckBoxValue(values => ({ ...values, vue: !values.vue }));
    },
    checked: checkBoxValue.vue,
  };

  const angulerProps = {
    label: true,
    labelValue: 'Anguler',
    id: 'anguler',
    value: 'anguler',
    onClick: () => {
      setCheckBoxValue(values => ({ ...values, anguler: !values.anguler }));
    },
    checked: checkBoxValue.anguler,
  };

  const svelteProps = {
    label: true,
    labelValue: 'Svelte',
    id: 'svelte',
    value: 'svelte',
    disabled: true,
  };

  return (
    <RadioAndCheckBoxGroup
      legend
      legendValue={'CheckBox group legend'}
      helper
      helperValue={'CheckBox group helper'}
      direction={'column'}
      gap={'2rem'}
    >
      <CheckBox {...reactProps} />
      <CheckBox {...vueProps} />
      <CheckBox {...angulerProps} />
      <CheckBox {...svelteProps} />
    </RadioAndCheckBoxGroup>
  );
};
