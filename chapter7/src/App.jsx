import { useState } from "react";
import Card from "./Card";

const App = () => {
  const a = 10;

  const [value, setValue] = useState(0);

  const changeValue = () => {
    // setValue(value + 1);
    // setValue(value + 1);
    setValue((prev) => prev + 1);
    //if i want to increase the value by 2, i can call setValue twice, but it will not work as expected because the state update is asynchronous and it will not have the updated value in the second call. So, we can use the functional update form of setState to get the previous value and update it accordingly. this is called batch update.

    // setValue((prev) => prev + 1);
    // setValue((prev) => prev + 1);
  };
  return (
    <>
      <div className="bg-gray-600 w-full h-screen flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl text-white">{value}</h1>

        <div className="flex gap-5 items-center justify-center">
          <button
            onClick={changeValue}
            className="px-8 py-3 rounded-md bg-blue-500 active:scale-95"
          >
            +1
          </button>

          <button
            onClick={() => setValue(value > 0 ? value - 1 : 0)}
            className="px-8 py-3 rounded-md bg-blue-500 active:scale-95"
          >
            -1
          </button>
        </div>
      </div>
      <Card/>
    </>
  );
};

export default App;
