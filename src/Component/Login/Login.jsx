import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const prevLocation = useLocation();
  const from = location.state?.from?.pathname || "/";

  // eslint-disable-next-line no-unused-vars
  const { googleSignIn, logUser, signIn } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => console.log(result.logUser));
  };
  const handleLogin = () => {
    if ((email, password)) {
      signIn(email, password)
        .then((result) => {
          console.log(prevLocation);
          console.log(location);
          console.log(navigate);
          navigate(from, { replace: true });
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err);
        });
    } else {
      setError("email or password can not be empty ");
    }
  };
  return (
    <div>
         <div>
                    <h2 className="text-3xl my-10 text-center">Please Login</h2>
                    <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                        <p>{error}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" required name="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" required name="password" placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="btn btn-Secondary">
                        <button onClick={handleGoogleLogin} className="google-btn ">
                        Google Login
                        </button>
                    </div>
                    </form>
                    <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
                </div>
    
            </div>
        );
    };
export default Login;
