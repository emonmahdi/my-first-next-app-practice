"use client";

import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Blog Page Not Found</h2>
      <p>
        Please go to back{" "}
        <Link href={"/"} style={{ color: "blue", fontWeight: "bold" }}>
          {" "}
          Home
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
