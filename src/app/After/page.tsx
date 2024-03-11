'use client'
import React,{useState} from "react";
import { useRouter } from 'next/navigation'


export default function Home({searchParams}:
  {
    searchParams:{
      name: string;
      pass: string;
    }
  }) {
  const router = useRouter()
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    // setUname(searchParams.name);
    // setPass(searchParams.pass);
  
  return (
    <div className=" flex flex-col bg-red-700">
        <h1>Login Successfull</h1>
        
    {/* <h1>{searchParams.name}</h1>
    <h1>{searchParams.pass}</h1> */}
    </div>
  );
}

