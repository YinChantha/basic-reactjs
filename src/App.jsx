import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmpasswrod] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const checkerror = () => {
    const list = [];
    if (!password || !email || !confirmpassword) {
      list.push("All input must be not empty");
    }
    if ([...email].filter((i) => i === "@").length !== 1) {
      list.push("An email should contain only one @ sign");
    }
    if (password.length <= 6) {
      list.push("Password should be more than 6 or longer");
    }
    if (password !== confirmpassword) {
      list.push("Passowrd and Confirmpassowrd must be same ");
    }
    return list;
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const mistake = checkerror();
    setMessage(mistake.length ? mistake.join(",") : "USER created");
    setShowModal(true);
  };
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto">
        <h1 className="text-center animate-bounce font-bold text-4xl text-purple-500">
          Form Validation 😍
        </h1>
        <form className="bg-blue-300 shadow-md rounded-md px-36 py-36">
          <div>
            <label className="text-2xl text-gray-700">Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="shadow rounded-sm text-gray-800 px-2 py-2 w-full focus:outline-none my-2"
            />
          </div>
          <div>
            <label className="text-2xl text-gray-700">password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="shadow rounded-sm text-gray-800 px-2 py-2 w-full focus:outline-none my-2"
            />
          </div>
          <div>
            <label className="text-2xl text-gray-700">confirm passwrod</label>
            <input
              type="password"
              onChange={(e) => setConfirmpasswrod(e.target.value)}
              placeholder="Confirmt your password"
              className="shadow rounded-sm text-gray-800 px-2 py-2 w-full focus:outline-none my-2"
            />
          </div>
          <div>
            <button
              onClick={handlesubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-3 rounded-md mt-6"
            >
              Sign Up
            </button>
          </div>
          {showModal && (
            <>
              <div className="opacity-50 fixed inset-0 z-50 bg-black"></div>
              <div className="fixed z-50 top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                <div className="bg-white w-96 p-4 rounded-lg ">
                  <h1 className="text-center font-bold text-purple-500 text-2xl">
                    {message} 😊
                  </h1>
                  <button
                    className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 mt-6"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
