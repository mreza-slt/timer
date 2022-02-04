import { useState } from "react";
import Header from "../components/Header";
import TimerComponent from "../components/TimerComponent";

const Timer = () => {
  const [timer, setTimer] = useState([]);

  const remove = (id) => {
    const index = timer.findIndex((item) => item.id === id);
    timer.splice(index, 1);
    setTimer([...timer]);
  };

  const handelAddTimer = () => {
    setTimer([...timer, { id: Date.now() }]);
  };

  return (
    <>
      <Header handelAddTimer={handelAddTimer} />
      {timer.map((time) => (
        <div key={time.id}>
          <TimerComponent onRemove={() => remove(time.id)} />
        </div>
      ))}
    </>
  );
};

export default Timer;
