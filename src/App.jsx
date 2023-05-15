import { useEffect, useState } from "react";

function App() {
  const [Dog, setDog] = useState("");
  const Getdog = async () => {
    const dogdata = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await dogdata.json();
    return dog.message;
  };
  const BtnchangeDog = async () => {
    setDog(await Getdog());
  };
  useEffect(() => {
    Getdog().then((Dog) => setDog(Dog));
  }, []);
  return (
    <div className="flex h-screen">
      <div className="absolute inset-0 z-0">
        <img src={Dog} className="w-full h-full" />
        <div className="bg-black inset-0 opacity-80 absolute"></div>
      </div>
      <div className="m-auto z-10">
        <div className="flex gap-5">
          <h1 className="text-green-500 font-semibold animate-pulse">
            Click 👉 to change dog{" "}
          </h1>
          <button
            onClick={BtnchangeDog}
            className="border rounded-md w-10 h-10"
          >
            🐕
          </button>
        </div>
        <div className="w-60 h-60 mt-3">
          <img src={Dog} />
        </div>
      </div>
    </div>
  );
}

export default App;
