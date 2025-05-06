import { useId } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface RadioItem {
  value: any
  label: string
}

interface RadioSelectProps {
  items: RadioItem[]
  defaultValue?: any
  onSelect?: (value: string) => void
  title?: string
  className?: string
  itemClassName?: string
}

export function RadioSelect({
  items,
  defaultValue,
  onSelect,
  title = "Select an option",
  className = "",
  itemClassName = "",
}: RadioSelectProps) {
  const id = useId()

  return (
    <fieldset className={`space-y-4 ${className}`}>
      {title && (
        <legend className="text-foreground text-sm leading-none font-medium">
          {title}
        </legend>
      )}
      <RadioGroup 
        className="flex flex-wrap gap-2" 
        defaultValue={defaultValue}
        onValueChange={onSelect}
      >
        {items.map((item) => (
          <div
            key={`${id}-${item.value}`}
            className={`border-input has-data-[state=checked]:border-primary/50 relative flex flex-col items-start gap-4 rounded-md border p-3 shadow-xs outline-none ${itemClassName}`}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className="after:absolute after:inset-0"
              />
              <Label htmlFor={`${id}-${item.value}`}>{item.label}</Label>
            </div>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  )
}