import { useEffect, useState } from "react";

function App() {
  // this block we set the state to get darkmode to true
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") === "true"
  );

  // this the function we create in order to call it at button once we click
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkmode", !darkMode);
  };
  useEffect(() => {
    // this bellow line of code is to add class dark to the root element of html once you the darKmode is set to True >>>>>> "We can view in the browser by going through inspect and navigate to Element "
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <div
      className={`flex h-screen bg-no-repeat bg-center bg-cover ${
        darkMode
          ? "bg-[url('assets/dark.jpg')]"
          : "bg-[url('assets/light.jpg')]"
      }`}
    >
      <div className="m-auto">
        <label className="switch relative block w-[4rem] h-9">
          <input
            type="checkbox"
            className="theme-toggle-btn hidden peer checked:bg-black"
            onChange={toggleDarkMode}
            // this chekced property we apply for set the button button dark and ligh based so that when we refresh the page it's not going throuh Element once we inspect
            checked={darkMode}
          />
          <span
            className={`bg-gray-100 shadow-inner peer-checked:bg-gray-900 peer-checked:before:translate-x-full transition-all absolute inset-0 cursor-pointer rounded-full before:shadow-sm before:shadow-gray-800 before:content-['☀'] before:flex before:justify-center before:items-center before:absolute before:h-7 before:w-7 before:bg-white dark:bg-gray-800 before:rounded-full before:inset-1 peer-checked:before:bg-white dark:peer-checked:before:bg-gray-800 peer-checked:before:content-['🌙'] before:transition-all`}
          ></span>
        </label>
      </div>
    </div>
  );
}

export default App;
