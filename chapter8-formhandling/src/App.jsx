import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [formData, setformData] = useState(() => {
    const saved = localStorage.getItem("formData");
    return saved ? JSON.parse(saved) : [];
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const newArr = [...formData];
    newArr.push({ name, age });
    setformData(newArr);
    localStorage.setItem("formData", JSON.stringify(newArr));
    setName("");
    setAge("");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-neutral-700">
      <form
        onSubmit={submitHandler}
        className="w-60 h-60 bg-gray-500 rounded-md  flex flex-col items-center justify-center"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="text-white outline-none p-2 my-2  border-2 border-white rounded-md"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
          className="text-white outline-none p-2 my-2  border-2 border-white rounded-md"
        />
        <input
          type="submit"
          value="submit"
          className="p-2 my-2  py-2 active:scale-95 cursor-pointer text-center bg-blue-500 text-white rounded-md"
        />
      </form>
      {formData.length > 0 && (
        <div className="w-full max-w-md mt-8 px-4">
          <h2 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Submitted Entries
          </h2>
          <div className="flex flex-col gap-3">
            {formData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-5 py-3 rounded-xl border border-white/10 backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff",
                  }}
                >
                  {index + 1}
                </span>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">
                    {item.name}
                  </span>
                  <span className="text-white/50 text-xs">
                    Age: {item.age}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
