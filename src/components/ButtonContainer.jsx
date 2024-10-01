import React from 'react';
import Button from './Button';

const buttons = [
  ['7', '8', '9', 'DEL'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '-'],
  ['.', '0', '/', 'x'],
  ['RESET', '='],
];

const ButtonContainer = ({ value }) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {buttons.flat().map((value) => (
        <Button value={value} className={value === 'RESET' || value === '=' ? 'col-span-2' : ''} />
      ))}
    </div>
  );
};

export default ButtonContainer;
