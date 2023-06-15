import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { saveUser } from "../api/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Add watch to get the value of confirm password field
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const password = watch("password", ""); // Get the value of the password field
  const confirmPasswordErrorMessage = "Passwords do not match"; // Error message for confirm password validation

  const validateConfirmPassword = (value) => {
    if (value === password) {
      return true;
    }
    return confirmPasswordErrorMessage;
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          saveUser(result.user);
          navigate(from, { replace: true });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen my-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">
            Sign Up to create your account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                placeholder="Name"
                className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>

            <div>
              <label htmlFor="photoURL" className="text-sm mb-2">
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>

            <div>
              <label htmlFor="password" className="text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase letter, one lowercase letter,
                  one number, and one special character.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="confirm" className="text-sm mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm"
                {...register("confirm", {
                  required: true,
                  validate: validateConfirmPassword,
                })}
                placeholder="Confirm Password"
                className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.confirm && (
                <p className="text-red-600">{errors.confirm.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-rose-600"
          >
            Continue
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-rose-500 hover:text-rose-700">
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
