"use client"

import FormSection from "../ui/form-section"
import { Input } from "../ui/input"

interface StepFourProps {
  formData: any
  updateFormData: (data: any) => void
}

export default function StepFour({ formData, updateFormData }: StepFourProps) {

  return (
    <FormSection title="What is the area of ​​the garden in m²? (optional)" subtitle="A rough estimate is sufficient for the professional">
    <div className="max-w-2xl">

       <Input type="number" placeholder="Enter your area" className="w-full py-5 border-gray-300 rounded-md h-10" />
    </div>
    </FormSection>
  )
}

