export type TVariant = 'primary' | 'secondary' | 'danger';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
  block?: boolean;
}

export interface IButtonStyled {
  variant?: TVariant;
  block?: boolean;
}
