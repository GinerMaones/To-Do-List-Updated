import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './UserReducer';

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Convert ID based on userList's format
    const userId = users.some(user => typeof user.id === "string") ? String(id) : Number(id);

    // Find user (returns undefined if not found)
    const existingUser = users.find(user => user.id === userId);

    // State variables for form inputs
    const [unname, setName] = useState("");
    const [unemail, setEmail] = useState("");
    const [error, setError] = useState(false);

    // Populate state when component mounts
    useEffect(() => {
        if (existingUser) {
            setName(existingUser.name);
            setEmail(existingUser.email);
        } else {
            setError(true);
        }
    }, [existingUser]);

    const handleUpdate = (event) => {
        event.preventDefault();
        if (!unname.trim() || !unemail.trim()) return alert("Fields cannot be empty!");

        dispatch(updateUser({ id: userId, name: unname, email: unemail }));
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update User</h3>

                {error ? (
                    <h2 className="text-danger">User Not Found</h2>
                ) : (
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter Name"
                                value={unname}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={unemail}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <br />
                        <button className="btn btn-info">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Update;
