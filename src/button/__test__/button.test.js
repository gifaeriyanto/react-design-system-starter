import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Button from '..';

describe('Button', () => {
  test('basic render', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toMatchSnapshot();
  });

  test('variants', () => {
    const { container } = render(
      <>
        <Button variant="primary">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="danger">Button</Button>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  test('block', () => {
    const { container } = render(<Button block>Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
