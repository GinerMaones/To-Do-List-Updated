import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser} from './UserReducer';


function Home(){
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) =>{
        dispatch(deleteUser({id: id}))


    }
    
    return(
        <div className="container mt-4">
        <div className="card shadow-lg border-0 rounded">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h4 className="mb-0">To-Do List</h4>
                <Link to="/create" className="btn btn-success">
                    <i className="fas fa-plus"></i> Add new User
                </Link>
            </div>
            <div className="card-body p-4">
                <table className="table table-hover table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="text-center">
                                    <Link to={`/edit/${user.id}`} className="btn btn-sm btn-warning me-2">
                                        <i className="fas fa-edit"></i> Edit
                                    </Link>
                                    <button 
                                        onClick={() => handleDelete(user.id)} 
                                        className="btn btn-sm btn-danger"
                                    >
                                        <i className="fas fa-trash-alt"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Home;