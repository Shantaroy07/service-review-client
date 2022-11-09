import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const Login = () => {

    const { login, setLoading, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';




    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = (result.user);
                if (user?.email) {
                    navigate(from, { replace: true });
                }
            })

            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
            })

    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user?.email) {
                    navigate(from, { replace: true });
                }
                else {
                    console.error('Your email is not valid. Please enter a valid  email address.')
                }
            })
            .catch(error => console.error(error))
    }


    return (
        <div>

            <div>
                <div className="mt-6 text-center ">
                    <button onClick={handleGoogleSignIn} className="p-5 rounded-3 bg-orange-200 font-semibold">  LogIn with Google</button>
                </div>
            </div>
            <div className="hero w-full my-20">


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>Have No Account?Please <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>

            </div>
        </div>

    );
};

export default Login;