import type { ReactNode } from "react"

interface FormSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function FormSection({ title, subtitle, children }: FormSectionProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}
