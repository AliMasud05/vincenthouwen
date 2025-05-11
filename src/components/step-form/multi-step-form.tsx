"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import StepEight from "../step/step-eight"
import StepEleven from "../step/step-eleven"
import StepFive from "../step/step-five"
import StepFour from "../step/step-four"
import StepNine from "../step/step-nine"
import StepOne from "../step/step-one"
import StepSeven from "../step/step-seven"
import StepSix from "../step/step-six"
import StepTen from "../step/step-ten"
import StepThree from "../step/step-three"
import StepTwo from "../step/steps-two"
import NavigationButtons from "./navigation-buttons"
import SubmitModal from "./submit-modal"


export default function MultiStepForm() {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)

  const [activeStep, setActiveStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [formData, setFormData] = useState({
    postalCode: "3845EH",
    location: "Harderwijk",
    gardenType: "",
    designDrawings: "",
    gardenSize: "",
    regularMaintenance: "",
    gardenNeeds: [] as string[],
    gardenLocation: {},
    gardenAccess: [],
    photos: [],
    additionalInfo: "",
    name: "",
    email: "",
    phone: "",
    acceptTerms: false,
    selectedServices: {},
  })

  const totalSteps = 11
  const formEndRef = useRef<HTMLDivElement>(null)

  // Scroll to the active step when it changes
  useEffect(() => {
    if (formEndRef.current) {
      formEndRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [activeStep, completedSteps])

   const handleNext = () => {
  // Step-specific validation
  if (activeStep === 1) {
    if (!formData.postalCode.trim()) {
      return
    }
  }

  if (activeStep < totalSteps) {
    if (!completedSteps.includes(activeStep)) {
      setCompletedSteps([...completedSteps, activeStep])
    }
    setActiveStep(activeStep + 1)
  } else {
    // On final step, show modal instead of navigating
    setIsSubmitModalOpen(true)
  }
}
  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1)
    }
  }

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData({ ...formData, ...data })
  }

  const renderStep = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return <StepOne formData={formData} updateFormData={updateFormData} onValidate={() => true} />
      case 2:
        return <StepTwo formData={formData} updateFormData={updateFormData} />
      case 3:
        return <StepThree formData={formData} updateFormData={updateFormData} />
      case 4:
        return <StepFour formData={formData} updateFormData={updateFormData} />
      case 5:
  return <StepFive 
    formData={formData} 
    updateFormData={(data: Partial<{ gardenNeeds: string[] }>) => {
      updateFormData(data);
    }} 
  />
      case 6:
        return <StepSix formData={formData} updateFormData={updateFormData} />
      case 7:
        return <StepSeven formData={formData} updateFormData={updateFormData} />
      case 8:
        return <StepEight formData={formData} updateFormData={updateFormData} />
      case 9:
        return <StepNine formData={formData} updateFormData={updateFormData} />
      case 10:
        return <StepTen formData={formData} updateFormData={updateFormData} />
      case 11:
      return<StepEleven formData={formData} updateFormData={updateFormData} />
        default:
        return null
    }
  }

  // Determine which steps should be visible
  const visibleSteps = [...completedSteps, activeStep].sort((a, b) => a - b)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      {/* <FormHeader currentStep={activeStep} totalSteps={totalSteps} /> */}

      <div className="p-6">
        <div className="space-y-8">
          {visibleSteps.map((stepNumber) => (
            <motion.div
              key={stepNumber}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`pb-6 ${completedSteps.includes(stepNumber) ? "border-b border-gray-200" : ""}`}
            >
              {/* <div className="flex items-center mb-4">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                    completedSteps.includes(stepNumber) ? "bg-green-500" : "bg-orange-500"
                  }`}
                >
                  {completedSteps.includes(stepNumber) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="text-white text-xs font-medium">{stepNumber}</span>
                  )}
                </div>
                <h3 className="text-sm font-medium text-gray-500">Step {stepNumber}</h3>
              </div> */}

              {renderStep(stepNumber)}

              {stepNumber === activeStep && (
                <div className="mt-6">
                  <NavigationButtons
                    currentStep={activeStep}
                    totalSteps={totalSteps}
                    onBack={handleBack}
                    onNext={handleNext}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div ref={formEndRef} />
      </div>
      <SubmitModal 
      isOpen={isSubmitModalOpen} 
      onClose={() => setIsSubmitModalOpen(false)}
      formData={formData}
    />
    </div>
  )
}
