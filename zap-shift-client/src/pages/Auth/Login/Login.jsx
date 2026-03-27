import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {console.log(result)
        reset()
        navigate(location?.state || '/')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="card w-full mx-auto max-w-sm shrink-0 space-y-4">
      <h3 className="text-3xl font-bold">Welcome Back</h3>
      <p className="font-semibold">Login with Zap Shift</p>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required.</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/,
            })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be minimum of 6 characters or more.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must have at least one uppercase, one lowercase, one
              number and one special character.
            </p>
          )}

          <div>
            <Link state={location.state} to='/forgot-password' className="link link-hover">Forgot password?</Link>
          </div>
          <button className="btn btn-neutral border-none my-4 bg-[#CAEB66] text-black">
            Login
          </button>
        </fieldset>
        <p>
          Don't have any account?{" "}
          <Link state={location.state} className="text-blue-500" to="/register">
            Register
          </Link>
        </p>
        <SocialLogin text={"Login"}></SocialLogin>
      </form>
    </div>
  );
};

export default Login;
