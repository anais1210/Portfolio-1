import React from "react";
import { ClassProps } from "@/app/type";

export default function Footer({ className }: ClassProps) {
  return (
    <div className={className}>
      <div className="text-black py-4 text-center w-full font-montserrat">
        <p>&copy; 2025</p>
      </div>
    </div>
  );
}
