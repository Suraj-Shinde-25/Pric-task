'use client'
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import {  addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { collection } from "firebase/firestore";
// import Router, { withRouter } from 'next/router'
// import Link from "next/link";

export default function SighUp() {
    const router = useRouter();
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    

    const confirmUname = "suraj25";
    const confirmPass = "suraj25";

    const submitData = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log(uname, " ", pass);

        if (uname === confirmUname && pass === confirmPass) {
            alert('Login Successfull');
            router.push('/After');
            
        } else {
            alert("Invalid Password and username !!");
        }
    };
    return (
        <div className="flex justify-center w-screen h-screen p-10 flex-col items-center">
            <div className="flex flex-col w-96 h-96 bg-orange-400 p-10">
                <h3 className="text-3xl font-bold text-gray-950 mb-3 ">Login Form</h3>
                <form
                    className="flex flex-col"
                    onSubmit={submitData}
                >
                    <label>Username : </label>
                    <input
                        type="text"
                        name="uname"
                        value={uname}
                        required
                        className="w-full h-9 mt-3"
                        onChange={(e) => setUname(e.target.value)}
                        />
                    <br />
                    <label>Password : </label>
                    <input
                        type="password"
                        name="pass"
                        className="w-full h-9 mt-3"
                        onChange={(e) => setPass(e.target.value)}
                        required
                        />
                    <br />
                    <button
                        value={pass}
                        type="submit"
                        
                        className="p-2 bg-green-600 mt-3 text-white text-l font-semibold hover:bg-green-400 hover:text-black"
                    >Login
                    </button>
                </form>
            </div>
            <div>
            </div>
        </div>
    );
}
