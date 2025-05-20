import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../redux/actions';
import '../css/styles.css';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleSave = () => {
        dispatch(editTask(task.id, editText));
        setIsEditing(false);
    };

    return (
        <li className="task-item">
            <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))} />
            {isEditing ? (
                <>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <button className="save-button" onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <span>{task.text}</span>
                    <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button className="delete-button" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
    );
};
export default TaskItem;