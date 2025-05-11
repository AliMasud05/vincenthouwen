"use client"

import Image from "next/image"

interface OptionCardProps {
  icon: string
  label: string
  selected: boolean
  onClick: () => void
}

export default function OptionCard({ icon, label, selected, onClick }: OptionCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col  px-4 py-5 border rounded-md cursor-pointer transition-all duration-200 ${
        selected ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <Image src={icon} alt={label} width={40} height={40} className="mb-4 bg-blue-100/60
       rounded-full p-1 " />
      <div className="text-sm font-medium text-gray-700">{label}</div>
      {selected && (
        <div className="absolute -top-2 -right-2 h-5 w-5 bg-orange-500 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  )
}
