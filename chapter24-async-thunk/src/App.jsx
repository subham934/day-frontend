import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./redux/slice/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  console.log(data);

  return (
    <div>
      <button onClick={() => dispatch(fetchData())}>Get Data</button>
      <div>
        {data ? data.map((item) => <h1 key={item.id}>{item.title}</h1>) : null}
      </div>
    </div>
  );
};

export default App;
