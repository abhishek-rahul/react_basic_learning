import React, { useState } from "react";

const seedTodos = [
  { id: 101, text: "Learn JSX basics", done: true },
  { id: 102, text: "Understand props & state", done: false },
  { id: 103, text: "Practice events & lists", done: false },
];

function App() {
  const [todos, setTodos] = useState(seedTodos);
  const [text, setText] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  // EVENTS: input change, form submit, button clicks
  function handleAdd(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    setTodos(function (prev) {
      return [...prev, { id: Date.now(), text: trimmed, done: false }];
    });

    setText("");
  }

  function toggleDone(id) {
    setTodos(function (prev) {
      return prev.map(function (t) {
        return t.id === id ? { ...t, done: !t.done } : t;
      });
    });
  }

  function removeTodo(id) {
    setTodos(function (prev) {
      return prev.filter(function (t) {
        return t.id !== id;
      });
    });
  }

  // CONDITIONAL RENDERING
  const visibleTodos = todos.filter(function (t) {
    return showCompleted ? true : !t.done;
  });

  return (
    <>
      {/* FRAGMENT: no extra div */}
      <h1>React Basics: Events, Lists, Keys & Fragments</h1>

      <form onSubmit={handleAdd} style={{ marginBottom: 12 }}>
        <input
          value={text}
          placeholder="Add a todo..."
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <label style={{ display: "block", marginBottom: 12 }}>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        Show completed items
      </label>

      {visibleTodos.length === 0 ? (
        <p style={{ opacity: 0.7 }}>Nothing to show. Add a task above ↑</p>
      ) : (
        <ul style={{ paddingLeft: 18 }}>
          {/* LISTS + KEYS */}
          {visibleTodos.map(function (todo) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleDone(todo.id)}
                onRemove={() => removeTodo(todo.id)}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

function TodoItem(props) {
  const todo = props.todo;
  const onToggle = props.onToggle;
  const onRemove = props.onRemove;

  return (
    <>
      <li style={{ marginBottom: 8 }}>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input type="checkbox" checked={todo.done} onChange={onToggle} />
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.text}
          </span>
          <button onClick={onRemove} aria-label="Remove">
            ✕
          </button>
        </label>
      </li>
    </>
  );
}

export default App;
