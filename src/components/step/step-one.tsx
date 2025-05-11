"use client"

import note from "@/assets/step-one/note-edit.png";
import thumbs from "@/assets/step-one/thumbs-up.png";
import user from "@/assets/step-one/user-multiple.png";
import FormSection from "../ui/form-section";
import { Input } from "../ui/input";
import OptionCard from "../ui/option-card";
import { useState } from "react";

interface StepOneProps {
  formData: {
    postalCode: string;
    location: string;
    gardenType?: string;
  };
  updateFormData: (data: Partial<{
    postalCode: string;
    location: string;
    gardenType: string;
  }>) => void;
  onValidate: () => boolean; // Add this line
}

export default function StepOne({ formData, updateFormData }: StepOneProps) {
  const [postalError, setPostalError] = useState("")
  const options = [
    {
      id: "new-garden",
      label: "Creating a new garden",
      icon: note.src
    },
    {
      id: "renovate-garden",
      label: "Renovating a new garden",
      icon: user.src,
    },
    {
      id: "plant-garden",
      label: "Planting a new garden",
      icon: thumbs.src,
    },
  ]

  const handleSelect = (id: string) => {
    updateFormData({ gardenType: id })
  }

  const handlePostalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    updateFormData({ postalCode: value })
    if (postalError && value.trim()) {
      setPostalError("")
    }
  }

  return (
    <div>
      <section className="mb-3">
        <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium mb-1">Garden design</h2>

              <button className="text-gray-400">
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            {/* <hr className="-mt-2 h-1" /> */}
            <div className="py-4 border-b">
              <div className="h-1 w-full bg-gray-100 rounded-full mb-4">
                
              </div>

              <h3 className="font-medium text-lg mb-1">
                Find Gardeners in Harderwijik
              </h3>
              <p className="text-gray-500 text-sm">
                Please answer the questions below so we can connect you with the
                right professionals.
              </p>
            </div>
            <div className="py-6 border-b flex flex-col gap-4">
          <h4>Postal code of the job</h4>
          <div>
            <Input
              type="text"
              placeholder="Enter your postal code"
              className={`max-w-md py-5 border-gray-300 rounded-md h-10 ${
                postalError ? "border-red-500" : ""
              }`}
              value={formData.postalCode}
              onChange={handlePostalChange}
              required
            />
            {postalError && (
              <p className="mt-1 text-sm text-red-600">{postalError}</p>
            )}
          </div>
        </div>
      </section>

    <FormSection title="What needs to be done?" subtitle="Select the option that best describes your project">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {options.map((option) => (
          <OptionCard
          key={option.id}
          icon={option.icon}
          label={option.label}
          selected={formData.gardenType === option.id}
          onClick={() => handleSelect(option.id)}
          />
        ))}
      </div>
    </FormSection>
        </div>
  )
}
