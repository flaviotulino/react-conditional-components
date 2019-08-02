import React from 'react';
import If from './If';

const When = ({ children, condition }) => {
  return <If condition={condition}>{children}</If>
};

export default When;
