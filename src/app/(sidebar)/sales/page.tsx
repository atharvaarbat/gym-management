'use client'
import { GetAllMembers } from '@/action/member.action'
import { DeleteSaleById, GetAllSalesWithExpand, SalesResponse } from '@/action/sales.action'
import { DataTable } from '@/components/custom/data-table'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { IconTrash } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

type Props = {}
const columns = [
  {
    accessorKey: 'service_name',
    header: 'Service Name',
  },
  {
    accessorKey: 'member_name',
    header: 'Member Name',
  },
  {
    accessorKey: 'startDate',
    header: 'Start',
    cellClassName: 'capitalize',
  },
  {
    accessorKey: 'endDate',
    header: 'End',
    cellClassName: 'capitalize',
  },
  {
    accessorKey: 'dueAmount',
    header: 'Due',
  },
]
const DeleteColumn = {
  accessorKey: 'id',
  header: 'Action',
  cellContent: <Button variant="destructive" size={"icon"} className='cursor-pointer'><IconTrash size={16} /></Button>,
  onClick: async (rowId: any) => {
    const result = await DeleteSaleById(rowId)
    toast.success("Sales deleted successfully")
    window.location.reload()
  }
}
const SalesPage = (props: Props) => {
  const [salesList, setSalesList] = React.useState<SalesResponse[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  useEffect(() => {
    async function fetchData() {
      const data = await GetAllSalesWithExpand()
      setSalesList(data)
      setIsLoading(false)
    }
    setIsLoading(true)
    fetchData()
  }, [])
  return (
    <div className='max-w-xl w-full mx-auto space-y-6 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Sales</h1>
        <Link href={'/sales/new'}>
          <Button>Create Sales</Button>
        </Link>
      </div>
      <Separator />
      <DataTable dataRows={salesList} actionColumn={DeleteColumn} columns={columns} isLoading={isLoading} />
    </div>
  )
}

export default SalesPage