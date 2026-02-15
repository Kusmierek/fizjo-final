import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
    >
      {/* Decorative dots */}
      <circle cx="45" cy="8" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="12" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="52" cy="18" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="48" cy="22" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="53" cy="26" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="46" cy="16" r="1" fill="currentColor" opacity="0.4" />
      
      {/* Phi symbol stylized as spine/nature */}
      <path
        d="M30 8C30 8 22 16 22 30C22 44 30 52 30 52"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 8C30 8 38 16 38 30C38 44 30 52 30 52"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <line
        x1="18"
        y1="30"
        x2="42"
        y2="30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Leaf accent */}
      <path
        d="M12 35C12 35 8 42 12 48C16 42 12 35 12 35Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M12 35C12 35 18 40 18 46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  )
}
