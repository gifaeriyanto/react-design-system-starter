import styled from '@emotion/styled';
import { IButtonStyled, TVariant } from './button.types';

const getBackground = (variant?: TVariant) => {
  switch (variant) {
    case 'secondary':
      return 'green';

    case 'danger':
      return 'red';

    default:
      return 'blue';
  }
};

export const ButtonStyled = styled.button<IButtonStyled>(
  ({ variant, block }) => ({
    padding: 16,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: getBackground(variant),
    color: '#fff',
    border: 0,
    width: block ? '100%' : undefined,
  }),
);
