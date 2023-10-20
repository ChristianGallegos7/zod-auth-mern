import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <h1>React mysql</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/register">register</Link>
                </li>
                <li>
                    <Link to="/tasks">tasks</Link>
                </li>
                <li>
                    <Link to="/tasks/:id">Home</Link>
                </li>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
                <li>
                    <Link to="/add-tasks">Create Task</Link>
                </li>
            </ul>
        </>
    )
}
