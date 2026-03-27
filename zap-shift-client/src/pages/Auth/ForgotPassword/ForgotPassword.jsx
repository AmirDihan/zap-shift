import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset} = useForm();
  const { getPasswordResetEmail } = useAuth()
  const handleForgotPassword = (data) => {
     getPasswordResetEmail(data.email)
     .then(() => {
        console.log('password reset email sent!')
        reset()
        navigate('/login')
     })
     .catch(err => console.log(err))
  }
  return (
    <div className="card w-full mx-auto max-w-sm shrink-0 space-y-4">
      <h3 className="text-3xl font-bold">Forgot Password</h3>
      <p className="font-semibold">
        Enter your email address and we'll send you a reset link.
      </p>
      <form onSubmit={handleSubmit(handleForgotPassword)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          <button className="btn btn-neutral border-none my-4 bg-[#CAEB66] text-black">
            Send
          </button>
          <p>
            Remember your password?{" "}
            <Link state={location.state} className="text-blue-500" to="/login">
              Login
            </Link>{" "}
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgotPassword;
