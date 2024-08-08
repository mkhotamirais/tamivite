import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-2xl mx-auto min-h-screen bg-white">{children}</div>;
}

export function TitlePage({ title, menu = [] }: { title: string; menu: { href: string; label: string }[] }) {
  return (
    <div className="bg-gray-50">
      <Container>
        <h1 className="text-xl font-bold p-3 text-center">{title}</h1>
        <Separator />
        <div className="p-3 grid grid-cols-2 sm:grid-cols-3 gap-1">
          {menu?.map((item, i) => (
            <Button asChild key={i}>
              <Link to={item?.href}>{item?.label}</Link>
            </Button>
          ))}
        </div>
      </Container>
    </div>
  );
}
