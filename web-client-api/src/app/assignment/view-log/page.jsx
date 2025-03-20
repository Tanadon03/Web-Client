"use client";
import React, { useState } from "react";
import Link from "next/link";

// Mockup JSON Data (สมมติข้อมูลมากกว่า 25 รายการ)
const mockLogs = Array.from({ length: 250 }, (_, i) => ({
  created: `2024-09-22 07:${37 - i}:32.111Z`,
  country: "Pakistan",
  droneId: 3001,
  droneName: "Dot Dot",
  celsius: 45 - (i % 5),
}));

const DroneLogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 25;
  const id =666;

  // เรียงข้อมูลจากล่าสุดไปเก่า
  const sortedLogs = mockLogs.sort(
    (a, b) => new Date(b.created) - new Date(a.created)
  );

  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(sortedLogs.length / logsPerPage);

  // ดึงข้อมูลสำหรับหน้าปัจจุบัน
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = sortedLogs.slice(indexOfFirstLog, indexOfLastLog);

  // ฟังก์ชันเปลี่ยนหน้า
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // สร้างปุ่มตัวเลขหน้า (แสดง 4 หน้าใกล้เคียง)
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
    <div className="card drone-logs-container mt-10 xl:mt-20 mb-10 xl:mb-20 mx-auto">

      {/* title */}
      <div className='my-5 mx-auto'>
        <span className="text-rose-600 text-2xl font-bold" style={{ textShadow: "0 0 4px hsl(347, 77%, 50%)" }}>Page #3</span>
        <span className="text-gray-700 dark:text-gray-300 text-2xl font-bold ml-4" >View log ID : {id}</span>
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
                <td>{log.droneId}</td>
                <td>{log.droneName}</td>
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
  );
};

export default DroneLogs;