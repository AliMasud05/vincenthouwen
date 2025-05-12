"use client"

import { useState } from "react"

interface SelectDropdownProps {
  
  options: string[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SelectDropdown({
 
  options,
  value,
  onChange,
  placeholder = "Select an option",
}: SelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-3 border border-gray-300 rounded-md bg-white cursor-pointer"
      >
        <span className={value ? "text-gray-900" : "text-gray-500"}>{value || placeholder}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
              className="p-3 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
