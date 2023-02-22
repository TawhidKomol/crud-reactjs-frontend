import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let navigate = useNavigate();
    const { id } = useParams();


    const [user, setUser] = useState({
        name: "",
        username: "",
        mail: ""
    })
    const { name, username, mail } = user


    const onInputChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser()
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://crud-using-spring-boot-reactjs.up.railway.app/user/${id}`, user)
        navigate("/");

    };

    const loadUser = async () => {
        const result = await axios.get(`https://crud-using-spring-boot-reactjs.up.railway.app/user/${id}`)
        setUser(result.data)
    }




    return (
        <div className="container">
            <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Edit User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor='Name' className='form-label'>
                            Name
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter Your Name'
                            name='name'
                            value={name}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='Username' className='form-label'>
                            User Name
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter Your User Name'
                            name='username'
                            value={username}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='mail' className='form-label'>
                            Email
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter Your Email'
                            name='mail'
                            value={mail}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>

                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    )
}
