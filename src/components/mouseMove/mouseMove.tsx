"use client"; // Required for Next.js App Router

import React, { ChangeEvent, useEffect, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "10px",
        height: "10px",
        backgroundColor: "blue",
        borderRadius: "50%",
        pointerEvents: "none", // allows clicks through the dot
        transform: "translate(-50%, -50%)", // centers the dot
        zIndex: 9999,
      }}
    />
    
    // Image kay sath Move

    //     <img
    //     src="/cursor.jpg" // 🖼️ Replace with your image path (public folder)
    //     alt="Cursor Follower"
    //     style={{
    //       position: "fixed",
    //       top: position.y,
    //       left: position.x,
    //       width: "32px", // adjust size as needed
    //       height: "32px",
    //       pointerEvents: "none",
    //       transform: "translate(-50%, -50%)",
    //       zIndex: 9999,
    //     }}
    //   />

  );
};

export default MouseFollower;
