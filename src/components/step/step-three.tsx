"use client"

import { useEffect, useState } from "react"
import { RadioOption } from "../check-radio/radio-option"
import { RadioGroup } from "../ui/radio-group"
import FormSection from "../ui/form-section"

interface StepThreeProps {
  formData: {
    designDrawings?: string;
    gardenNeeds?: string[]; // Allow gardenNeeds as string[]
    [key: string]: string | number | boolean | string[] | null | undefined;
  };
  updateFormData: (data: { [key: string]: string | number | boolean | string[] | null }) => void;
}

export default function StepThree({ formData, updateFormData }: StepThreeProps) {
  // Initialize state with value from formData
  const [designAvailability, setDesignAvailability] = useState<string>(
    formData.designDrawings?.toString() || ""
  )

  // Update formData when selection changes
  useEffect(() => {
    if (designAvailability) {
      updateFormData({
        designDrawings: designAvailability
      })
    }
  }, [designAvailability, updateFormData])

  const options = [
    { id: "no_design", label: "No design drawings available" },
    { id: "design_available", label: "Design is available" },
    { id: "otherwise", label: "Otherwise" },
  ]

  return (
    <FormSection title="Are there already design drawings available?" subtitle="">
      <RadioGroup
        value={designAvailability}
        onValueChange={(value) => {
          setDesignAvailability(value)
          // Direct update alternative (you can use either this or the useEffect approach)
          updateFormData({ designDrawings: value })
        }}
        className="space-y-3"
      >
        {options.map((option) => (
          <RadioOption
            key={option.id}
            id={option.id}
            label={option.label}
            isSelected={designAvailability === option.id}
            className="cursor-pointer max-w-2xl"
          />
        ))}
      </RadioGroup>
    </FormSection>
  )
}