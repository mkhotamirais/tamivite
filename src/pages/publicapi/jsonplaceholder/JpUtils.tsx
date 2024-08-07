import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { View } from "./useJp";

export function SetView({
  view,
  setView,
  className,
}: {
  view: View;
  setView: (view: View) => void;
  className: string;
}) {
  return (
    <div className={`${className} flex gap-3`}>
      View:
      <button disabled={view === "table"} onClick={() => setView("table")} className={`disabled:opacity-50`}>
        table
      </button>
      <button disabled={view === "card"} onClick={() => setView("card")} className={`disabled:opacity-50`}>
        card
      </button>
    </div>
  );
}

export function GridCard({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">{children}</div>;
}

export function Prev({ className }: { className: string }) {
  const navigate = useNavigate();
  return (
    <button type="button" title="button" onClick={() => navigate(-1)} className={`${className} hover:scale-105`}>
      <FaChevronLeft />
    </button>
  );
}
