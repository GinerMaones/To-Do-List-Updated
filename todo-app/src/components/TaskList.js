import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleTask, editTask } from "../redux/taskSlice";

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state);
    
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleEditClick = (task) => {
        setEditingId(task.id);
        setEditText(task.title);
    };

    const handleSaveEdit = (id) => {
        dispatch(editTask({ id, newTitle: editText }));
        setEditingId(null);
    };

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <li key={task.id} className="task-item">
                    <input 
                        type="checkbox" 
                        checked={task.completed} 
                        onChange={() => dispatch(toggleTask(task.id))} 
                        className="task-checkbox"
                    />

                    {editingId === task.id ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="edit-input"
                        />
                    ) : (
                        <span className={`task-title ${task.completed ? "completed" : ""}`}>
                            {task.title}
                        </span>
                    )}

                    <div className="task-buttons">
                        {editingId === task.id ? (
                            <button className="save-btn" onClick={() => handleSaveEdit(task.id)}>Save</button>
                        ) : (
                            <button className="edit-btn" onClick={() => handleEditClick(task)}>Edit</button>
                        )}
                        <button className="remove-btn" onClick={() => dispatch(removeTask(task.id))}>Remove</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
