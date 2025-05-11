import Image from "next/image"

interface FormHeaderProps {
  currentStep: number
  totalSteps: number
}

export default function FormHeader({ currentStep, totalSteps }: FormHeaderProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-gray-500">Garden design</div>
          <h1 className="text-xl font-semibold text-gray-900 mt-1">Find Gardeners in Harderwijk</h1>
          <p className="text-sm text-gray-500 mt-1">
            Please complete the form below to receive quotes from professionals
          </p>
        </div>
        <div className="hidden sm:block">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Werkspot Logo"
            width={120}
            height={40}
            className="h-10"
          />
        </div>
      </div>
      <div className="px-4 pb-2">
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-orange-500 h-1.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
