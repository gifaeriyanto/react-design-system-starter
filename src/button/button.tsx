/**
 * ------- SAMPLE COMPONENT -------
 * You can remove this component and create your own
 */

import React from 'react';
import { ButtonStyled } from './button.styles';
import { IButton } from './button.types';

const Button: React.FC<IButton> = ({ variant, block, children }) => {
  return (
    <ButtonStyled variant={variant} block={block}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
