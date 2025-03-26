"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loading from '../../_component/Loading';


const DroneLogs = () => {
  const LOGS_URL = process.env.NEXT_PUBLIC_LOGS_URL;
  const DRONE_ID = process.env.NEXT_PUBLIC_DRONE_ID;

  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 25;

  const fetchLogs = async () => {
    try {
      const response = await fetch(`${LOGS_URL}/${DRONE_ID}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedLogs = await response.json();
      console.log("Fetched logs:", fetchedLogs);
      setLogs(fetchedLogs);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  // Sort logs
  const sortedLogs = [...logs].sort(
    (a, b) => new Date(b.created) - new Date(a.created)
  );

  // Calculate pagination
  const totalPages = Math.ceil(sortedLogs.length / logsPerPage);
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = sortedLogs.slice(indexOfFirstLog, indexOfLastLog);

  // Page navigation function
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Render page numbers
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;
    const half = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(1, currentPage - half);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`rounded-lg px-5 py-3 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none ${
            i === currentPage ? "bg-rose-800" : "bg-rose-600"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col justify-center items-center md:mt-10">
      <div className='mb-10'>
        <span className="text-rose-600 text-2xl font-bold" style={{ textShadow: "0 0 4px hsl(347, 77%, 50%)" }}>Drone Log</span>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
      <div className="card drone-logs-container mx-auto">

      {/* title */}
      <div className='my-5 mx-auto'>
      <span className="text-gray-700 dark:text-gray-300 text-xl font-bold ml-4 text-center" >Log from ID : {DRONE_ID}</span>
      </div>

      {/* table */}
      <div className="table-wrapper">
        <table className="drone-logs-table">
          <thead>
            <tr className="text-gray-700 dark:text-gray-300  font-bold">
              <th className="pl-6">Created</th>
              <th>Country</th>
              <th>Drone ID</th>
              <th>Drone Name</th>
              <th>Celsius</th>
            </tr>
          </thead>
          <tbody className="px-5">
            {currentLogs.map((log, index) => (
              <tr
                key={index}
                className="text-gray-700 dark:text-gray-300 text-base font-medium"
              >
                <td className="py-3" >{new Date(log.created).toLocaleString()}</td>
                <td>{log.country}</td>
                <td>{log.drone_id}</td>
                <td>{log.drone_name}</td>
                <td>{log.celsius}°C</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
          {/* First Page */}
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            title="First Page"
            className={`rounded-lg bg-rose-600 px-5 py-3 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
              currentPage === 1 || totalPages <= 4 || currentPage === 2
                ? "hidden"
                : ""
            }`}
          >
            &lt;&lt;
          </button>

          {/* Previous Page */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            title="Previous Page"
            className={`rounded-lg bg-rose-600 px-5 py-3 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
              currentPage === 1 || totalPages <= 4 ? "hidden" : ""
            }`}
          >
            &lt;
          </button>

          {/* Page Numbers */}
          {renderPageNumbers()}

          {/* Next Page */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            title="Next Page"
            className={`rounded-lg bg-rose-600 px-5 py-3 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
              currentPage === totalPages || totalPages <= 4 ? "hidden" : ""
            }`}
          >
            &gt;
          </button>

          {/* Last Page */}
          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            title="Last Page"
            className={`rounded-lg bg-rose-600 px-5 py-3 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
              currentPage === totalPages ||
              totalPages <= 4 ||
              currentPage === totalPages - 1
                ? "hidden"
                : ""
            }`}
          >
            &gt;&gt;
          </button>
        </div>
      )}

        <div className="flex justify-between mx-10 mb-10 mt-5">
          <Link
            className="w-[100%] text-center sm:w-auto mr rounded-lg py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-rose-700 shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-rose-700 border-2"
            data-ripple-light="true"
            href="/assignment/temperature-log"
          >
            back
          </Link>
        </div>

      </div>
      )}
    </div>
    
  );
};

export default DroneLogs;