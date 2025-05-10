"use client"

import type React from "react"

import { useState } from "react"
import { X, ArrowRight, FileText, Users, ThumbsUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function GardeningServicePage({data}) {
  const [searchQuery, setSearchQuery] = useState("Garden design")
  const [postalCode, setPostalCode] = useState("")

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className=" mx-auto  bg-white min-h-screen">
      {/* Header */}
    

      {/* Search Bar */}
      <div className="relative mb-8">
        <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full py-6 pr-10" />
        <button onClick={handleClearSearch} className="absolute right-3 top-1/2 -translate-y-1/2">
          <X className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      {/* Main Content */}
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-2">Find Gardeners in Harderwijk</h2>
        <p className="text-gray-600 mb-6">Describe your job and get in touch with gardeners in Harderwijk.</p>

        {/* Postal Code Form */}
        <div className="mb-6">
          <label htmlFor="postalCode" className="block mb-2">
            Postal code of the job
          </label>
          <Input
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="EB 0000"
            className="w-full mb-4"
          />
          <Button className="bg-orange-500 hover:bg-orange-600">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureBox icon={<FileText className="h-5 w-5" />} text="Post your job for free and without obligation" />
        <FeatureBox icon={<Users className="h-5 w-5" />} text="More than 28,833 affiliated professionals" />
        <FeatureBox icon={<ThumbsUp className="h-5 w-5" />} text="Over 700,802 verified reviews" />
      </div>
    </div>
  )
}

function FeatureBox({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center mb-3">{icon}</div>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  )
}
