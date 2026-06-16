import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  // LOAD SAFELY
  useEffect(() => {
    const saved = localStorage.getItem("tasks");

    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch (err) {
        setTasks([]);
      }
    }
  }, []);

  // SAVE
  const save = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  // CREATE / UPDATE
  const handleSaveTask = (task) => {
    let updated;

    if (task.id) {
      updated = tasks.map((t) => (t.id === task.id ? task : t));
    } else {
      updated = [...tasks, { ...task, id: Date.now().toString() }];
    }

    setTasks(updated);
    save(updated);
    setEditingTask(null);
  };

  // DELETE
  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    save(updated);
  };

  // FILTER + SEARCH
  const filtered = tasks
    .filter((t) => {
      if (filter === "ALL") return true;
      return t.status === filter;
    })
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    );

  // DUE DATE LOGIC (IMPORTANT FIX ADDED HERE)
  const getDueStatus = (dueDate) => {
    if (!dueDate) return null;

    const today = new Date();
    const due = new Date(dueDate);

    const diff = (due - today) / (1000 * 60 * 60 * 24);

    if (diff < 0) return "OVERDUE";
    if (diff <= 2) return "SOON";
    return "SAFE";
  };

  // STATS
  const stats = {
    total: tasks.length,
    todo: tasks.filter((t) => t.status === "TODO").length,
    inProgress: tasks.filter((t) => t.status === "IN_PROGRESS").length,
    done: tasks.filter((t) => t.status === "DONE").length,
  };

  return (
    <div className="dashboard">
      <Navbar />

      <div className="dashboard-container">

        <h2>Dashboard</h2>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{stats.total}</h3>
            <p>Total Tasks</p>
          </div>

          <div className="stat-card">
            <h3>{stats.todo}</h3>
            <p>To Do</p>
          </div>

          <div className="stat-card">
            <h3>{stats.inProgress}</h3>
            <p>In Progress</p>
          </div>

          <div className="stat-card">
            <h3>{stats.done}</h3>
            <p>Completed</p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="search-bar">
          <input
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FILTERS */}
        <div className="filter-bar">
          {["ALL", "TODO", "IN_PROGRESS", "DONE"].map((type) => (
            <button
              key={type}
              className={filter === type ? "active" : ""}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* FORM */}
        <TaskForm
          onSave={handleSaveTask}
          editingTask={editingTask}
        />

        {/* TASK GRID */}
        <div className="task-grid">
          {filtered.length === 0 ? (
            <p>No tasks found 🚀</p>
          ) : (
            filtered.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onUpdate={setEditingTask}
                getDueStatus={getDueStatus}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;