import React from 'react';

const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} />
  );
};

export default TextInput;