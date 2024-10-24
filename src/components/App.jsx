import React, { useState } from 'react';
import './App.css';
import Display from './Display';

const ThemeProvider = ({ children }) => {
  const [theme] = useState('theme');

  return (
    <div className="main-container">
      <header className="header relative my-[50px] mb-[10px] flex">
        <h1 className="header-text absolute left-[12px] top-[-10px] font-spartan text-[#e9e2db]">
          calc
        </h1>
        <h2 className="header-txt relative left-[150px] top-[-5px] self-center text-[14px] text-[#e9e2db] ">
          THEME
        </h2>
        <div className="theme-container">
          <form name="themeForm">
            <div className="theme-label relative left-[94px] top-3 font-spartan text-sm">
              <label
                className="theme-1-label theme-label pointer relative left-[70px] top-[-35px] ml-[12px] font-spartan text-[13px] text-[#e9e2db]"
                htmlFor="theme-1-attr"
              >
                1
              </label>
              <label
                className="theme-2-label theme-label pointer relative left-[70px] top-[-35px] ml-[12px] font-spartan text-[13px] text-[#e9e2db]"
                htmlFor="theme-2-attr"
              >
                2
              </label>
              <label
                className="theme-3-label theme-label pointer relative left-[70px] top-[-35px] ml-[12px] font-spartan text-[13px] text-[#e9e2db]"
                htmlFor="theme-3-attr"
              >
                3
              </label>
            </div>
            <div className="theme-input relative left-[166px] top-[-22px] h-[30px] w-[80px] rounded-full bg-[#232c42]">
              <input
                className="theme-choice appearance pointer checked:bg-customRedChecked absolute left-[10px] top-[7px] h-[15px] w-[15px] cursor-pointer appearance-none 
             rounded-full bg-[#cf3f2f] group-hover:checked:bg-customRedCheckedHover"
                type="radio"
                name="theme"
                id="theme-1-attr"
                value="theme"
                checked={theme === 'theme'}
                aria-label="theme-1"
              />
            </div>
          </form>
        </div>
      </header>
      {children}
    </div>
  );
};

const Calculator = () => {
  const [result] = useState('0');

  const buttons = [
    '7',
    '8',
    '9',
    'DEL',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '/',
    'x',
    'RESET',
    '=',
  ];

  return (
    <div className="calculator-container">
      <Display result={result} />

      <div className="grid grid-cols-4 grid-rows-5 gap-[10px] rounded-lg bg-[#1A2B4D] px-[10px] py-[15px]">
        {buttons.map((value) => (
          <button
            id="keypad-button"
            key={value}
            className={`key ${value === 'RESET' ? 'reset col-span-2' : ''} ${
              value === '=' ? 'equals-key equal col-span-2' : ''
            } mx-[8px] my-[6px] mb-3 ml-[2px] h-[60px] w-[58px] rounded-md border-none bg-[#e9e2db] font-spartan text-[#434a5a] shadow-[0_5px_#b4a497] active:translate-y-[2px]`}
            value={value}
            type="button"
            style={{
              ...(value === 'DEL'
                ? {
                    backgroundColor: '#687B8F',
                    fontSize: '20px',
                    color: '#ffffff',
                    boxShadow: '0 5px #3D4E66',
                    transform: "isActive ? 'translateY(2px)' : 'none'",
                  }
                : {}),
              ...(value === 'RESET'
                ? {
                    backgroundColor: '#687B8F',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    boxShadow: '0 5px #3D4E66',
                    fontSize: '18px',
                    padding: '17px 0',
                    transform: "isActive ? 'translateY(2px)' : 'none'",
                    width: '131px',
                    height: '60px',
                  }
                : {}),
              ...(value === '='
                ? {
                    backgroundColor: '#d6453d',
                    fontWeight: 'bold',
                    boxShadow: '0 5px #b02c24',
                    color: '#ffffff',
                    transform: "isActive ? 'translateY(2px)' : 'none'",
                    width: '131px',
                    height: '60px',
                  }
                : {}),
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
};

export default App;
