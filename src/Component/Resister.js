import { GoogleAuthProvider, } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Resister = () => {
  const { createUserByEmail, userSignInwithProvider, profileupdate } = useContext(AuthContext)
  const [error, setError] = useState(undefined)
  const [accepted, setAccepted] =useState()

  const googleProvider = new GoogleAuthProvider()


  const handelResister = (e) => {
      e.preventDefault()
      const form = e.target
      const name = form.name.value
      const photoURL = form.url.value
      const email = form.email.value
      const password = form.password.value
      const confirmPass = form.confirm.value

      if (!/(?=.*\d)/.test(password)) {
          setError('Password contain at least one digit')
          return
      }
      if (!/(?=.*[a-z])/.test(password)) {
          setError('Password contain at least one lower case')
          return
      }
      if (!/(?=.*[A-Z])/.test(password)) {
          setError('Password contain at least one upper case')
          return
      }
      if (!/(?=.*[!#$%@&*?"])/.test(password)) {
          setError('Password contain at least one Special characters')
          return
      }

      if (password === confirmPass) {
          createUserByEmail(email, password)
              .then(result => {
                  const user = result.user
                  setError('')
                  console.log(user);
                  form.reset()
                  updateUserInfo (name,photoURL)


              })
              .catch(e => {
                  setError(e.message)
                  console.error(e);
              })
      }
      else {
          setError('Password should be match')
      }


      console.log(name, photoURL, email, password, confirmPass);
  }

  const hendelGoogleSignIn = () => {
      userSignInwithProvider(googleProvider)
          .then(result => {
              const user = result.user
              setError('')
              console.log(user);
          })
          .catch(e => {
              setError(e.message)
              console.error(e);
          })
  }
   

  const updateUserInfo = (name, photoURL)=>{
      const profile = { displayName: name, photoURL: photoURL }
      profileupdate(profile)
              .then(() => console.log("profile Update"))
              .catch(e => console.error(e))
  }

  const handelAccepted=(e)=>{
      setAccepted(e.target.checked);
  }

    return (
        <div className="w-full m-auto max-w-xl my-8 xl:px-8 xl:w-5/12">
      <div className="bg-neutral rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
           Resister
        </h3>
        <form onSubmit={handelResister}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" name='url' placeholder="Photo Url" className="input input-bordered" required />
                                </div>
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
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirm' placeholder="Confirm password" className="input input-bordered" required />


                                    {
                                        error ? <span className="label-text text-red-500">{error}</span> : ''
                                    }

                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Accept Tarms and Coudition</span>
                                        <input onClick={handelAccepted} type="checkbox"  className="checkbox checkbox-secondary" />
                                    </label>
                                </div>
                                 
                                <label className="label">
                                    <span className='label-text'>Have Already Account? <Link to="../login" className="label-text-alt link link-hover"> Sign In</Link></span>

                                </label>
                                <div className="form-control btn btn-primary mt-6">
                                    <button type='submit' disabled={!accepted} className=" ">Resister</button>
                                </div>

                            </div>
                        </form>
                        <div className='mx-6 my-4'>
                            <button onClick={hendelGoogleSignIn} className="btn w-full btn-outline btn-light" type="submit"><FcGoogle className='mx-2 text-2xl'></FcGoogle> Login With Google</button>
                        </div>           
      </div>
    </div>
    );
};

export default Resister;