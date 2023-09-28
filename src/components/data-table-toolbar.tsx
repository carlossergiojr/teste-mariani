'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { newStatuses } from './data/data'
import { DataTableFacetedFilter } from './data-table-faceted-filter'
import { Select } from './Select'
import { DateRangePicker } from './DateRangePicker'
import { Search } from 'lucide-react'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between ">
      <div className="flex flex-1 flex-wrap items-center gap-y-4 space-x-2">
        <Input
          placeholder="Filtrar campos"
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) => {
            table.getColumn('title')?.setFilterValue(event.target.value)
          }}
          className=" w-[150px]"
        />

        <Select placeHolder="Selecionar Campo" />
        {/* <Select placeHolder="Campo específico" /> */}
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title="Campo específico"
            options={newStatuses}
          />
        )}

        {/* {table.getColumn('priority') && (
          <DataTableFacetedFilter
            column={table.getColumn('priority')}
            title="Campos selecionados"
            options={priorities}
          />
        )} */}
        <DateRangePicker />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Limpar
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <Button className="ml-auto">
        <Search className="h-4 w-4 " />
      </Button>

      {/* <DataTableViewOptions table={table} /> */}
    </div>
  )
}
