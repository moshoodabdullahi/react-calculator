import React from 'react';
import Display from './Display';
import ButtonContainer from './ButtonContainer';
import './App.css';

const Calculator = ({ result }) => {
  return (
    <div className="calculator-container">
      <Display result={result} />
      <ButtonContainer />
    </div>
  );
};

export default Calculator;
