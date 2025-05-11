  "use client"

import FormSection from "../ui/form-section"
import { Input } from "../ui/input"


interface StepTenProps {
  formData: { email: string }
  updateFormData: (data: { email: string }) => void
}

export default function StepTen({ formData, updateFormData }: StepTenProps) {
    console.log(formData,updateFormData);
  return (
    <div className="space-y-8 max-w-2xl">
      <FormSection
        title="Receive responses from professionals in your area."
        subtitle="This information is not visible to professionals until you decide to contact them."
      >
        <div className="max-w-2xl">

       <Input type="email" placeholder="hasanhabibhira@gmail.com" className="w-full py-5 border-gray-300 rounded-md h-10" />
    </div>
   
      </FormSection>
    </div>
  )
}