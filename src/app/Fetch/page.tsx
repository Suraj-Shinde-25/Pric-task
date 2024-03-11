"use client";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

async function fetchfire() {
  const querysnapshot = await getDocs(collection(db, "users"));

  const data: { id: string }[] = [];
  querysnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const Fetch: React.FC = () => {
  const [userData, setUserData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchfire();
      setUserData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="bg-orange-400 flex flex-col w-3/5 h-auto justify-center m-10 p-3">
      <center><h1 className="font-bold text-black text-4xl m-3 mt-10 mb-5">All Users</h1></center>
      <hr className="m-3 mt-7" />
        {userData.map((user) => (
          <>
            <div key={user.id} className=" m-10 font-medium text-white">
              <div className="text-xl p-3 flex">
                <label className="m-2">User Id: </label>
                <h2 className="m-2">{user.id}</h2>
              </div>
              <div className="text-xl p-3 flex">
                <label className="m-2">Name: </label>
                <h2 className="m-2">{user.name}</h2>
              </div>
              <div className="text-xl p-3 flex">
                <label className="m-2">Email: </label>
                <h2 className="m-2">{user.email}</h2>
              </div>
              <div className="text-xl p-3 flex">
                <label className="m-2">MOB: </label>
                <h2 className="m-2">{user.mno}</h2>
              </div>
              <div className="text-xl p-3 flex">
                <label className="m-2">Address: </label>
                <h2 className="m-2">{user.add}</h2>
              </div>
            </div>
            <hr className="m-3 mt-7" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Fetch;
