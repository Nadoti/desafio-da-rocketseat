"use client"
import { useState } from "react";
import Image from "next/image";
import arrow from "@/icons/arrow.svg"

export function FilterOrganization() {
  const [isModalFilterOpen, setIsModalFilterOpen] = useState(false)
  return (
    <div>
      <button className="flex items-center text-black">
        Organizar por
        <Image 
          src={arrow}
          width={30}
          height={30}
          alt="arrow"
        />
      </button>
      {isModalFilterOpen 
      ? 
        (
          <div>
            <ul>
              <button type="button"></button>
            </ul>
          </div>
        ) 
      : null}
    </div>
  )
}