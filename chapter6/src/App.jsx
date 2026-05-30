import React from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const persons = [
    {
      id: 1,
      name: "Anasthesia",
      age: 20,
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "Polina",
      age: 19,
      url: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="app">
      <Card data={persons} status="follow" />
    </div>
  );
};

export default App;
