import React from 'react';

export interface IButtonProps {
  color?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ className, children, ...props }: IButtonProps) => {
  return (
    <button
      className={`${className} py-3.5 text-xs font-bold text-white uppercase transition bg-primary px-8 rounded-4xl hover:bg-gray-600 focus:bg-gray-700 flex items-center`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
