"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"

interface NavigationButtonsProps {
  currentStep: number
  totalSteps: number
  onBack: () => void
  onNext: () => void
}

export default function NavigationButtons({ currentStep, totalSteps, onBack, onNext }: NavigationButtonsProps) {
  return (
    <div className="flex gap-6">
      <button
        onClick={onBack}
        className={`flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
          currentStep === 1 ? "hidden" : ""
        }`}
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg> */}
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </button>
    <button
  onClick={onNext}
  className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
>
  {currentStep === totalSteps ? "Submit" : "Next"}
  {currentStep !== totalSteps && <ArrowRight className="h-4 w-4 ml-2" />}
</button>
    </div>
  )
}
