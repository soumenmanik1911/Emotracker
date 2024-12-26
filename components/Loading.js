"use client"; // For client-side behavior

import { useState, useEffect } from "react";

export default function Loading({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-24 w-24 border-t-8 border-blue-500"></div>
      </div>
    );
  }

  return <>{children}</>;
}
