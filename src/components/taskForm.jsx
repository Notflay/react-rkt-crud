import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [label, setLabel] = useState("");

  const dispatch = useDispatch();

  const handlechange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
    setLabel(e.target.value);
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(task));
    } else {
      console.log(task);
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <h1>Hello World</h1>
      <label htmlFor="title" className="block text-sm font-bold mb-2">
        Task:
      </label>
      <input
        name="title"
        type={"text"}
        placeholder="title"
        onChange={handlechange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-sm font-bold mb-2">
        Description:{" "}
      </label>
      <textarea
        name="description"
        placeholder="description"
        onChange={handlechange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>

      <button className="bg-indigo-600 px-2 py-1">Guardar</button>
      <p>{label}</p>
    </form>
  );
};

export default TaskForm;
