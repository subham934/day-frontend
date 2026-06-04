import React, { useState, useRef } from "react";

// useRef - actual dom element ko select karne ki power deta hai
// unnecessary rerender nahi karta hai

const App = () => {
  console.log("app rendering");
  // const inputRef1 = useRef();
  // const inputRef2 = useRef();

  const inputRef = useRef({});
  console.log(inputRef);


  const submitHandler = (e) => {
    e.preventDefault();


    // console.log(inputRef1.current.value);
    // console.log(inputRef2.current.value);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-neutral-700">
      <form
        onSubmit={submitHandler}
        className="w-60 h-60 bg-gray-500 rounded-md  flex flex-col items-center justify-center"
      >
        <input
          ref={inputRef}
          // ref={inputRef1}
          type="text"
          placeholder="Enter your name"
          className="text-white outline-none p-2 my-2  border-2 border-white rounded-md"
        />
        <input
          // ref={inputRef2}
          type="number"
          placeholder="Enter your age"
          className="text-white outline-none p-2 my-2  border-2 border-white rounded-md"
        />
        <input
          type="submit"
          value="submit"
          className="p-2 my-2  py-2 active:scale-95 cursor-pointer text-center bg-blue-500 text-white rounded-md"
        />
      </form>
    </div>
  );
};

export default App;
