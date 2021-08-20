import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Buttons|ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const buttonGroup = () => {
  const direction = radios(
    'direction',
    { Row: 'row', Column: 'column' },
    'row',
  );
  const rightAlign = boolean('rightAlign', false);
  const gap = text('gap', '0.5rem');

  return (
    <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
      <Button kind="secondary">Cancel</Button>
      <Button>Confirm</Button>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: 'Default',
};

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <Button kind="secondary">Cancel</Button>
      <Button>Confirm</Button>
    </ButtonGroup>
  );
};

export const column = () => {
  return (
    <ButtonGroup direction="column">
      <Button>Block button</Button>
      <Button>Block button</Button>
    </ButtonGroup>
  );
};

export const customGap = () => {
  return (
    <ButtonGroup gap="1rem">
      <Button kind="secondary">Cancel</Button>
      <Button>Confirm</Button>
    </ButtonGroup>
  );
};

export const customGapColumn = () => {
  return (
    <ButtonGroup direction="column" gap="1rem">
      <Button>Block button</Button>
      <Button>Block button</Button>
    </ButtonGroup>
  );
};
