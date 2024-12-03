import './App.css';

const Button = ({ value, className }) => {
  return (
    <button
      className={`mb-[10px] h-[65px] w-[80px] rounded-md border-none bg-[#e9e2db] font-spartan text-[40px] text-[#434a5a] shadow-[0_5px_#b4a497] active:translate-y-[2px] ${className}`}
      style={{
        ...(value === 'DEL'
          ? {
              backgroundColor: '#687B8F',
              fontSize: '20px',
              color: '#ffffff',
              boxShadow: '0 5px #3D4E66',
              transform: "isActive ? 'translateY(2px)' : 'none'",
              fontSize: '22px',
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
              width: '175px',
              height: '70px',
            }
          : {}),
        ...(value === '='
          ? {
              backgroundColor: '#d6453d',
              fontWeight: 'bold',
              boxShadow: '0 5px #b02c24',
              color: '#ffffff',
              transform: "isActive ? 'translateY(2px)' : 'none'",
              width: '175px',
              height: '70px',
            }
          : {}),
      }}
    >
      {value}
    </button>
  );
};

export default Button;
