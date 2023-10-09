import { useContext, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Link } from "react-router-dom";



const Register = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError(" six characters & one letter and one number:");
      console.log("hello");
    } else {
      setError("");
      console.log("hello2");
      signUp(email, password).then((result) => console.log(result.user));
    }
  };
  return (
    <div>
         <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                    <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to="/Login">Login</Link></p>
                </div>
    
            </div>
  );
};

export default Register;
