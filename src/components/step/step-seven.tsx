"use client";

import refresh from "@/assets/step-two/Refresh.png";
import fi_11279571 from "@/assets/step-two/fi_11279571.png";
import fi_1174712 from "@/assets/step-two/fi_1174712.png";
import fi_2551501 from "@/assets/step-two/fi_2551501.png";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import FormSection from "../ui/form-section";

interface StepSevenProps {
  formData: { gardenLocation: Record<string, boolean> };
  updateFormData: (data: { gardenLocation: Record<string, boolean> }) => void;
}

interface LocationCard {
  id: string;
  title: string;
  image: StaticImageData;
  description?: string;
}

export default function StepSeven({ formData, updateFormData }: StepSevenProps) {
  const locationCards: LocationCard[] = [
    {
      id: "new_residential_garden",
      title: "New Residential Garden",
      image: fi_11279571,
    },
    {
      id: "new_community_garden",
      title: "New Community Garden",
      image: fi_1174712,
    },
    {
      id: "garden_renovation",
      title: "Garden Renovation",
      image: fi_2551501,
    },
    {
      id: "commercial_garden",
      title: "Commercial Garden",
      image: refresh,
    }
  ];

  const [selectedCards, setSelectedCards] = useState<Record<string, boolean>>(
    formData.gardenLocation || {}
  );

  const handleCardClick = (cardId: string) => {
    const newSelection = {
      ...selectedCards,
      [cardId]: !selectedCards[cardId]
    };
    setSelectedCards(newSelection);
    updateFormData({ gardenLocation: newSelection });
  };

  return (
    <FormSection title="What is the location of the garden?" subtitle="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {locationCards.map((card) => (
          <div
            key={card.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
              selectedCards[card.id] 
                ? "border-orange-500 bg-orange-50 shadow-sm" 
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
      gardenLocation: {
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
            <div className="flex flex-col items-center my-2">
              <div className="bg-blue-100/60 rounded-full p-3 mb-3">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h4 className="font-medium text-center">{card.title}</h4>
             
            </div>
          </div>
        ))}
      </div>
    </FormSection>
  );
}