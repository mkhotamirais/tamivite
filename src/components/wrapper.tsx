import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-2xl mx-auto min-h-screen bg-white">{children}</div>;
}
