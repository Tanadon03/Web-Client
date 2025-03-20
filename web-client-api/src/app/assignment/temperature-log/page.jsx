"use client"
import React from 'react'
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from 'next/link';
// import { Input } from "@/components/ui/input";
import { Input } from "../../_component/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function TemperatureLog() {
    const [data, setData] = useState({
      drone_id: '',
      drone_name: '',
      light: '',
      country: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(data);
      const isAllFieldsFilled = 
        data.drone_id !== null && 
        data.drone_name.trim() !== '' && 
        data.light.trim() !== '' && 
        data.country.trim() !== '';

      if (isAllFieldsFilled) {
        console.log('All fields are filled:', data);
      } else {
        console.log('Please fill all fields:', data);
      }
    }
  return (
    <div className="container mx-auto px-4 py-10 flex justify-center items-center md:mt-10 xl:mt-20">
    <div className="card flex flex-col gap-5" >
      <div>
        <span className="text-rose-600 text-2xl font-bold" style={{ textShadow: "0 0 4px hsl(347, 77%, 50%)" }}>Page #2</span>
        <span className="text-gray-700 dark:text-gray-300 text-2xl font-bold ml-4" >Temperature log</span>
      </div>
      <hr></hr>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        {/* <Label className="text-xl">Drone ID</Label> */}
        <Input 
          type='number'
          name="drone_id"
          value={data.drone_id} 
          placeholder='Enter Drone ID'
          spanText='Drone ID'
          onChange={handleChange}
        />
        {/* <Label className="text-xl">Drone Name</Label> */}
        <Input
          name="drone_name" 
          value={data.drone_name} 
          placeholder='Enter Drone Name'
          spanText='Drone Name'
          onChange={handleChange}
        />
        {/* <Label className="text-xl">Light</Label> */}
        <Input 
          name="light"
          value={data.light} 
          placeholder='Enter Light'
          spanText='Light'
          onChange={handleChange}

        />
        {/* <Label className="text-xl">Country</Label> */}
        <Input 
          name="country"
          value={data.country} 
          placeholder='Enter Country'
          spanText='Country'
          onChange={handleChange}
        />
        <button 
            className="mt-5 middle none center rounded-lg bg-rose-600 py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"

        >
            Submit
        </button>  
      </form>

      <div className='flex justify-between'>
          <Link
            className="middle none center mr rounded-lg py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-rose-700 shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-rose-700 border-2"
            data-ripple-light="true"
            href="/assignment/view-config"
          >
            back
          </Link> 
          <Link
            className="middle none center rounded-lg bg-rose-600 py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            href="/assignment/view-log"
          >
            next
          </Link>
        </div>
    </div>
    </div> 
  )
}

export default TemperatureLog