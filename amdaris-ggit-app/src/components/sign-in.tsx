import React from 'react';
import '../App.css';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface FormData {
  email: string;
  password: string;
}

function SignIn() {
  const { handleSubmit, control, formState } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Signed in successfully",{
      position: 'top-right',
      autoClose: 3000, 
    });
    toast.error("Error", {
      position: 'top-right',
      autoClose: 3000, // 3 seconds
    });
    navigate("/");
  };

  const validationRules = {
    email: {
      required: "Email is required",
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: { required: "Password is required" },
  };

  return (
    <div className="form-container">
      <form className="centred-form" onSubmit={handleSubmit(onSubmit)}>
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

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
