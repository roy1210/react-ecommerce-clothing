import React from 'react';
import { CustomButtonContainer } from './Custom-button.style';

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
