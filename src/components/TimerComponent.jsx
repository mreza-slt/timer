import { useState } from "react";

const TimerComponent = ({ onRemove }) => {
  const [number, setNumber] = useState(5);
  const [state, setState] = useState(null);

  const start = () => {
    if (state === null) {
      setState(
        setInterval(() => {
          setNumber((num) => num - 1);
        }, 1000)
      );
    }
  };
  const stop = () => {
    if (state !== null) {
      clearInterval(state);
      setState(null);
    }
  };
  const handelReset = () => {
    setNumber(5);
    clearInterval(state);
    setState(null);
  };
  if (number === 0) {
    clearInterval(state);
  }
  const handeldelete = () => {
    onRemove();
    clearInterval(state);
  };
  return (
    <div className="text-center border border-purple-700 rounded w-80 h-40 mx-auto mt-6">
      <h1 className="font-bold text-2xl">{number}</h1>
      <div className="mt-20 items-center">
        <button
          className="text-[#7e22ce] border border-2 rounded border-purple-700 py-0.5 px-2 mr-2"
          onClick={start}
        >
          start
        </button>
        <button
          onClick={stop}
          className="text-[#ef4444] py-0.5 border border-2 rounded border-red-500 px-2 mr-2"
        >
          stop
        </button>
        <button
          onClick={handelReset}
          className="text-[#7e22ce] border border-2 rounded border-purple-700 py-0.5 px-2 mr-2"
        >
          reset
        </button>
        <button
          onClick={handeldelete}
          className="text-[#ef4444] py-0.5 border border-2 rounded border-red-500 px-2 mr-2"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default TimerComponent;
