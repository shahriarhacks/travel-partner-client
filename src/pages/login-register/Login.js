import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../../assets/Animation/login.json";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        toast.success("Login Successfully Done");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setError("");
        navigate(from, { replace: true });
        toast.success("Successfully Login Done");
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="flex justify-center lg:flex-row flex-col-reverse my-10">
      <div className="w-full lg:w-1/2">
        <Lottie animationData={login} loop={true} />
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl text-gray-900 bg-gray-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <p className="text-center text-orange-800">{error}</p>
        <form
          onSubmit={handleLogin}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-amber-200  focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700  bg-amber-200 focus:border-violet-400"
            />
            <div className="flex justify-end text-xs text-gray-400">
              <Link to="./">Forgot Password?</Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm btn-primary hover:rounded-full">
            Login
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleLogin}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400 hover:rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Don't have an account?
          <Link to="/register" className="underline text-orange-700">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
