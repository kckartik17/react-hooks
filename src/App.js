import { useState } from "react";
import { useFetch } from "./useFetch";

const App = () => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  return (
    <div>
      <div>{loading ? "loading" : data}</div>
      <div>Count : {count}</div>
      <button onClick={() => setCount((current) => setCount(current + 1))}>
        +
      </button>
    </div>
  );
};

export default App;
