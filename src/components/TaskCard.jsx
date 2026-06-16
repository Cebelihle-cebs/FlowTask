function TaskCard({ task, onDelete, onUpdate, getDueStatus }) {
  const status = getDueStatus(task.dueDate);

  const getStatusColor = (status) => {
    switch (status) {
      case "DONE":
        return "#2ecc71";
      case "IN_PROGRESS":
        return "#f39c12";
      default:
        return "#3498db";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "HIGH":
        return "#e74c3c";
      case "MEDIUM":
        return "#f39c12";
      default:
        return "#2ecc71";
    }
  };

  return (
    <div className="task-card">

      <div className="task-header">
        <h4>{task.title}</h4>

        <div className="badges">
          <span
            className="badge"
            style={{ background: getStatusColor(task.status) }}
          >
            {task.status}
          </span>

          <span
            className="badge"
            style={{ background: getPriorityColor(task.priority) }}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <p className="desc">{task.description}</p>

      {/* DUE DATE WARNING SYSTEM */}
      {status === "OVERDUE" && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          ⚠ Overdue Task
        </p>
      )}

      {status === "SOON" && (
        <p style={{ color: "orange", fontWeight: "bold" }}>
          ⏰ Due Soon (within 2 days)
        </p>
      )}

      {task.dueDate && (
        <p className="due">
          📅 Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      <div className="actions">
        <button onClick={() => onUpdate(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>

    </div>
  );
}

export default TaskCard;