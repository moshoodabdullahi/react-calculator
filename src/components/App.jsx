import React, { useState } from 'react';
import Display from './Display';
import ButtonContainer from './ButtonContainer';

const Calculator = () => {
  const [input] = useState('');

  const handleButtonClick = 'value';

  return (
    <div className="mx-auto mt-[10vh] flex w-[300px] max-w-md flex-col rounded-lg p-4">
      <Display input={input} />
      <ButtonContainer onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
