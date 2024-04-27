import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [message, setMessage] = useState("");

  function queryBackend() {
    fetch("http://localhost:3001/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message)).then(console.log(message))
  }

  return (
    <button onClick={queryBackend} className="border-solid border-2 border-sky-500">Save Changes</button>

  );
}

export default App;
