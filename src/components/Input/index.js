import React from 'react';
import InputMask from 'react-input-mask';
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange, disabled, name, onKeyDown, mask }) => {
  const renderInput = () => {
    if (mask) {
      return (
        <InputMask
          mask={mask}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onKeyDown={onKeyDown}
        >
          {() => (
            <C.Input
              className='input'
              type={type}
              placeholder={placeholder}
              name={name}
            />
          )}
        </InputMask>
      );
    } else {
      return (
        <C.Input
          className='input'
          defaultValue={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          onKeyDown={onKeyDown}
        />
      );
    }
  };

  return renderInput();
};

export default Input;
