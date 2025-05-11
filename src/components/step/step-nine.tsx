"use client"

import { useState } from "react"
import { RadioOption } from "../check-radio/radio-option"
import { FileUploadArea } from "../step-form/file-upload"
import FormSection from "../ui/form-section"
import { RadioGroup } from "../ui/radio-group"
import { Textarea } from "../ui/textarea"

interface StepNineProps {
  formData: Record<string, unknown>
  updateFormData: (data: Record<string, unknown>) => void
}

export default function StepNine({ formData, updateFormData }: StepNineProps) {
  console.log("formData", formData)
  console.log(updateFormData);
 const [designAvailability, setDesignAvailability] = useState<string | undefined>(undefined)
  const options = [
    { id: "confirm", label: "Yes" },
 
  ]
  const options2 = [
    { id: "reject", label: "No, maybe later" },
 
  ]
 
  return (
    <div className="space-y-8 max-w-2xl">
      <FormSection
        title="Add photos or drawings (optional)"
        subtitle="Adding photos helps professionals better assess the situation. Be careful not to share any personal information here."
      >
        <div className="mb-4">

     
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
        <h4 className="text-[#333333]/60 my-2 text-sm font-medium mb-2 ">Maximum of 25, 15 MB files</h4>
        <FileUploadArea />

        {/* <div className="max-w-2xl my-4">

       <Input type="text" placeholder="Enter your area" className="w-full py-5 border-gray-300 rounded-md h-10" />
    </div> */}
         <div className="my-3">
          <RadioGroup  value={designAvailability} onValueChange={setDesignAvailability} className="space-y-3">
          {options2.map((option) => (
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

         <div className="mt-14">
          <h4 className="my-1">Additional information (optional)</h4>
          <p className="text-[#333333]/60 mb-2"> Please do not share your contact details here</p>
         <Textarea  className="w-full border-gray-300 rounded-md min-h-[100px]" />
         </div>
      </FormSection>
    </div>
  )
}
