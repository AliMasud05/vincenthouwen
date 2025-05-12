// "use client"

// import { useSearchParams, useRouter } from "next/navigation"
// import { useState } from "react"
// import Link from "next/link"

// type Section = {
//   id: number
//   title: string
//   isActive: boolean
//   isCompleted: boolean
// }

// export default function FormPage() {
//   const searchParams = useSearchParams()
//   const router = useRouter()
//   const postalCode = searchParams.get("postalCode") || ""

//   const [sections, setSections] = useState<Section[]>([
//     { id: 1, title: "What needs to be done?", isActive: true, isCompleted: false },
//     { id: 2, title: "Are there already design drawings available?", isActive: false, isCompleted: false },
//     { id: 3, title: "What is the size of the garden in m²?", isActive: false, isCompleted: false },
//     { id: 4, title: "Does the garden require regular maintenance?", isActive: false, isCompleted: false },
//     { id: 5, title: "What needs to be done in the garden?", isActive: false, isCompleted: false },
//     { id: 6, title: "What is the location of the garden?", isActive: false, isCompleted: false },
//     { id: 7, title: "How can the garden be reached?", isActive: false, isCompleted: false },
//     { id: 8, title: "Add photos or drawings", isActive: false, isCompleted: false },
//     { id: 9, title: "Additional information", isActive: false, isCompleted: false },
//     { id: 10, title: "Receive responses from professionals in your area", isActive: false, isCompleted: false },
//     { id: 11, title: "Create an account to manage your job", isActive: false, isCompleted: false },
//   ])

//   const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string[] }>({
//     gardenWork: [],
//     designDrawings: "",
//     gardenSize: "",
//     maintenance: "",
//     gardenTasks: [],
//     gardenLocation: "",
//     gardenAccess: "",
//   })

//   const handleOptionChange = (section: string, option: string, isMultiple = false) => {
//     setSelectedOptions((prev) => {
//       if (isMultiple) {
//         // For checkboxes (multiple selection)
//         const currentOptions = [...(prev[section] || [])]
//         if (currentOptions.includes(option)) {
//           return { ...prev, [section]: currentOptions.filter((item) => item !== option) }
//         } else {
//           return { ...prev, [section]: [...currentOptions, option] }
//         }
//       } else {
//         // For radio buttons (single selection)
//         return { ...prev, [section]: [option] }
//       }
//     })
//   }

//   const handleNext = (sectionId: number) => {
//     setSections((prev) =>
//       prev.map((section) => {
//         if (section.id === sectionId) {
//           return { ...section, isActive: false, isCompleted: true }
//         } else if (section.id === sectionId + 1) {
//           return { ...section, isActive: true }
//         }
//         return section
//       }),
//     )
//   }

//   const handleBack = (sectionId: number) => {
//     setSections((prev) =>
//       prev.map((section) => {
//         if (section.id === sectionId) {
//           return { ...section, isActive: false }
//         } else if (section.id === sectionId - 1) {
//           return { ...section, isActive: true, isCompleted: false }
//         }
//         return section
//       }),
//     )
//   }

//   return (
//     <main className="min-h-screen bg-gray-50 p-4 flex justify-center">
//       <div className="w-full container mx-auto bg-white p-6 rounded-md shadow-sm">
//         <div className="flex items-center gap-2 mb-6">
//           <div className="h-10 w-10 bg-orange-500 rounded-md flex items-center justify-center">
//             <span className="text-white font-bold text-xl">H</span>
//           </div>
//           <span className="font-medium">Hovenierslokaal</span>
//         </div>

//         <div className="mb-8">
//           <h1 className="text-lg font-medium text-gray-700 mb-4">Garden design</h1>
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-medium">Find Gardeners in Harderwijk</h2>
//             <button className="text-gray-400">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-x"
//               >
//                 <path d="M18 6 6 18" />
//                 <path d="m6 6 12 12" />
//               </svg>
//             </button>
//           </div>
//           <p className="text-sm text-gray-500 mb-6">Describe your job and get in touch with gardeners in Harderwijk.</p>

//           <div className="mb-6">
//             <p className="text-sm font-medium text-gray-700 mb-1">Postal code of the job</p>
//             <p className="text-sm">{postalCode}</p>
//           </div>

