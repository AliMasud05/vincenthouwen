"use client"
import { useState } from "react"
import { RadioOption } from "../check-radio/radio-option"
import FormSection from "../ui/form-section"
import { RadioGroup } from "../ui/radio-group"

interface StepSixProps {
  formData: { gardenNeeds: string[] }
  updateFormData: (data: { gardenNeeds: string[] }) => void
}

export default function StepSix({ formData, updateFormData }: StepSixProps) {
  console.log(formData, updateFormData);
  // const options = [
  //   {
  //     id: "front-garden",
  //     label: "Front garden",
  //     icon: <GardenIcon className="h-8 w-8 text-gray-600" />,
  //   },
  //   {
  //     id: "back-garden",
  //     label: "Back garden",
  //     icon: <RenovationIcon className="h-8 w-8 text-gray-600" />,
  //   },
  //   {
  //     id: "side-garden",
  //     label: "Side garden",
  //     icon: <PlantIcon className="h-8 w-8 text-gray-600" />,
  //   },
  //   {
  //     id: "all-around",
  //     label: "All around",
  //     icon: <LandscapeIcon className="h-8 w-8 text-gray-600" />,
  //   },
  // ]

   const [designAvailability, setDesignAvailability] = useState<string | undefined>(undefined) 
  const options = [
  { id: "installing_artificial_grass", label: "Installing artificial grass" },
  { id: "sowing", label: "Sowing" },
  { id: "plant_flowers_or_trees", label: "Plant flowers or trees" },
  { id: "ground_cover", label: "Ground cover" },
  { id: "laying_paving", label: "Laying paving" },
  { id: "installing_water_supply", label: "Installing a water supply" },
  { id: "placing_construction", label: "Placing construction (e.g. shed, veranda, fence, border)" },
  { id: "leveling_the_ground", label: "Leveling the ground" },
  { id: "another_reason", label: "Another reason, namely" }
];

  // Example usage of handleSelect
  // Uncomment the following code to use handleSelect with a button
  // <button onClick={() => updateFormData({ gardenLocation: 'front-garden' })}>Select Front Garden</button>

  return (
    <FormSection title="What is the location of the garden?" subtitle="Select the location of your garden project">
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
