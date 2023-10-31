import React from 'react';
import '../App.css';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";



function SingIn() {
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    navigate("/");
  };
}

export default SingIn;
