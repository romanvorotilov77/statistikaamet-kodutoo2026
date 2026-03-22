import type { ReactNode } from "react"

type ButtonProps = {
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  disabled?: boolean
  className?: string
  children: ReactNode
}

export function Button({
  type = "button",
  onClick,
  disabled = false,
  className = "",
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`title-medium px-6 py-3 bg-black text-white border-2 border-transparent hover:border-black hover:bg-white hover:text-black active:bg-black active:text-white active:border-black transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  )
}
