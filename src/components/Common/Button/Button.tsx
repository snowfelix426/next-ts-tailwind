import React from 'react';

export interface IButtonProps {
  color?: 'primary' | 'outline';
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({
  color = 'primary',
  className,
  type = 'button',
  children,
  ...props
}: IButtonProps) => {
  let extraClassnames =
    color === 'primary'
      ? 'text-white bg-primary hover:bg-gray-600 focus:bg-gray-700'
      : 'bg-transparent border border-black hover:bg-primary text-dark-grey hover:text-white';
  return (
    <button
      className={`${className} ${extraClassnames} py-3.5 text-xs font-bold transition  px-10 rounded-4xl  flex items-center`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
