import { cn } from "@/lib/utils"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface RadioOptionProps {
  id: string
  label: string
  isSelected: boolean
  className?: string
}

export function RadioOption({ id, label, isSelected, className }: RadioOptionProps) {
  return (
    <Label
      htmlFor={id}
      className={cn(
        "flex items-center justify-between border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors",
        isSelected && "bg-gray-50",
        className,
      )}
    >
      <span className="text-gray-700">{label}</span>
      <RadioGroupItem value={id} id={id} className="border-gray-400" />
    </Label>
  )
}
