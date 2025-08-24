import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [seed, setSeed] = useState(1);

    const onSubmit = (data) => {
        const existingUser = JSON.parse(localStorage.getItem(data.email));
        setSeed(Math.random());
        if (existingUser) {
            console.log("Email is already registered!");
            alert("Email is already registered!");
            window.location.reload();
        } else {
            const userData = {
                name: data.name,
                email: data.email,
                password: data.password,
            };
            localStorage.setItem(data.email, JSON.stringify(userData));
            console.log(data.name + " has been successfully registered");
            alert(data.name + " has been successfully registered");
            window.location.reload();

        }
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", width: "70%", padding:"20%" }}>
                <h2 style={{ color: "rgb(32, 105, 189)" }}>Registration Form</h2><br />

                <form className="App" onSubmit={handleSubmit(onSubmit)} >
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Name"
                    />
                    {errors.name && <span style={{ color: "red" }}>*Name* is mandatory</span>}
                    <br />
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Email"
                    />
                    {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}
                    <br />
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Password"
                    />
                    {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}
                    <br />
                    <Button onClick={handleSubmit(onSubmit)} variant="contained" style={{ height: "15%" }}>Register</Button>
                    <br /><Link to={"/login"}>LogIn</Link>
                    <br /><Link to={"/contact"}>Back</Link>
                </form>
            </div>
        </>
    );
}
