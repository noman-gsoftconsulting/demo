import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styles from '../styles/Home.module.scss'
function login() {
  const state = useSelector((state) => state.auth.isLoggedIn);
  console.log(state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <div>
        <h4 className={styles.title}>Log In</h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Entered email is not a valid email.",
              },
            })}
            type="email"
          />
          {errors.email && (
            <span role="alert" className="text-danger">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message:
                  "Password must have 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
              },
            })}
            type="password"
          />
          {errors.password && (
            <span role="alert">{errors.password.message}</span>
          )}
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default login;
