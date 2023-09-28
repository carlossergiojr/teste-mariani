'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

const frameworks = [
  {
    value: 'assunto',
    label: 'Assunto'
  },
  {
    value: 'secretario',
    label: 'Secretario'
  },
  {
    value: 'palestrante',
    label: 'Palestrante'
  }
]

type SelectProps = {
  placeHolder?: string
}

export function Select({ placeHolder }: SelectProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    console.log('frameworks', frameworks)
    const found = frameworks.find((framework) => framework.value === value)
    console.log('found', found)
    console.log('value aqui', value)
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[160px] justify-between text-xs text-muted-foreground"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : placeHolder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Pesquisar Campo" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === framework.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
