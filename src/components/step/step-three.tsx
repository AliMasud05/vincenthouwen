"use client"

import { useState } from "react"
import { RadioOption } from "../check-radio/radio-option"
import { RadioGroup } from "../ui/radio-group"
import SelectDropdown from "../ui/select-dropdown"
import FormSection from "../ui/form-section"

interface StepThreeProps {
  formData: any
  updateFormData: (data: any) => void
}

export default function StepThree({ formData, updateFormData }: StepThreeProps) {
    const [designAvailability, setDesignAvailability] = useState<string | undefined>(undefined)

  // const sizeOptions = ["Less than 50 m²", "50-100 m²", "100-200 m²", "200-500 m²", "More than 500 m²"]
     const options = [
    { id: "no_design", label: "No design drawings available" },
    { id: "design_available", label: "Design is available" },
    { id: "otherwise", label: "Otherwise" },
  ]
  return (
    <FormSection title="Are there already design drawings available?" subtitle="">
       <RadioGroup  value={designAvailability} onValueChange={setDesignAvailability} className="space-y-3">
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
