import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/slices/todosAPI";

const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nexTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) {
    } else {
      setTodoId(todoId - 1);
    }
  };

  return (
    <div>
      <h1>Todo -RTK QUERY</h1>
      <hr />
      <h4>Is Loading... {!isLoading ? "True" : "False"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <ul>
        {/* {todos.map((todo) => (
          <li key={todo.id}>
            <strong> {todo.completed ? "DONE" : "PENDING"}</strong>
            {todo.title}
          </li>
        ))} */}
      </ul>
      <button onClick={nexTodo}>Next Todo</button>
      <button onClick={prevTodo}>Prev Todo</button>
    </div>
  );
};

export default TodoApp;
