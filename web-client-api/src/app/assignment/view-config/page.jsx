"use client"
import React from 'react'
import { useState, useEffect } from "react";
import Link from 'next/link';
import { Input } from "../../_component/Input";

function ViewConfig() {
    const[data, setData] = useState({
      drone_id: 6666,
      drone_name: "Apocalypse",
      light: "100",
      country:"Japan"
    });
  return (
    <div className="container mx-auto px-4 py-10 flex justify-center items-center md:mt-10 xl:mt-20">
    <div
      className="card flex flex-col gap-6" // คง opacity 30% ใน dark mode
    >
      <div>
      <span className="text-rose-600 text-2xl font-bold" style={{ textShadow: "0 0 6px hsl(347, 77%, 50%)" }}>Page #1</span>
      <span className="text-gray-700 dark:text-gray-300 text-2xl font-bold ml-4" >View config</span>
      </div>
      <hr></hr>
      <Input 
          type='number'
          name="drone_id"
          value={data.drone_id} 
          placeholder='Enter Drone ID'
          spanText='Drone ID'
          readOnly
        />
        {/* <Label className="text-xl">Drone Name</Label> */}
        <Input
          name="drone_name" 
          value={data.drone_name} 
          placeholder='Enter Drone Name'
          spanText='Drone Name'
          readOnly
        />
        {/* <Label className="text-xl">Light</Label> */}
        <Input 
          name="light"
          value={data.light} 
          placeholder='Enter Light'
          spanText='Light'
          readOnly
        />
        {/* <Label className="text-xl">Country</Label> */}
        <Input 
          name="country"
          value={data.country} 
          placeholder='Enter Country'
          spanText='Country'
          readOnly
        />
      <div className='mt-3 flex'>
      <Link
        className="w-full text-center rounded-lg bg-rose-600 py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
        href="/assignment/temperature-log"
      >
        next
      </Link>
        </div>
    </div>
    </div> 
  )
}

export default ViewConfig