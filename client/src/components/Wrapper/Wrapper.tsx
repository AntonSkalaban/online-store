import React, { Children } from 'react';
import './style.css';

interface WrapperProps {
  children?: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="wrapper">{children}</div>;
};
