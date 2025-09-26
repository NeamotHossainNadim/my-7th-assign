import React from "react";

const TaskStatus = ({ tasks = [], resolved = [], onComplete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Task Status</h2>

      
      <div>
        <h3 className="font-medium mb-2">In Progress</h3>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center border rounded p-2 mb-2"
            >
              <span>{task.title}</span>
              <button
                onClick={() => onComplete(task)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Complete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No tasks in progress.</p>
        )}
      </div>

      
      <div className="mt-4">
        <h3 className="font-medium mb-2">Resolved</h3>
        {resolved.length > 0 ? (
          resolved.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center border rounded p-2 mb-2 bg-gray-100"
            >
              <span>{task.title}</span>
              <span className="text-green-600 font-semibold">✔</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
    