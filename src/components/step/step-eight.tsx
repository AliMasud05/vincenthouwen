"use client"

import { useState } from "react"
import { RadioOption } from "../check-radio/radio-option"
import FormSection from "../ui/form-section"
import { RadioGroup } from "../ui/radio-group"
interface StepEightProps {
  formData: {
    gardenAccess?: string[];
    additionalInfo?: string;
    [key: string]: string | string[] | undefined | Record<string, boolean>; // Allow other string properties
  };
  updateFormData: (data: Partial<{
    gardenAccess?: string[];
    additionalInfo?: string;
    [key: string]: string | string[] | undefined | Record<string, boolean>;
  }>) => void;
}

export default function StepEight({ formData, updateFormData }: StepEightProps) {
  const [gardenAccess, setGardenAccess] = useState<string | undefined>(formData.gardenAccess?.[0] || undefined)
  const [additionalInfo, setAdditionalInfo] = useState<string>(formData.additionalInfo || "")

  const accessOptions = [
    { id: "freely_accessible", label: "Freely accessible" },
    { id: "through_the_house", label: "Through the house" },
    { id: "through_the_garden_gate", label: "Through the garden gate" },
    { id: "another_reason", label: "Another reason, namely" }
  ]

  const handleAccessChange = (value: string) => {
    setGardenAccess(value)
    updateFormData({ gardenAccess: [value] })
  }

  const handleAdditionalInfo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setAdditionalInfo(value)
    updateFormData({ additionalInfo: value })
  }

  return (
    <div className="space-y-8">
      <FormSection title="How can the garden be reached?" subtitle="">
        <div className="space-y-3">
          <RadioGroup 
            value={gardenAccess} 
            onValueChange={handleAccessChange} 
            className="space-y-3"
          >
            {accessOptions.map((option) => (
              <RadioOption
                key={option.id}
                id={option.id}
                label={option.label}
                isSelected={gardenAccess === option.id}
                className="cursor-pointer max-w-2xl"
              />
            ))}
          </RadioGroup>
        </div>
      </FormSection>
      <div className="max-w-2xl">


      <FormSection title="Additional information (optional)" subtitle="">
        <textarea
          rows={4}
          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3"
          placeholder="Enter any additional information here..."
          value={additionalInfo}
          onChange={handleAdditionalInfo}
          />
      </FormSection>
          </div>
    </div>
  )
}