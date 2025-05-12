"use client"

import FormSection from "../ui/form-section"
import { Input } from "../ui/input"

interface StepFourProps {
  formData: { area?: number }
  updateFormData: (data: { area?: number }) => void
}

export default function StepFour({ formData, updateFormData }: StepFourProps) {
  console.log(formData,updateFormData);

  return (
    <FormSection title="What is the area of ​​the garden in m²? (optional)" subtitle="A rough estimate is sufficient for the professional">
    <div className="max-w-2xl">

       <Input type="number" placeholder="Enter your area" className="w-full py-5 border-gray-300 rounded-md h-10" />
    </div>
    </FormSection>
  )
}

