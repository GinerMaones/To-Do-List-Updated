import React, { useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addUser} from '../Application/UserReducer'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
dispatch(addUser({ id: maxId + 1, name, email }));

        navigate('/')
    }


    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border rounded shadow bg-secondary text-white p-4">
            <h3 className="text-center mb-4">Add New User</h3>
            <form onSubmit={(e) => handleSubmit(e, name, email)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control rounded" 
                        placeholder="Enter Name"
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control rounded" 
                        placeholder="Enter Email"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-info px-4">
                        <i className="fas fa-check"></i> Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Create