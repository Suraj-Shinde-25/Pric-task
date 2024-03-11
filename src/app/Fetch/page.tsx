"use client";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

async function fetchfire() {
  const querysnapshot = await getDocs(collection(db, "users"));

  const data: { id: string }[] = [];
  querysnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

// function getData(data: any) {
//       const query = db.collection('cities').where('state', '==', 'CA');

//     const observer = query.onSnapshot(querySnapshot => {
//       console.log(`Received query snapshot of size ${querySnapshot.size}`);
//       // ...
//     }, err => {
//       console.log(`Encountered error: ${err}`);
// });
// }

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
      <div className="bg-slate-900 flex w-9/12 h-96 justify-center m-10 p-3">
        <div className="bg-slate-50 flex flex-col w-72 h-auto mt-5 p-10">
          {userData.map((user) => (
            <>
              <div key={user.id}>
                <label>Name: </label>
                <h2>{user.name}</h2>
                <label>Email: </label>
                <h2>{user.email}</h2>
                <label>MOB: </label>
                <h2>{user.mob}</h2>
                <label>Username: </label>
                <h2>{user.uname}</h2>
                <label>Password: </label>
                <h2>{user.pass}</h2>
              </div>
            </>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Fetch;
