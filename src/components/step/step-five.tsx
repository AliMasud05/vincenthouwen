"use client"
import { useState } from "react"
import { RadioOption } from "../check-radio/radio-option"
import { RadioGroup } from "../ui/radio-group"
import FormSection from "../ui/form-section"

// interface StepFiveProps {
//   formData: { gardenNeeds: string[] }
//   updateFormData: (data: { gardenNeeds: string[] }) => void
// }
interface StepFiveProps {
  formData: {
    gardenNeeds: string[];
  };
  updateFormData: (data: Partial<{
    gardenNeeds: string[];
  }>) => void;
}

export default function StepFive({ formData, updateFormData }: StepFiveProps) {
  // const gardenNeedOptions = [
  //   "Paving/Tiles",
  //   "Plants",
  //   "Lawn/Grass",
  //   "Wooden Deck",
  //   "Water Feature",
  //   "Lighting",
  //   "Fencing",
  //   "Irrigation System",
  //   "Outdoor Kitchen",
  //   "Garden Furniture",
  //   "Children's Play Area",
  // ]
  console.log(formData,updateFormData);
    const [designAvailability, setDesignAvailability] = useState<string | undefined>(undefined)

    const options = [
    { id: "regular_maintenance", label: "Regular maintenance" },
    { id: "one_time_maintenance", label: "One time maintenance" },
    { id: "in_consultation", label: "In consultation" },
  ]

  // const handleSelectOption = (option: string) => {
  //   const currentNeeds = [...formData.gardenNeeds]
  //   if (currentNeeds.includes(option)) {
  //     updateFormData({
  //       gardenNeeds: currentNeeds.filter((item) => item !== option),
  //     })
  //   } else {
  //     updateFormData({
  //       gardenNeeds: [...currentNeeds, option],
  //     })
  //   }
  // }

  return (
    <FormSection title="Does the garden require regular maintenance?" subtitle="">
      <div className="space-y-3">
        {/* {gardenNeedOptions.map((option) => (
          <div
            key={option}
            className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
            onClick={() => handleSelectOption(option)}
          >
            <div
              className={`w-5 h-5 flex items-center justify-center border rounded-md mr-3 ${
                formData.gardenNeeds.includes(option) ? "bg-orange-500 border-orange-500" : "border-gray-300"
              }`}
            >
              {formData.gardenNeeds.includes(option) && (
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
              )}
            </div>
            <span>{option}</span>
          </div>
        ))} */}

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
      </div>
    </FormSection>
  )
}
