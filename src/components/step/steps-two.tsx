"use client";

import FormSection from "../ui/form-section";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { useState } from "react";
import type { StaticImageData } from "next/image";
import more from "@/assets/step-two/More.png";
import refresh from "@/assets/step-two/Refresh.png";
import fi_11279571 from "@/assets/step-two/fi_11279571.png";
import fi_1174712 from "@/assets/step-two/fi_1174712.png";
import fi_2551501 from "@/assets/step-two/fi_2551501.png";

interface StepTwoProps {
  formData: { selectedServices: Record<string, boolean> };
  updateFormData: (data: { selectedServices: Record<string, boolean> }) => void;
}

interface ServiceCard {
  id: string;
  title: string;
  image: StaticImageData; // Using StaticImageData for the imported image
  description?: string;
}

export default function StepTwo({ formData,updateFormData }: StepTwoProps) {
  
console.log("formData", formData);
  const serviceCards: ServiceCard[] = [
    {
      id: "design-drawings",
      title: "Design Drawings",
      image: fi_11279571,
      description: "Detailed technical drawings"
    },
    {
      id: "material-selection",
      title: "Material Selection",
      image: fi_1174712,
      description: "Choose appropriate materials"
    },
    {
      id: "structural-analysis",
      title: "Structural Analysis",
      image: fi_2551501,
      description: "Engineering calculations"
    },
    {
      id: "project-management",
      title: "Project Management",
      image: more,
      description: "Oversee construction process"
    },
    {
      id: "maintenance-planning",
      title: "Maintenance Planning",
      image: refresh,
      description: "Plan for future upkeep"
    }
    // You can add more cards here if needed
    // {
    //   id: "refresh-services",
    //   title: "Refresh Services",
    //   image: refresh,
    //   description: "Update existing designs"
    // }
  ];

  const [selectedCards, setSelectedCards] = useState<Record<string, boolean>>({});

  const handleCardClick = (cardId: string) => {
    const newSelection = {
      ...selectedCards,
      [cardId]: !selectedCards[cardId]
    };
    setSelectedCards(newSelection);
    updateFormData({ selectedServices: newSelection });
  };

  return (
    <FormSection title="What needs to be done?" subtitle="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {serviceCards.map((card) => (
          <div
            key={card.id}
            className={`border rounded-lg p-4  cursor-pointer transition-all hover:shadow-md ${
              selectedCards[card.id] 
                ? "border-orange-500 bg-[#EEEEEECC]/80 shadow-sm" 
                : "border-gray-200"
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="flex justify-end">
  <Checkbox
  checked={!!selectedCards[card.id]}
  onCheckedChange={(checked) => {
    setSelectedCards(prev => ({...prev, [card.id]: !!checked}));
    updateFormData({ 
      selectedServices: {
        ...selectedCards,
        [card.id]: !!checked
      } 
    });
  }}
  onClick={(e) => e.stopPropagation()}
  className="h-5 w-5 border-gray-300"
  style={{
    backgroundColor: selectedCards[card.id] ? 'rgba(51, 51, 51, 0.50)' : 'transparent',
    borderColor: selectedCards[card.id] ? 'rgba(51, 51, 51, 0.50)' : '#D1D5DB', // default border-gray-300
    transition: 'background-color 0.2s, border-color 0.2s',
  }}
/>
            </div>
            <div className="flex flex-col items-center mt-2">
              <div className="bg-blue-100/60 rounded-full p-3 mb-3">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h4 className="font-medium text-center">{card.title}</h4>
              {card.description && (
                <p className="text-sm text-gray-500 text-center mt-1">
                  {card.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </FormSection>
  );
}