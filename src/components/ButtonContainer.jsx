import Button from './Button';
import './App.css';

const ButtonContainer = ({ keypad }) => {
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
    <div className="grid grid-cols-4 grid-rows-5 gap-[8px] rounded-lg bg-[#1A2B4D] py-[15px] pl-[18px] pr-[10px]">
      {buttons.map((value) => (
        <Button
          key={value}
          value={value}
          onClick={keypad}
          className={
            value === 'RESET'
              ? 'col-span-2 w-[175px] bg-[#687B8F] text-[22px] text-[#ffffff]'
              : value === '='
                ? 'col-span-2 w-[175px] bg-[#d6453d] text-[#ffffff] text-[bold]'
                : value === 'DEL'
                  ? 'bg-[#687B8F] text-[22px] text-[#ffffff]'
                  : ''
          }
        />
      ))}
    </div>
  );
};

export default ButtonContainer;
