import "./App.css";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncrementNum from "./components/incrementNum";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
            <Route path="/incremente" element={<IncrementNum />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
