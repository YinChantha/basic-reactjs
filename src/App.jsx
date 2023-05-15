import { useEffect, useState } from "react";

function App() {
  // this state is to set the task or item your will be add
  const [todos, setTodos] = useState(
   JSON.parse(localStorage.getItem("todo")) || []
  );
  
  // this state is to set the state for handle your input
  const [inputValue, setInputValue] = useState("");
  // this state is to set the task or item your will update based on the id
  const [updatetodo, setUpdatetodo] = useState(null);
  // this state is to set for tracking the task or item is it have in you task have been add or not if no will update your task to the list
  const [editingValue, setEditingValue] = useState("");

  const handleValueinput = (e) => {
    if (updatetodo) {
      setEditingValue(e.target.value);
    } else {
      setInputValue(e.target.value);
    }
  };

  const handleAddtodo = () => {
    console.log("Add already in list!!!!");
    if (inputValue.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputValue.trim() }]);
      setInputValue("");
    }
  };

  const handleUpdatetodo = (id) => {
    setUpdatetodo(id);
    setEditingValue(todos.find((item) => item.id === id).text);
  };

  const handleSavetodo = (id) => {
    const newTodo = todos.map((item) => {
      if (item.id === id) {
        return { ...item, text: editingValue.trim() };
      } else {
        return item;
      }
    });
    setTodos(newTodo);
    setUpdatetodo(null);
    setEditingValue("");
  };

  const handleDeletetodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="w-96">
          <h1 className="text-4xl  text-amber-500 animate-pulse">
            Todo list app
          </h1>
          <input
            value={updatetodo ? editingValue : inputValue}
            onChange={handleValueinput}
            type="text"
            placeholder="Input your text here"
            className="py-3 px-1 w-full border border-gray-400 rounded-md mt-3 shadow-md"
          />
          <button
            onClick={
              updatetodo ? () => handleSavetodo(updatetodo) : handleAddtodo
            }
            className="bg-blue-400 text-white py-3 px-3 shadow-sm rounded-md hover:bg-blue-700 mt-3"
          >
            {editingValue ? "Save" : "Add"}
          </button>
        </div>
        <ul>
          {todos.map((item) => (
            <div
              key={item.id}
              className="flex bg-yellow-200 items-center justify-between outline outline-1 outline-gray-400 rounded-md mt-2"
            >
              <li className="text-2xl p-1">
                {editingValue === item.id ? (
                  <input
                    type="text"
                    value={editingValue}
                    onChange={handleValueinput}
                    placeholder="Input your text here"
                    className="py-3 px-1 w-full border border-gray-400 rounded-md mt-3 shadow-md"
                  />
                ) : (
                  item.text
                )}
              </li>
              <div className="flex gap-2 p-1">
                <button
                  className="bg-blue-400 text-white py-1 px-1 shadow-sm rounded-md hover:bg-blue-700 "
                  onClick={() => handleUpdatetodo(item.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-400 text-white py-1 px-1 shadow-sm rounded-md hover:bg-red-700 "
                  onClick={() => handleDeletetodo(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
