import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function EditUser() {


    const [user, setUser] = useState({
        name: "",
        username: "",
        mail: ""
    })
    const { id } = useParams();

    useEffect(() => {
        loadUser()
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`https://crud-using-spring-boot-reactjs.up.railway.app/user/${id}`)
        setUser(result.data)
    }


    return (
        <div>
            <div className="container">
                <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow">
                    <h2 className='text-center m-4'>User Details</h2>
                    <div className='card'>
                        <div className='card-header'>
                            Details of User ID: {user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Name: </b>
                                    {user.name}
                                </li>
                                <li className='list-group-item'>
                                    <b>User Name: </b>{user.username}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email: </b>{user.mail}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
                </div>
            </div>
        </div>
    )
}

