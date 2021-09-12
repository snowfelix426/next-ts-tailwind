import React from 'react';

export interface IInputProps {
  placeholder?: string;
  type?: string;
  onChange?: () => void;
}

const Input = ({ placeholder, type = 'text' }: IInputProps) => {
  return (
    <input
      className="w-full px-2 py-1 text-sm leading-tight bg-transparent border-b-2 border-black appearance-none text-dark-grey placeholder-dark-grey lg:text-base focus:outline-none"
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
    />
  );
};

export default Input;
