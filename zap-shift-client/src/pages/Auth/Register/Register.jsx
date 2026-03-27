import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  const handleRegister = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        //1.store user image in form data
        const profileImage = data.photo[0];
        const formData = new FormData();
        formData.append('image', profileImage)
        //2. send the photo to store and get the url
        const image_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageHostKey}`

        axios.post(image_api_url, formData)
        .then(res => {
            console.log(res.data.data.url)
            //3. update user profile in firebase
            const userProfile = {
                displayName : data.name,
                photoURL : res.data.data.url
            }
            updateUserProfile(userProfile)
            .then(() => {
                console.log('update profile done')
                reset();
                navigate(location?.state || '/')
            })
            .catch(err => console.log(err))
        })
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="card w-full mx-auto max-w-sm shrink-0 space-y-4">
      <h3 className="text-3xl font-bold">Create an Account</h3>
      <p className="font-semibold">Register with Zap Shift</p>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo")}
            className="file-input w-full"
            placeholder="Your Photo"
          />
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input w-full"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}
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
          <button className="btn btn-neutral border-none my-4 bg-[#CAEB66] text-black">
            Login
          </button>
        </fieldset>
        <p>
          Already have an account?{" "}
          <Link state={location.state} className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
        <SocialLogin text={"Register"}></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
