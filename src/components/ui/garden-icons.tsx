interface IconProps {
  className?: string
}

export function GardenIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22c6.5-1 9-6.5 9-11 0-3-2-4-2-4H5s-2 1-2 4c0 4.5 2.5 10 9 11z" />
      <path d="M8 9h8" />
      <path d="M8 13h8" />
      <path d="M12 6v10" />
    </svg>
  )
}

export function RenovationIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 20h20" />
      <path d="M5 20V8.2c0-.4.3-.8.7-.8h3.6c.4 0 .7.4.7.8V20" />
      <path d="M14 20v-7.5c0-.4.3-.5.7-.5h3.6c.4 0 .7.1.7.5V20" />
      <path d="M10 8V6c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2" />
    </svg>
  )
}

export function PlantIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 10V3" />
      <path d="M9 6.8C7 6.4 5 7.5 5 9.5c0 2.5 4 5.5 7 6.5" />
      <path d="M15 6.8c2-.4 4 .7 4 2.7 0 2.5-4 5.5-7 6.5" />
      <path d="M12 22v-3" />
      <path d="M9 19h6" />
    </svg>
  )
}

export function LandscapeIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 22l10-10 10 10" />
      <path d="M14 5l-4 4 4 4" />
      <path d="M20 5l-4 4 4 4" />
    </svg>
  )
}
