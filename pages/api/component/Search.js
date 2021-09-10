import React from "react";
import Button from "./Button";
import { useRouter } from 'next/router'
import Link from 'next/link'




export default function Search() {
  const router = useRouter()

  // Do your search here
  const searchInvoice =()=>{
    router.push('/OrderSummary', undefined, { shallow: true })
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your order ID"
        className="w-10/12 mt-12 mb-6 ml-6  px-4 py-2 rounded-lg appearance-none border-2 border-black-400 focus:outline-none text-black-100 text-center focus:border-green-500"
      />
      <p className=" invalid__order text-center  ">Invalid Order ID</p>
    
        <Button text="Search" buttonAction={searchInvoice} />
  
    
    </div>
  );
}
