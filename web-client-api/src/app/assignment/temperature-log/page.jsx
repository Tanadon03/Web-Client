"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from '../../_component/Loading';
import { Input } from "../../_component/Input";

function TemperatureLog() {
  // ดึงค่าจาก .env
  const AuthorKey = process.env.NEXT_PUBLIC_API_KEY;
  const LOGS_URL = process.env.NEXT_PUBLIC_LOGS_URL;
  const DRONE_ID = process.env.NEXT_PUBLIC_DRONE_ID;

  const [data, setData] = useState({
    drone_id: "",
    drone_name: "",
    country: "",
  });
  const [celsius, setCelsius] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null); 

  const fetchData = async () => {
    console.log("Key:", AuthorKey);
    try {
      const response = await fetch(`${LOGS_URL}/${DRONE_ID}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const logs = await response.json();
      console.log("Fetched logs:", logs);
      const secondLog = logs[1];
      if (secondLog) {
        setData({
          drone_id: secondLog.drone_id,
          drone_name: secondLog.drone_name,
          country: secondLog.country,
        });
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null); // Reset success message

    if (!celsius || !data.drone_id || !data.drone_name || !data.country) {
      setSubmitError("Please fill in all required fields");
      return;
    }

    const payload = {
      drone_id: Number(data.drone_id),
      drone_name: String(data.drone_name),
      country: String(data.country),
      celsius: Number(celsius),
    };
    console.log("Sending payload:", payload);

    try {
      const response = await fetch(LOGS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${AuthorKey}`,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      const result = await response.json();
      console.log("Log submitted:", result);
      setCelsius(""); // Reset input
      setSubmitSuccess("Temperature log submitted successfully!");
    } catch (error) {
      console.log("Error submitting log:", error);
      setSubmitError(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col justify-center items-center md:mt-10">
      <div className='mb-10'>
        <span className="text-rose-600 text-2xl font-bold" style={{ textShadow: "0 0 4px hsl(347, 77%, 50%)" }}>Drone Temperature</span>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="card flex flex-col gap-5">
          <span className="text-gray-700 dark:text-gray-300 text-xl font-bold ml-4 text-center" >Insert Temperature to {DRONE_ID}</span>
          <hr />
          {submitError && <div className="text-red-500 text-center">{submitError}</div>}
          {submitSuccess && <div className="text-green-500 text-center">{submitSuccess}</div>}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              type="number"
              name="celsius"
              value={celsius}
              onChange={(e) => setCelsius(e.target.value)}
              placeholder="Enter Temperature (°C)"
              spanText="Temperature (°C)"
              required
            />
            <button
              className="mt-5 middle none center rounded-lg bg-rose-600 py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="flex justify-between">
            <Link
              className="middle none center mr rounded-lg py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-rose-700 shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-rose-700 border-2"
              href="/assignment/view-config"
            >
              Back
            </Link>
            <Link
              className="middle none center rounded-lg bg-rose-600 py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              href="/assignment/view-log"
            >
              Next
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default TemperatureLog;