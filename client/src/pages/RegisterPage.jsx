import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated]);


    // console.log(user);
    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return (
        <div className="container">
            <h2 className="mt-5">Registro</h2>
            {
                registerErrors.map((error, i) => (

                    <div key={i} className='alert alert-danger'>
                        {error}
                    </div>
                ))
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input
                        type="text"
                        {...register('username', { required: true })}
                        className="form-control"
                        placeholder="Username"
                    />
                    {errors.username && <p className="text-danger">Username is required</p>}
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="form-control"
                        placeholder="Email"
                    />
                    {errors.email && <p className="text-danger">Email is required</p>}
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        {...register('password', { required: true })}
                        className="form-control"
                        placeholder="Password"
                    />
                    {errors.password && <p className="text-danger">Password is required</p>}
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}
