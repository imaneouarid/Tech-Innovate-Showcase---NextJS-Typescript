"use client"
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [val,setVal]=useState("");
  const {push}=useRouter()
  const handleSubmit = (event: FormEvent)=>{
    event.preventDefault();
    push(`/prediction/${val}`);

  }
  return (
    <div>
      <div>
      <h1>Ente ur name</h1>

      </div>
      <form  onSubmit={handleSubmit} >
        <input type="text"  className="text-black" placeholder="ur name ?" value={val}  onChange={(e)=>setVal(e.target.value)}/>
      <button type="submit" >submit</button>
      </form>

       
    </div>
    
  );
}
