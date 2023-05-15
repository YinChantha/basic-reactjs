import { useState } from "react";
function App() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const operationCalculation = (e) => {
    setOperation(operation.concat(e.target.name));
  };
  const resetResult = () => {
    setOperation("");
    setResult("");
  };
  const results = () => {
    try {
      setResult(eval(operation).toString());
    } catch {
      setResult("Error");
    }
  };
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div>
          <h1 className="text-red-500 text-4xl text-bold mb-4 text-center">
            Calculator app!!!
          </h1>
        </div>
        <div className="bg-gray-300 rounded-lg shadow-md px-24 py-24 border border-gray-500">
          <div className="flex flex-col border border-gray-600 rounded-sm w-80 ">
            <input
              className="text-gray-700 text-3xl focus:outline-none p-2"
              readOnly
              value={operation || 0}
            />
            <input
              className="text-or-700 text-3xl focus:outline-none p-2"
              readOnly
              value={result || ""}
            />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="1"
            >
              1
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="2"
            >
              2
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="3"
            >
              3
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="4"
            >
              4
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="5"
            >
              5
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="6"
            >
              6
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="7"
            >
              7
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="8"
            >
              8
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="9"
            >
              9
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="."
            >
              .
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="("
            >
              (
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name=")"
            >
              )
            </button>

            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="+"
            >
              +
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="-"
            >
              -
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="*"
            >
              x
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="/"
            >
              /
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={operationCalculation}
              name="%"
            >
              %
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={results}
            >
              =
            </button>
            <button
              className="btn border border-gray-100 shadow-md px-2 py-2 hover:border-gray-300"
              onClick={resetResult}
            >
              AC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
