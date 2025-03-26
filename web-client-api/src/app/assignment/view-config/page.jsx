"use client"
import React from 'react'
import { useState, useEffect } from "react";
import Link from 'next/link';
import Loading from '../../_component/Loading';
import { Input } from "../../_component/Input";

function ViewConfig() {
  const [isError, setIsError] = useState(true);
  const [data, setData] = useState([]);
  const CONFIG_URL = process.env.NEXT_PUBLIC_CONFIG_URL;
  const DRONE_ID = process.env.NEXT_PUBLIC_CONFIG_ID;


  const fetchData = async () => {
    try {
      const response = await fetch(`${CONFIG_URL}/${DRONE_ID}`)
      const jsonData = await response.json(); 
      console.log("data:", jsonData);
      setData(jsonData);
      setIsError(false);
    } catch (error) {
      console.log("error:", error);
      setIsError(true);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

    
  return (
    <div className="container mx-auto px-4 py-10 justify-center items-center md:mt-10 flex flex-col">
      <div className='mb-10'>
          <span className="text-rose-600 text-2xl font-bold" style={{ textShadow: "0 0 4px hsl(347, 77%, 50%)" }}>Drone Config</span>
      </div>   
      {isError ? (
        <Loading />
      ) : (
      <div className='card'>
        <div
          className="flex flex-col gap-6"
        >
          <span className="text-gray-700 dark:text-gray-300 text-xl font-bold ml-4 text-center" >ID : {DRONE_ID}</span>
          <hr></hr>
          <Input 
              type='number'
              name="drone_id"
              value={data.drone_id} 
              placeholder='Enter Drone ID'
              spanText='Drone ID'
              readOnly
            />
            <Input
              name="drone_name" 
              value={data.drone_name} 
              placeholder='Enter Drone Name'
              spanText='Drone Name'
              readOnly
            />
            <Input 
              name="light"
              value={data.light} 
              placeholder='Enter Light'
              spanText='Light'
              readOnly
            />
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
    )}
    </div>
  )
}

export default ViewConfig