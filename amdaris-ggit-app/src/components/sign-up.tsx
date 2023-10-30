import React from 'react';
import '../App.css';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  age: number;
}

function SignUp() {
  const { handleSubmit, control, formState } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Signed up successfully");
    toast.error("Error");
    navigate("/");
  };

  const validationRules = {
    firstName: { required: "First name is required" },
    lastName: { required: "Last name is required" },
    email: {
      required: "Email is required",
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: { required: "Password is required" },
    confirmPassword: {
      required: "Please confirm your password",
      validate: (value: string, values: { password: string }) =>
        value === values.password || "Passwords does not match",
    },
    gender: { required: "Please select a gender" },
    age: {
      required: "Age is required",
      min: {
        value: 5,
        message: "You must be at least 5 years old.",
      },
    },
  };

  return (
    <div className="form-container">
      <form className="centred-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={validationRules.firstName}
            render={({ field }) => <input {...field} />}
          />
          {formState.errors.firstName && (
            <p className="error">{formState.errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>Last Name</label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={validationRules.lastName}
            render={({ field }) => <input {...field} />}
          />
          {formState.errors.lastName && (
            <p className="error">{formState.errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={validationRules.email}
            render={({ field }) => <input {...field} />}
          />
          {formState.errors.email && (
            <p className="error">{formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={validationRules.password}
            render={({ field }) => <input type="password" {...field} />}
          />
          {formState.errors.password && (
            <p className="error">{formState.errors.password.message}</p>
          )}
        </div>

        <div>
          <label>Confirm Password</label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={validationRules.confirmPassword}
            render={({ field }) => <input type="password" {...field} />}
          />
          {formState.errors.confirmPassword && (
            <p className="error">{formState.errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="flex-container">
          <div>
            <label>Gender</label>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              rules={validationRules.gender}
              render={({ field }) => (
                <div className="select-container">
                  <select {...field} className="custom-select">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {formState.errors.gender && (
                    <p className="error">{formState.errors.gender.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <label>Age</label>
            <Controller
              name="age"
              control={control}
              defaultValue={0}
              rules={validationRules.age}
              render={({ field }) => (
                <div>
                  <input type="number" {...field} />
                  {formState.errors.age && (
                    <p className="error">{formState.errors.age.message}</p>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;