import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import Button from './button';
import { TVariant } from './button.types';

export default {
  title: 'Components/Button',
  component: Button,
};

const variants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Danger: 'danger',
};

export const Basic = () => (
  <Button
    variant={select('Variant', variants, 'primary') as TVariant}
    block={boolean('Block', false)}
  >
    {text('Text', 'Button')}
  </Button>
);

Basic.story = {
  parameters: {
    jest: ['__test__/button.test.js'],
  },
};
