"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import Link from "next/link";

async function fetchfire() {
  const querysnapshot = await getDocs(collection(db, "contacts"));

  const data: { id: string }[] = [];
  querysnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export default function Home() {
  const router = useRouter();

  const [contactData, setUserData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchfire();
      setUserData(data);
    }
    fetchData();
  }, []);

  return (
    <div className=" flex flex-col w-screen h-screen   items-center  ">
      <div className="flex flex-col bg-orange-400 w-3/5 h-auto p-10 m-2 mt-20">
        {contactData.map((contact) => (
          <>
            <div key={contact.id} className=" mt-5">
              <center>
                <h1 className="text-4xl font-bold ">Profile Details</h1>
              </center>
              <hr className="m-3 mt-7" />
              <div className="ml-10 mt-7 flex flex-col ">
                <div className="flex flex-row text-xl font-medium text-white m-3">
                  <label className="mr-5 ">Name: </label>
                  <h2>{contact.name}</h2>
                </div>
                <div className="flex flex-row text-xl font-medium text-white m-3">
                  <label className="mr-5 ">Email: </label>
                  <h2>{contact.email}</h2>
                </div>
                <div className="flex flex-row text-xl font-medium text-white m-3">
                  <label className="mr-5 ">Mobile No: </label>
                  <h2>{contact.mno}</h2>
                </div>
                <div className="flex flex-row text-xl font-medium text-white m-3">
                  <label className="mr-5 ">Address: </label>
                  <h2>{contact.add}</h2>
                </div>
              </div>
            </div>
            <div>
              <hr className="m-3 mt-7 mb-7" />
              <center>
                <h1 className="text-4xl font-bold ">
                  Firebase Firestore DB Operation
                </h1>
              </center>
              <hr className="m-3 mt-7" />
              <div className=" flex p-3 m-5 items-center">
                <p className="text-lg font-medium m-2">Add New Users (insert operation) :</p>
                <Link 
                  className="p-2 bg-green-600 text-white pr-5 pl-5 m-2 hover:bg-green-400 hover:text-black"
                  href={{
                    pathname: "/Insert"
                  }}
                >Click Here
                </Link>
              </div>
              <div className=" flex p-3 m-5 items-center">
                <p className="text-lg font-medium m-2">All Users (read operation) :</p>
                <Link 
                  className="p-2 bg-green-600 text-white pr-5 pl-5 m-2 hover:bg-green-400 hover:text-black"
                  href={{
                    pathname: "/Fetch"
                  }}
                >Click Here
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
