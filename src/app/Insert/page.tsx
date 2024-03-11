"use client";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ChangeEvent, useState } from "react";

export default function Insert() {
  // const user = {
  //   name: "suraj shinde",
  //   mno: 22343432523,
  //   email: "pric@gmail.com",
  //   add: "wakad, pune",
  // };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [address, setAdresss] = useState("");

  const insertData = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    addDoc(collection(db, "users"), {
      name: name,
      email: email,
      mno: mob,
      add: address,
    })
      .then(() => {
        alert("Data Inserted 👍");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="flex flex- col w-1/3 h-auto p-10 m-10  bg-orange-400">
        <form onSubmit={insertData} className="flex flex-col">
        <h1 className="font-bold text-black text-3xl m-3 mb-5">Add New Users Data</h1>
          <div className="flex flex-col m-1 ml-3">
            <label className="text-xl">Name: </label>
            <input
              type="text"
              placeholder="Enter name"
              name={name}
              className="w-full h-9 mt-3 mb-3"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col m-1 ml-3">
            <label className="text-xl">Email: </label>
            <input
              type="email"
              placeholder="Enter email"
              name={email}
              className="w-full h-9 mt-3 mb-3"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col m-1 ml-3">
            <label className="text-xl">Mobile No: </label>
            <input
              type="number"
              placeholder="Enter mobile no"
              name={mob}
              className="w-full h-9 mt-3 mb-3"
              onChange={(e) => setMob(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col m-1 ml-3">
            <label className="text-xl">Address: </label>
            <input
              type="text"
              placeholder="Enter address"
              name={address}
              className="w-full h-9 mt-3 mb-3"
              onChange={(e) => setAdresss(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col m-1 ml-3">
            <button className="p-2 bg-green-600 mt-3 text-white text-l font-semibold hover:bg-green-400 hover:text-black" type="submit">
              Insert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
