import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskInput = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleAddTask = () => {
        if (!isValidEmail(input)) {
            setError("Please enter email address only!");
            return;
        }

        dispatch(addTask(input));
        setInput("");
        setError("");
    };

    return (
        <div className="task-input">
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter to add task"
                className={error ? "error" : ""}
            />
            <button onClick={handleAddTask}>Add Task</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default TaskInput;

