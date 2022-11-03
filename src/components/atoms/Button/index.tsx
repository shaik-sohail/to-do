import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
interface IButtonProps extends MuiButtonProps {}
const ButtonComponent: React.FC<IButtonProps> = ({
  variant,
  children,
  ...props
}) => {
  return (
    <MuiButton variant={variant} {...props}>
      {children}
    </MuiButton>
  );
};

export default ButtonComponent;
