import { Box, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export function Log() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.password === data.password) {
                alert(userData.name + " You Are Successfully Logged In");
                navigate("/");
            } else {
                alert("Email or Password is incorrect");
            }
        } else {
            alert("Email or Password is incorrect");
        }
    };

    return (
        <div style={{ flexDirection: "column", margin: "30%", padding: '70px' }}>
            <h2 style={{ color: "rgb(32, 105, 189)" }}>LogIn Form</h2>
                <form className="App" onSubmit={handleSubmit(onSubmit)} style={{ width: "300px" }}>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Email"
                    />
                    {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}
                    <br /><br />

                    <input
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Password"
                    />
                    {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}
                    <br /><br />

                    <Button type="submit" variant="contained" >
                        Log In
                    </Button>

                    <br /><br />
                    <Link to="/register">Register</Link>
                </form>
        </div>
    );
}
