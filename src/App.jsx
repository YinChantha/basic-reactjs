import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [state, setState] = useState(
    parseInt(localStorage.getItem("score")) || 0
  );
  useEffect(() => {
    localStorage.setItem("score", state);
  }, [state]);
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-gray-500 text-center font-bold text-lg">
          The purpose for this app is to understand how the useState work !!!{" "}
          <br></br> with the localStorage technique once you refresh the page it
          doesn't disappear
        </h1>
        <h1 className="text-red-500 text-center font-bold text-4xl ">
          Score : {state}
        </h1>
        <div className="flex gap-2 justify-center mt-6">
          <button
            onClick={() => setState((n) => n + 1)}
            className="text-white focus:outline-none bg-blue-500 hover:bg-blue-700 px-3 py-3 rounded-md"
          >
            Increment
          </button>
          <button
            onClick={() => setState((n) => n - 1)}
            className="text-white focus:outline-none bg-red-500 hover:bg-red-700 px-3 py-3 rounded-md"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
