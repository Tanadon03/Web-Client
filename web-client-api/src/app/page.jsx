"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <StarryBackground /> */}
      <div className="w-[80%] mx-auto mt-5 mb-50 md:mt-10">
        <div className="my-10 font-bold tracking-tight text-5xl md:text-6xl">
          <span className="text-5xl text-foreground" style={{ textShadow: "0 0 8px var(--foreground)" }}>
            Web{" "}
          </span>
          <span className="text-5xl text-foreground" style={{ textShadow: "0 0 8px var(--foreground)" }}>
            Client{" "}
          </span>
          <span className="text-5xl text-rose-600" style={{ textShadow: "0 0 8px hsl(347, 77%, 50%)" }}>
            API
          </span>
        </div>
        <div className="mb-10 text-lg md:text-xl text-justify">
          For Assignment #2, I developed a web client application focused on drone data management using HTML, CSS, and JavaScript with Next.js. The project includes features like configuring drone details, creating an interactive form to log temperature data, and displaying logs in a structured format. I integrated API calls to handle real-time data submission and retrieval, ensuring smooth functionality. Additionally, I designed a responsive UI with Tailwind CSS, incorporating animations for a better user experience, such as smooth transitions for the navigation bar and hamburger menu.
        </div>
        <div>
          <Link
            className="middle none center mr-3 rounded-lg bg-rose-600 py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            href="/assignment/view-config"
          >
            Enter Into
          </Link>
        </div>
      </div>
    </div>
  );
}