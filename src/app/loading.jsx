"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex space-x-4 items-center">
        {/* Loading Spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>

        {/* Loading Text */}
        <span className="text-lg font-semibold text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
