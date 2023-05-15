import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let intervalId;
    if (time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setShowModal(true);
    }
    return () => clearInterval(intervalId);
  }, [time]);

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-lg font-medium text-gray-900 dark:text-white">
          Timer app!!!
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTime(parseInt(e.target.value))}
            type="text"
            placeholder="Enter your number"
            className="px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-2"
          />
        </form>

        <h1 className="text-lg font-medium text-gray-900 dark:text-white">
          {time === "" ? null : `${time} of min`}
        </h1>
      </div>
      {showModal && (
        <>
          <div className="opacity-50 fixed inset-0 z-50 bg-black"></div>
          <div className="fixed z-50 top-0 right-0 bottom-0 left-0 flex items-center justify-center">
            <div className="bg-white w-80 p-4 rounded-lg">
              <h2 className="text-xl font-medium mb-4">Time's up!</h2>
              <button
                className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
