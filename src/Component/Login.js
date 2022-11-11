import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { userSignInwithProvider,signInWithEmail } = useContext(AuthContext)
    const [error, setError] = useState(undefined)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider()

    const hendelGoogleSignIn = () => {
        userSignInwithProvider(googleProvider)
            .then(result => {
                const user = result.user
                setError('')
                console.log(user);
                navigate(from,{replace:true})
                
            })
            .catch(e => {
                setError(e.message)
                console.error(e);
            })
    }
     

    const handelLoginWithPasswaord = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signInWithEmail(email,password)
        .then(result => {
            const user = result.user
            setError('')
            console.log(user);
            form.reset()
            navigate(from,{replace:true})
        })
        .catch(e => {
            setError(e.message)
            console.error(e);
        })

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col bg-neutral">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Welcome To Login !!!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  ">
                    <form onSubmit={handelLoginWithPasswaord}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>

                                {
                                    error ? <span className="label-text text-red-500">{error}</span> : ''
                                }

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>

                            <label className="label">
                                <span className='label-text'>Have Not Account? <Link to="../resister" className="label-text-alt link link-hover"> Resister</Link></span>

                            </label>



                        </div>
                    </form>
                    <div className='mx-6 my-4 '>
                        <button onClick={hendelGoogleSignIn} className="btn w-full btn-outline btn-light" type="submit"><FcGoogle className='mx-2 text-2xl'></FcGoogle> Login With Google</button>
                    </div>
                     
                </div>
            </div>
        </div>
    )
};

export default Login;