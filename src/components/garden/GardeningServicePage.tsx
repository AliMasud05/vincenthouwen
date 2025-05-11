"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import Image from "next/image";
import note from "@/assets/step-one/note-edit.png";
import thumbs from "@/assets/step-one/thumbs-up.png";
import user from "@/assets/step-one/user-multiple.png";
import more from "@/assets/step-two/More.png";
import refresh from "@/assets/step-two/Refresh.png";
import fi_11279571 from "@/assets/step-two/fi_11279571.png";
import fi_1174712 from "@/assets/step-two/fi_1174712.png";
import fi_2551501 from "@/assets/step-two/fi_2551501.png";

const GardeningServicePage = () => {
  const features = [
    {
      icon: note.src,
      text: "Post your job for free and without obligation",
    },
    {
      icon: user.src,
      text: "More than 28,833 affiliated professionals",
    },
    {
      icon: thumbs.src,
      text: "Over 700,802 verified reviews",
    },
  ];

  const gardenData = [
    {
      id: 1,
      title: "Creating a new garden",
      icon: more.src
    },
    {
      id: 2,
      title: "Vegetable garden",
      icon: refresh.src
    },
    {
      id: 3,
      title: "Flower garden",
      icon: fi_11279571.src
    },
    {
      id: 4,
      title: "Herb garden",
      icon:fi_1174712.src
    },
    {
      id: 5,
      title: "Balcony garden",
      icon: fi_2551501.src
    }
  ];
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [editingStep, setEditingStep] = useState<number | null>(null);
  const totalSteps = 10;

  // Refs for each step section
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const nextStep = () => {
    if (activeStep < totalSteps) {
      // Mark current step as completed
      if (!completedSteps.includes(activeStep)) {
        setCompletedSteps([...completedSteps, activeStep]);
      }

      // Set next step as active
      const nextStepNumber = activeStep + 1;
      setActiveStep(nextStepNumber);
      setEditingStep(null);

      // Scroll to the next step and position it at the top of the viewport
      if (stepRefs.current[nextStepNumber - 1]) {
        stepRefs.current[nextStepNumber - 1]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      const prevStepNumber = activeStep - 1;
      setActiveStep(prevStepNumber);
      setEditingStep(null);

      // Scroll to the previous step
      if (stepRefs.current[prevStepNumber - 1]) {
        stepRefs.current[prevStepNumber - 1]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleStepClick = (step: number) => {
    if (step <= Math.max(...completedSteps, activeStep)) {
      setActiveStep(step);
      setEditingStep(step);
      stepRefs.current[step - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isStepCompleted = (step: number) => completedSteps.includes(step);
  const isStepActive = (step: number) => step === activeStep;
  const isStepVisible = (step: number) =>
    step <= Math.max(...completedSteps, activeStep);
  const isStepEditing = (step: number) =>
    step === editingStep ||
    (step === activeStep && !completedSteps.includes(step));

  return (
    <div className=" py-8">
      <div className="bg-white rounded-lg  mb-4">
        {/* Step navigation */}
        <div className="flex overflow-x-auto py-2 px-6 border-b">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNumber = index + 1;
            const completed = isStepCompleted(stepNumber);
            const active = isStepActive(stepNumber);
            const visible = isStepVisible(stepNumber);

            if (!visible) return null;

            return (
              <button
                key={stepNumber}
                onClick={() => handleStepClick(stepNumber)}
                className={`flex items-center justify-center min-w-[32px] h-8 rounded-full mx-1 transition-colors ${
                  active
                    ? "bg-orange-500 text-white"
                    : completed
                    ? "bg-orange-100 text-orange-500 border border-orange-500"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {completed ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  stepNumber
                )}
              </button>
            );
          })}
        </div>

        {/* Step 1 */}
        {isStepVisible(1) && (
          <div
            ref={(el) => (stepRefs.current[0] = el)}
            className={`p-6 border-b ${isStepActive(1) ? "" : ""}`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium mb-1">Garden design</h2>

              <button className="text-gray-400">
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <hr className="-mt-2 h-1" />
            <div className="py-6 border-b">
              <div className="h-1 w-full bg-gray-100 rounded-full mb-4">
                <div
                  className="h-1 bg-orange-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${(completedSteps.length / totalSteps) * 100}%`,
                  }}
                ></div>
              </div>

              <h3 className="font-medium text-lg mb-1">
                Find Gardeners in Harderwijik
              </h3>
              <p className="text-gray-500 text-sm">
                Please answer the questions below so we can connect you with the
                right professionals.
              </p>
            </div>
            <div className="py-6 border-b flex flex-col gap-4">
              <h4>Postal code of the job</h4>
              <Input
                type="text"
                placeholder="Enter your postal code"
                className="max-w-md py-5 border-gray-300 rounded-md h-10"
              />
            </div>
            <div>
              {isStepEditing(1) && (
                <div>
                  <div className="flex justify-start my-4">
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isStepCompleted(1)
                    ? "bg-orange-500 text-white"
                    : isStepActive(1)
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {isStepCompleted(1) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span className="text-xs">1</span>
                )}
              </div>
              <h4
                className={`font-medium ${
                  isStepActive(1) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                What needs to be fixed?
              </h4>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 flex flex-col items-start"
                  >
                    <div className="bg-gray-100 rounded-full p-3 mb-4">
                      <Image
                        src={feature.icon || "/placeholder.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </div>
                    <p className="text-gray-700 text-sm">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="space-y-6">
              <div>
                <RadioGroup defaultValue="option1" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-2">
                      <RadioGroupItem value="option1" id="option1" className="sr-only" />
                      <Label
                        htmlFor="option1"
                        className="flex flex-col items-center justify-center w-24 h-24 rounded-md border-2 border-gray-200 cursor-pointer hover:border-orange-500 peer-checked:border-orange-500 transition-colors"
                      >
                        <div className="w-12 h-12 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-700"
                          >
                            <path d="M12 2v8"></path>
                            <path d="M4 10v12"></path>
                            <path d="M20 10v12"></path>
                            <path d="M4 22h16"></path>
                            <path d="M12 10a6 6 0 0 0 6-6"></path>
                            <path d="M12 10a6 6 0 0 1-6-6"></path>
                          </svg>
                        </div>
                      </Label>
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs text-center">Creating a new garden</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative mb-2">
                      <RadioGroupItem value="option2" id="option2" className="sr-only" />
                      <Label
                        htmlFor="option2"
                        className="flex flex-col items-center justify-center w-24 h-24 rounded-md border-2 border-gray-200 cursor-pointer hover:border-orange-500 peer-checked:border-orange-500 transition-colors"
                      >
                        <div className="w-12 h-12 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-700"
                          >
                            <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                            <path d="M2 20h20"></path>
                            <path d="M14 12v.01"></path>
                          </svg>
                        </div>
                      </Label>
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs text-center">Designing a new garden</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative mb-2">
                      <RadioGroupItem value="option3" id="option3" className="sr-only" />
                      <Label
                        htmlFor="option3"
                        className="flex flex-col items-center justify-center w-24 h-24 rounded-md border-2 border-gray-200 cursor-pointer hover:border-orange-500 peer-checked:border-orange-500 transition-colors"
                      >
                        <div className="w-12 h-12 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-700"
                          >
                            <path d="M12 19V5"></path>
                            <path d="M5 12l7-7 7 7"></path>
                          </svg>
                        </div>
                      </Label>
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs text-center">Creating a new garden</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative mb-2">
                      <RadioGroupItem value="option4" id="option4" className="sr-only" />
                      <Label
                        htmlFor="option4"
                        className="flex flex-col items-center justify-center w-24 h-24 rounded-md border-2 border-gray-200 cursor-pointer hover:border-orange-500 peer-checked:border-orange-500 transition-colors"
                      >
                        <div className="w-12 h-12 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-700"
                          >
                            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                            <path d="M3 3v5h5"></path>
                            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                            <path d="M16 16h5v5"></path>
                          </svg>
                        </div>
                      </Label>
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs text-center">Creating a new garden</span>
                  </div>
                </RadioGroup>
              </div>

             

             
            </div> */}
          </div>
        )}

        {/* Step 2 */}
        {isStepVisible(2) && (
          <div
            ref={(el) => (stepRefs.current[1] = el)}
            className={`p-6 border-b ${isStepActive(2) ? "bg-orange-50" : ""}`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isStepCompleted(2)
                    ? "bg-orange-500 text-white"
                    : isStepActive(2)
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {isStepCompleted(2) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span className="text-xs">2</span>
                )}
              </div>
              <h4
                className={`font-medium ${
                  isStepActive(2) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                Are there already design drawings available?
              </h4>
            </div>

            {/* <div className="space-y-6">
              <div className="space-y-3">
                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="No design drawings available" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">
                      No design drawings available
                    </SelectItem>
                    <SelectItem value="partial">
                      Partial drawings available
                    </SelectItem>
                    <SelectItem value="complete">
                      Complete drawings available
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Ground condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="loam">Loam</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Moisture" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dry">Dry</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="wet">Wet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {isStepEditing(2) && (
                <div className="flex justify-between mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-1 border-gray-300 text-gray-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div> */}
            <div className="grid grid-cols-2
             md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {
                gardenData.map((garden, index) => (
                    <div key={index} className="bg-[#fafafa] rounded-lg p-6 shadow-sm relative">
          <div className="absolute top-4 right-4">
            <Checkbox id={`garden-checkbox-${garden.id}`} />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Image
                src={garden.icon}
                alt={`${garden.title} icon`}
                width={40}
                height={40}
                className="opacity-70"
              />
            </div>

            <h3 className="text-gray-700 text-lg font-medium text-center">{garden.title}</h3>
          </div>
        </div>
                ))
              }

              
            </div>

            <div>
              {isStepEditing(2) && (
                <div className="flex justify-between mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-1 border-gray-300 text-gray-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {/* Step 3 - Design Availability */}
{isStepVisible(3) && (
  <div
    ref={(el) => (stepRefs.current[2] = el)}
    className={`p-6 border-b ${isStepActive(3) ? "bg-orange-50" : ""}`}
  >
    <div className="flex items-center mb-4">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
          isStepCompleted(3)
            ? "bg-orange-500 text-white"
            : isStepActive(3)
            ? "border-2 border-orange-500 text-orange-500"
            : "border-2 border-gray-300 text-gray-400"
        }`}
      >
        {isStepCompleted(3) ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <span className="text-xs">3</span>
        )}
      </div>
      <h4
        className={`font-medium ${
          isStepActive(3) ? "text-orange-500" : "text-gray-700"
        }`}
      >
        Are there already design drawings available?
      </h4>
    </div>

    <div className="space-y-6">
      <div className="w-full max-w-md p-6 bg-gray-50 rounded-lg">
        <RadioGroup className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <Label htmlFor="no-design" className="text-gray-700 cursor-pointer w-full">
              No design drawings available
            </Label>
            <RadioGroupItem value="no-design" id="no-design" />
          </div>

          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <Label htmlFor="design-available" className="text-gray-700 cursor-pointer w-full">
              Design is available
            </Label>
            <RadioGroupItem value="design-available" id="design-available" />
          </div>

          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <Label htmlFor="otherwise" className="text-gray-700 cursor-pointer w-full">
              Otherwise
            </Label>
            <RadioGroupItem value="otherwise" id="otherwise" />
          </div>
        </RadioGroup>
      </div>

      {isStepEditing(3) && (
        <div className="flex justify-between mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            className="flex items-center gap-1 border-gray-300 text-gray-700"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
          <Button
            type="button"
            onClick={nextStep}
            className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  </div>
)}

        {/* Step 4 */}
        {isStepVisible(4) && (
          <div
            ref={(el) => (stepRefs.current[3] = el)}
            className={`p-6 border-b ${isStepActive(4) ? "bg-orange-50" : ""}`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isStepCompleted(4)
                    ? "bg-orange-500 text-white"
                    : isStepActive(4)
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {isStepCompleted(4) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span className="text-xs">4</span>
                )}
              </div>
              <h4
                className={`font-medium ${
                  isStepActive(4) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                Does the garden require regular maintenance?
              </h4>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Yes, monthly maintenance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">
                      Yes, monthly maintenance
                    </SelectItem>
                    <SelectItem value="quarterly">
                      Yes, quarterly maintenance
                    </SelectItem>
                    <SelectItem value="yearly">
                      Yes, yearly maintenance
                    </SelectItem>
                    <SelectItem value="no">No maintenance required</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="No, I will do it myself" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="self">
                      No, I will do it myself
                    </SelectItem>
                    <SelectItem value="family">No, family will help</SelectItem>
                    <SelectItem value="other">Other arrangement</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">€0 - €1000</SelectItem>
                    <SelectItem value="medium">€1000 - €5000</SelectItem>
                    <SelectItem value="high">€5000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {isStepEditing(4) && (
                <div className="flex justify-between mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-1 border-gray-300 text-gray-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 5 */}
        {isStepVisible(5) && (
          <div
            ref={(el) => (stepRefs.current[4] = el)}
            className={`p-6 border-b ${isStepActive(5) ? "bg-orange-50" : ""}`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isStepCompleted(5)
                    ? "bg-orange-500 text-white"
                    : isStepActive(5)
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {isStepCompleted(5) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span className="text-xs">5</span>
                )}
              </div>
              <h4
                className={`font-medium ${
                  isStepActive(5) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                What needs to be done in the garden?
              </h4>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planting">Planting</SelectItem>
                    <SelectItem value="paving">Paving</SelectItem>
                    <SelectItem value="lawn">Lawn installation</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Fencing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wood">Wooden fence</SelectItem>
                    <SelectItem value="metal">Metal fence</SelectItem>
                    <SelectItem value="hedge">Hedge</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Water features" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pond">Pond</SelectItem>
                    <SelectItem value="fountain">Fountain</SelectItem>
                    <SelectItem value="stream">Stream</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Outdoor lighting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="path">Path lighting</SelectItem>
                    <SelectItem value="accent">Accent lighting</SelectItem>
                    <SelectItem value="security">Security lighting</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Outdoor furniture" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dining">Dining set</SelectItem>
                    <SelectItem value="lounge">Lounge set</SelectItem>
                    <SelectItem value="bench">Benches</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Gardening tools and sheds" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shed">Garden shed</SelectItem>
                    <SelectItem value="tools">Tool storage</SelectItem>
                    <SelectItem value="greenhouse">Greenhouse</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Irrigation systems" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drip">Drip irrigation</SelectItem>
                    <SelectItem value="sprinkler">Sprinkler system</SelectItem>
                    <SelectItem value="manual">Manual watering</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Outdoor structures" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pergola">Pergola</SelectItem>
                    <SelectItem value="gazebo">Gazebo</SelectItem>
                    <SelectItem value="arbor">Arbor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {isStepEditing(5) && (
                <div className="flex justify-between mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-1 border-gray-300 text-gray-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 6 */}
        {isStepVisible(6) && (
          <div
            ref={(el) => (stepRefs.current[5] = el)}
            className={`p-6 border-b ${isStepActive(6) ? "bg-orange-50" : ""}`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isStepCompleted(6)
                    ? "bg-orange-500 text-white"
                    : isStepActive(6)
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {isStepCompleted(6) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span className="text-xs">6</span>
                )}
              </div>
              <h4
                className={`font-medium ${
                  isStepActive(6) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                What is the location of the garden?
              </h4>
            </div>

            <div className="space-y-6">
              <RadioGroup
                defaultValue="option1"
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-2">
                    <RadioGroupItem
                      value="option1"
                      id="location1"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="location1"
                      className="flex flex-col items-center justify-center w-24 h-24 rounded-md border-2 border-gray-200 cursor-pointer hover:border-orange-500 peer-checked:border-orange-500 transition-colors"
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-700"
                        >
                          <path d="M12 2v8"></path>
                          <path d="M4 10v12"></path>
                          <path d="M20 10v12"></path>
                          <path d="M4 22h16"></path>
                          <path d="M12 10a6 6 0 0 0 6-6"></path>
                          <path d="M12 10a6 6 0 0 1-6-6"></path>
                        </svg>
                      </div>
                    </Label>
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs text-center">
                    Creating a new garden
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative mb-2">
                    <RadioGroupItem
                      value="option2"
                      id="location2"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="location2"
                      className="flex flex-col items-center justify-center w-24 h-24 rounded-md border-2 border-gray-200 cursor-pointer hover:border-orange-500 peer-checked:border-orange-500 transition-colors"
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-700"
                        >
                          <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                          <path d="M2 20h20"></path>
                          <path d="M14 12v.01"></path>
                        </svg>
                      </div>
                    </Label>
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs text-center">
                    Designing a new garden
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative mb-2">
                    <RadioGroupItem
                      value="option3"
                      id="location3"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="location3"
                      className="flex flex-col items-center justify-center w-24 h-24 rounded-md border-2 border-gray-200 cursor-pointer hover:border-orange-500 peer-checked:border-orange-500 transition-colors"
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-700"
                        >
                          <path d="M12 19V5"></path>
                          <path d="M5 12l7-7 7 7"></path>
                        </svg>
                      </div>
                    </Label>
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs text-center">
                    Creating a new garden
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative mb-2">
                    <RadioGroupItem
                      value="option4"
                      id="location4"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="location4"
                      className="flex flex-col items-center justify-center w-24 h-24 rounded-md border-2 border-gray-200 cursor-pointer hover:border-orange-500 peer-checked:border-orange-500 transition-colors"
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-700"
                        >
                          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                          <path d="M16 16h5v5"></path>
                        </svg>
                      </div>
                    </Label>
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs text-center">
                    Creating a new garden
                  </span>
                </div>
              </RadioGroup>

              {isStepEditing(6) && (
                <div className="flex justify-between mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-1 border-gray-300 text-gray-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 7 */}
        {isStepVisible(7) && (
          <div
            ref={(el) => (stepRefs.current[6] = el)}
            className={`p-6 border-b ${isStepActive(7) ? "bg-orange-50" : ""}`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isStepCompleted(7)
                    ? "bg-orange-500 text-white"
                    : isStepActive(7)
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {isStepCompleted(7) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span className="text-xs">7</span>
                )}
              </div>
              <h4
                className={`font-medium ${
                  isStepActive(7) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                How can the garden be reached?
              </h4>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Through the house" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">Through the house</SelectItem>
                    <SelectItem value="side">
                      Through a side entrance
                    </SelectItem>
                    <SelectItem value="back">
                      Through a back entrance
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Through the garage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="garage">Through the garage</SelectItem>
                    <SelectItem value="driveway">
                      Through the driveway
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="Through the neighbor's garden" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neighbor">
                      Through the neighbor's garden
                    </SelectItem>
                    <SelectItem value="public">Through public space</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full border-gray-300 rounded-md h-10">
                    <SelectValue placeholder="With large vehicles" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">
                      Yes, large vehicles can access
                    </SelectItem>
                    <SelectItem value="limited">
                      Limited access for large vehicles
                    </SelectItem>
                    <SelectItem value="no">
                      No access for large vehicles
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {isStepEditing(7) && (
                <div className="flex justify-between mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-1 border-gray-300 text-gray-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 8 */}
        {isStepVisible(8) && (
          <div
            ref={(el) => (stepRefs.current[7] = el)}
            className={`p-6 border-b ${isStepActive(8) ? "bg-orange-50" : ""}`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isStepCompleted(8)
                    ? "bg-orange-500 text-white"
                    : isStepActive(8)
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {isStepCompleted(8) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span className="text-xs">8</span>
                )}
              </div>
              <h4
                className={`font-medium ${
                  isStepActive(8) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                Add photos or drawings
              </h4>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">
                  Add photos or drawings{" "}
                  <span className="text-xs text-gray-500">(optional)</span>
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Adding photos of your current garden makes it easier for the
                  gardener to assess the job.
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                  <Button
                    variant="outline"
                    className="mb-2 flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Upload file</span>
                  </Button>
                  <p className="text-xs text-gray-500">
                    or drag and drop files here
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <span>
                    Select your files, drag and drop, or take a photo.
                  </span>
                </div>

                <div className="mt-4">
                  <Input
                    type="text"
                    placeholder="Or, paste a URL here"
                    className="w-full border-gray-300 rounded-md h-10"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">
                  Additional information{" "}
                  <span className="text-xs text-gray-500">(optional)</span>
                </h4>
                <Textarea
                  placeholder="Add any additional details that might be helpful"
                  className="w-full border-gray-300 rounded-md min-h-[100px]"
                />
              </div>

              {isStepEditing(8) && (
                <div className="flex justify-between mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-1 border-gray-300 text-gray-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 9 */}
        {isStepVisible(9) && (
          <div
            ref={(el) => (stepRefs.current[8] = el)}
            className={`p-6 border-b ${isStepActive(9) ? "bg-orange-50" : ""}`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isStepCompleted(9)
                    ? "bg-orange-500 text-white"
                    : isStepActive(9)
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {isStepCompleted(9) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span className="text-xs">9</span>
                )}
              </div>
              <h4
                className={`font-medium ${
                  isStepActive(9) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                Receive responses from professionals in your area
              </h4>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">
                  Receive responses from professionals in your area
                </h4>
                <Input
                  type="text"
                  placeholder="Enter your postal code"
                  className="w-full border-gray-300 rounded-md h-10"
                />
              </div>

              {isStepEditing(9) && (
                <div className="flex justify-between mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-1 border-gray-300 text-gray-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 10 */}
        {isStepVisible(10) && (
          <div
            ref={(el) => (stepRefs.current[9] = el)}
            className={`p-6 ${isStepActive(10) ? "bg-orange-50" : ""}`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isStepCompleted(10)
                    ? "bg-orange-500 text-white"
                    : isStepActive(10)
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {isStepCompleted(10) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span className="text-xs">10</span>
                )}
              </div>
              <h4
                className={`font-medium ${
                  isStepActive(10) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                Create an account to manage your job
              </h4>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">
                  Create an account to manage your job
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  This allows you to track responses and communicate with
                  professionals.
                </p>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="name" className="text-sm mb-1 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full border-gray-300 rounded-md h-10"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm mb-1 block">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="w-full border-gray-300 rounded-md h-10"
                    />
                  </div>
                  <div className="flex items-start space-x-2 mt-4">
                    <Checkbox
                      id="terms"
                      className="mt-1 rounded border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:text-white"
                    />
                    <Label htmlFor="terms" className="text-xs text-gray-500">
                      I agree to the terms and conditions and privacy policy. I
                      understand that professionals will contact me about my
                      request.
                    </Label>
                  </div>
                </div>
              </div>

              {isStepEditing(10) && (
                <div className="flex justify-between mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-1 border-gray-300 text-gray-700"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Submit
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GardeningServicePage;
