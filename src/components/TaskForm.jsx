import { useEffect, useState } from "react";

function TaskForm({ onSave, editingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("TODO");
  const [priority, setPriority] = useState("MEDIUM");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDescription(editingTask.description || "");
      setStatus(editingTask.status || "TODO");
      setPriority(editingTask.priority || "MEDIUM");
      setDueDate(editingTask.dueDate || "");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    onSave({
      id: editingTask?.id,
      title,
      description,
      status,
      priority,
      dueDate,
    });

    setTitle("");
    setDescription("");
    setStatus("TODO");
    setPriority("MEDIUM");
    setDueDate("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h3>{editingTask ? "Edit Task" : "Create Task"}</h3>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="row">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="TODO">To Do</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;