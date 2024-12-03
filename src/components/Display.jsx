import './App.css';

const Display = ({ result }) => {
  return (
    <div className="mb-4 h-[100px] w-full justify-around rounded-2xl bg-[#181f34] p-4 pr-[22px] pt-[24px] text-right text-white">
      <div className="font-spartan text-[35px] font-bold">{result}399,981</div>
    </div>
  );
};

export default Display;
