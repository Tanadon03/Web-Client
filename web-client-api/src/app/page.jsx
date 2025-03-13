"use client"
import Link from "next/link";

// import StarryBackground from "./StarryBackground";


export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* <StarryBackground /> */}
      <div className='w-[80%] mx-auto mt-20'>
        <div className="my-10 font-bold tracking-tight text-5xl md:text-6xl">
          <span className="text-foreground" style={{ textShadow: "0 0 8px var(--foreground)" }}>
            Web{" "}
          </span>
          <span className="text-foreground" style={{ textShadow: "0 0 8px var(--foreground)" }}>
            Client{" "}
          </span>
          <span className="text-rose-600" style={{ textShadow: "0 0 8px hsl(347, 77%, 50%)" }}>
            API
          </span>
        </div>
        <div className="mb-10 text-xl md:text-2xl"> In hac assignment #2, web client development is the primary focus, utilizing HTML, CSS, and JavaScript. The project requires configuring drone data, building interactive forms, and displaying logs in a structured format. API integration ensures real-time data handling, while the UI enhances user experience.</div>
        <div>
          <Link
            className="middle none center mr-3 rounded-lg bg-rose-600 py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            href="/assignment/view-config"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
