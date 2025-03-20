import * as React from "react"
import { cn } from "@/lib/utils"

function Input({
  className,
  type = "text",
  placeholder = "Enter detail",
  spanText = "Enter",
  value,
  ...props
}) {
  return (
    <div className={cn("flex flex-col-reverse", className)}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={cn(
          "peer outline-none border-b-2 pl-2 py-1 duration-500 border-black",
          "placeholder:duration-500",
          "placeholder:absolute focus:placeholder:pt-10",
          "dark:border-white border-black focus:border-rose-700 dark:focus:border-rose-700",
          "dark:text-white text-black"
        )}
        {...props}
      />
      <span
        className={cn(
          " duration-500 opacity-0",
          "peer-focus:opacity-100 peer-not-placeholder-shown:opacity-100",
          "-translate-y-5 peer-focus:translate-y-0 peer-not-placeholder-shown:translate-y-0",
          "text-rose-700 text-xl font-bold"
        )}
      >
        {spanText}
      </span>
    </div>
  )
}

export { Input }