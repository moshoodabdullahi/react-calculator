import Calculator from './Calculator';
import './App.css';

const App = () => {
  const ThemeProvider = ({ children }) => {
    const theme = 'theme';

    return (
      <div className={`main-container w-[400px] theme-${theme}`}>
        <header className="header relative my-[50px] mb-[10px] flex">
          <h1 className="header-text absolute left-[-4px] top-[-22px] font-spartan text-[45px] text-[#e9e2db]">
            calc
          </h1>
          <h2 className="header-txt relative left-[230px] top-[-8px] self-center text-[18px] text-[#e9e2db]">
            THEME
          </h2>
          <div className="theme-container">
            <form name="themeForm">
              <div className="theme-label relative left-[255px] top-[-26px] font-spartan text-sm">
                <label
                  htmlFor="theme-1-attr"
                  className="pointer ml-[12px] text-[13px] text-[#e9e2db]"
                >
                  1
                </label>
                <label
                  htmlFor="theme-2-attr"
                  className="pointer ml-[12px] text-[13px] text-[#e9e2db]"
                >
                  2
                </label>
                <label
                  htmlFor="theme-3-attr"
                  className="pointer ml-[12px] text-[13px] text-[#e9e2db]"
                >
                  3
                </label>
              </div>
              <div className="theme-input relative left-[250px] top-[-22px] h-[30px] w-[80px] rounded-full bg-[#232c42]">
                <input
                  type="radio"
                  name="theme"
                  id="theme-1-attr"
                  value="theme-1"
                  checked={theme === 'theme-1'}
                  className="checked:bg-customRedChecked absolute left-[10px] top-[7px] h-[15px] w-[15px] cursor-pointer appearance-none rounded-full bg-[#cf3f2f]"
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

  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
};

export default App;