//           {/* Section 1: What needs to be done? */}
//           {sections[0].isActive && (
//             <div className="mb-6">
//               <h3 className="font-medium mb-4">What needs to be done?</h3>
//               <div className="grid grid-cols-4 gap-4 mb-6">
//                 <div
//                   className={`border rounded-md p-3 flex flex-col items-center text-center cursor-pointer ${selectedOptions.gardenWork?.includes("Creating a new garden") ? "border-orange-500" : ""}`}
//                   onClick={() => handleOptionChange("gardenWork", "Creating a new garden", true)}
//                 >
//                   <div className="bg-gray-100 p-2 rounded-md mb-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-shovel"
//                     >
//                       <path d="M2 22v-5l5-5 5 5-5 5z" />
//                       <path d="M9.5 14.5 16 8" />
//                       <path d="m17 2 5 5-.5.5-5.5 5.5-5-5L17 2.5z" />
//                     </svg>
//                   </div>
//                   <span className="text-xs">Creating a new garden</span>
//                 </div>
//                 <div
//                   className={`border rounded-md p-3 flex flex-col items-center text-center cursor-pointer ${selectedOptions.gardenWork?.includes("Designing a new garden") ? "border-orange-500" : ""}`}
//                   onClick={() => handleOptionChange("gardenWork", "Designing a new garden", true)}
//                 >
//                   <div className="bg-gray-100 p-2 rounded-md mb-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-pencil-ruler"
//                     >
//                       <path d="m15 5 4 4" />
//                       <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
//                       <path d="m8 6 2-2" />
//                       <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
//                       <path d="m18 16 2-2" />
//                       <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
//                     </svg>
//                   </div>
//                   <span className="text-xs">Designing a new garden</span>
//                 </div>
//                 <div
//                   className={`border rounded-md p-3 flex flex-col items-center text-center cursor-pointer ${selectedOptions.gardenWork?.includes("Creating a new garden") ? "border-orange-500" : ""}`}
//                   onClick={() => handleOptionChange("gardenWork", "Creating a new garden", true)}
//                 >
//                   <div className="bg-gray-100 p-2 rounded-md mb-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-hammer"
//                     >
//                       <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
//                       <path d="M17.64 15 22 10.64" />
//                       <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
//                     </svg>
//                   </div>
//                   <span className="text-xs">Creating a new garden</span>
//                 </div>
//                 <div
//                   className={`border rounded-md p-3 flex flex-col items-center text-center cursor-pointer ${selectedOptions.gardenWork?.includes("Creating a new garden") ? "border-orange-500" : ""}`}
//                   onClick={() => handleOptionChange("gardenWork", "Creating a new garden", true)}
//                 >
//                   <div className="bg-gray-100 p-2 rounded-md mb-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-refresh-ccw"
//                     >
//                       <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
//                       <path d="M3 3v5h5" />
//                       <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
//                       <path d="M16 21h5v-5" />
//                     </svg>
//                   </div>
//                   <span className="text-xs">Creating a new garden</span>
//                 </div>
//               </div>

//               <div className="flex justify-between">
//                 <Link href="/" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="mr-1"
//                   >
//                     <path d="m12 19-7-7 7-7" />
//                     <path d="M19 12H5" />
//                   </svg>
//                   Back
//                 </Link>
//                 <button
//                   onClick={() => handleNext(1)}
//                   className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center"
//                   disabled={!selectedOptions.gardenWork?.length}
//                 >
//                   Next
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="ml-1"
//                   >
//                     <path d="M5 12h14" />
//                     <path d="m12 5 7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Section 2: Are there already design drawings available? */}
//           {sections[1].isActive && (
//             <div className="mb-6">
//               <h3 className="font-medium mb-4">Are there already design drawings available?</h3>
//               <div className="space-y-3 mb-6">
//                 <div
//                   className={`border rounded-md p-3 flex items-center cursor-pointer ${selectedOptions.designDrawings === "Yes, I have a complete overview" ? "border-orange-500" : ""}`}
//                   onClick={() => handleOptionChange("designDrawings", "Yes, I have a complete overview")}
//                 >
//                   <span className="text-sm">Yes, I have a complete overview</span>
//                 </div>
//                 <div
//                   className={`border rounded-md p-3 flex items-center cursor-pointer ${selectedOptions.designDrawings === "Partially, I have some ideas" ? "border-orange-500" : ""}`}
//                   onClick={() => handleOptionChange("designDrawings", "Partially, I have some ideas")}
//                 >
//                   <span className="text-sm">Partially, I have some ideas</span>
//                 </div>
//                 <div
//                   className={`border rounded-md p-3 flex items-center cursor-pointer ${selectedOptions.designDrawings === "No" ? "border-orange-500" : ""}`}
//                   onClick={() => handleOptionChange("designDrawings", "No")}
//                 >
//                   <span className="text-sm">No</span>
//                 </div>
//               </div>

//               <div className="flex justify-between">
//                 <button
//                   onClick={() => handleBack(2)}
//                   className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="mr-1"
//                   >
//                     <path d="m12 19-7-7 7-7" />
//                     <path d="M19 12H5" />
//                   </svg>
//                   Back
//                 </button>
//                 <button
//                   onClick={() => handleNext(2)}
//                   className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center"
//                   disabled={!selectedOptions.designDrawings}
//                 >
//                   Next
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="ml-1"
//                   >
//                     <path d="M5 12h14" />
//                     <path d="m12 5 7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Display completed sections */}
//           {sections
//             .filter((section) => section.isCompleted)
//             .map((section) => (
//               <div key={section.id} className="mb-4 p-3 bg-gray-50 rounded-md">
//                 <div className="flex justify-between items-center">
//                   <h3 className="font-medium text-sm">{section.title}</h3>
//                   <div className="text-sm text-gray-500">
//                     {section.id === 1 && selectedOptions.gardenWork?.join(", ")}
//                     {section.id === 2 && selectedOptions.designDrawings}
//                   </div>
//                 </div>
//               </div>
//             ))}

//           {/* Additional sections would be implemented similarly */}
//           {sections.slice(2).some((section) => section.isActive) && (
//             <div className="mb-6">
//               <h3 className="font-medium mb-4">{sections.find((section) => section.isActive)?.title}</h3>
//               <p className="text-gray-500 mb-6">This section would contain the appropriate form fields</p>

//               <div className="flex justify-between">
//                 <button
//                   onClick={() => {
//                     const activeSection = sections.find((section) => section.isActive)
//                     if (activeSection) handleBack(activeSection.id)
//                   }}
//                   className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="mr-1"
//                   >
//                     <path d="m12 19-7-7 7-7" />
//                     <path d="M19 12H5" />
//                   </svg>
//                   Back
//                 </button>
//                 <button
//                   onClick={() => {
//                     const activeSection = sections.find((section) => section.isActive)
//                     if (activeSection) handleNext(activeSection.id)
//                   }}
//                   className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center"
//                 >
//                   Next
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="ml-1"
//                   >
//                     <path d="M5 12h14" />
//                     <path d="m12 5 7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   )
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page