import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.length < 1) return;

    setTodos([...todos, inputValue]);

    setInputValue("");
  };

  const removeTodo = (index) => {
    const name = todos[index];
    const filtered = todos.filter((todo) => todo !== name);
    setTodos(filtered);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input
        value={inputValue}
        onChange={handleChange}
        placeholder="დასამატებელი ტექსტი"
      />
      <button onClick={addTodo}>დამატება</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>წაშლა</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
