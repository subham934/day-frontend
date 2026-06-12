import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementbyAmount,
} from "./redux/features/CounterSlice";
import { toggleTheme } from "./redux/features/ThemeSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.value);
  const theme = useSelector((state) => state.theme.value);

  const [value, setValue] = useState("");

  return (
    <div
      className={`${theme === "dark" ? "bg-neutral-950" : "bg-neutral-100"} min-h-screen flex flex-col gap-10 items-center justify-center`}
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-16 py-12 flex flex-col items-center gap-8 shadow-2xl">
        {/* Title */}
        <h1 className="text-zinc-400 text-sm font-semibold uppercase tracking-widest">
          Redux Counter
        </h1>

        <input
          type="number"
          className="border-white outline-none text-zinc-900 bg-zinc-100 rounded-lg px-4 py-2"
          placeholder="Type a number..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        
        {/* Count Display */}
        <div className="flex flex-col items-center gap-1">
          <span
            className={`text-8xl font-black tabular-nums transition-all duration-300 
              ${count > 0 ? "text-blue-400" : count < 0 ? "text-red-400" : "text-white"}`}
          >
            {count}
          </span>
          <span className="text-xs text-zinc-600 font-medium">
            current value
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="w-14 h-14 rounded-xl bg-zinc-800 hover:bg-red-500/20 border border-zinc-700 hover:border-red-500/50 text-zinc-300 hover:text-red-400 text-2xl font-bold transition-all duration-200 active:scale-95 cursor-pointer"
          >
            −
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="w-14 h-14 rounded-xl bg-zinc-800 hover:bg-blue-500/20 border border-zinc-700 hover:border-blue-500/50 text-zinc-300 hover:text-blue-400 text-2xl font-bold transition-all duration-200 active:scale-95 cursor-pointer"
          >
            +
          </button>

          <button
            onClick={() =>
              value ? dispatch(incrementbyAmount(Number(value))) : null
            }
            className="w-14 h-14 rounded-xl bg-zinc-800 hover:bg-blue-500/20 border border-zinc-700 hover:border-blue-500/50 text-zinc-300 hover:text-blue-400 text-2xl font-bold transition-all duration-200 active:scale-95 cursor-pointer"
          >
            {value || "0"}
          </button>
        </div>

        {/* Reset */}
        <button
          onClick={() => {
            for (let i = 0; i < Math.abs(count); i++) {
              count > 0 ? dispatch(decrement()) : dispatch(increment());
            }
          }}
          className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer underline underline-offset-2"
        >
          Reset to 0
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-6 py-2 rounded-xl bg-zinc-800 hover:bg-blue-500/20 border border-zinc-700 hover:border-blue-500/50 text-zinc-300 hover:text-blue-400 text-2xl font-bold transition-all duration-200 active:scale-95 cursor-pointer"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default App;
