"use client"
import { useState } from "react"



export function FilterTypes() {
  const [teste, setTeste] = useState("teste")
  return (
    <ul className="flex items-center gap-10">
      <li>
        <button 
          className={`uppercase w-full ${teste === "teste" ? "text-black text-base border-b-4 font-bold border-line-text-orange" : "text-gray-text"}`}
          onClick={() => setTeste("teste")}
        >
          todos os produtos
        </button>
      </li>
      <li>
      <button 
          className={`uppercase w-full ${teste === "teste1" ? "text-black text-base border-b-4 font-bold border-line-text-orange" : "text-gray-text"}`}
          onClick={() => setTeste("teste1")}
        >
          camisetas
        </button>
      </li>
      <li>
      <button 
          className={`uppercase w-full ${teste === "teste2" ? "text-black text-base border-b-4 font-bold border-line-text-orange" : "text-gray-text"}`}
          onClick={() => setTeste("teste2")}
        >
          canecas
        </button>
      </li>
    </ul>
  )
}