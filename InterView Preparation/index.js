// What is the difference between useState and useEffect in React?

import { useState, useEffect } from "react";

// function ExampleComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`; // Side effect
//   }, [count]); // Runs whenever count changes

//   return <button onClick={() => setCount(count + 1)}>Increment</button>;
// }

function fetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

const [data, setData] = useState(foodItems)

function filter (catagories) {
    if
}