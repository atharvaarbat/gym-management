'use client'
import { GetAllMembers } from '@/action/member.action'
import { DeleteServiceById, GetAllServices, ServiceResponse } from '@/action/service.action'
import { DataTable } from '@/components/custom/data-table'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useLoading } from '@/hooks/use-loading'
import { IconTrash } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { toast } from 'sonner'
import { CreatFoodItem } from './Create-food'
import { DeleteFoodItem, FoodItemResponse, GetAllFoodItems } from '@/action/food-item.action'

type Props = {}
const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'calories',
    header: 'Calories',
  },
  {
    accessorKey: 'protein',
    header: 'Protein',
  },
  {
    accessorKey: 'carbs',
    header: 'Carbs',
  },
  {
    accessorKey: 'fats',
    header: 'Fats',
  }
]

const DeleteColumn = [{
  accessorKey: 'id',
  header: 'Action',
  cellContent: <Button variant="destructive" size={"icon"} className='cursor-pointer'><IconTrash size={16} /></Button>,
  onClick: async (rowId: any) => {
    const result = await DeleteFoodItem(rowId)
    toast.success("Food item deleted successfully")
    window.location.reload()
  }
}]

const MemberPage = (props: Props) => {
  const [serviceList, setServiceList] = React.useState<FoodItemResponse[]>([])
  const { showLoading, hideLoading, isLoading } = useLoading()
  useEffect(() => {
    async function fetchData() {
      const data = await GetAllFoodItems()
      setServiceList(data)
      hideLoading()
    }
    showLoading()
    fetchData()

  }, [])

  return (
    <div className='max-w-xl w-full mx-auto space-y-6 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Food Items</h1>
        <CreatFoodItem/>
      </div>
      <Separator />
      <DataTable dataRows={serviceList} columns={columns} actionColumns={DeleteColumn} isLoading={isLoading} />
    </div>
  )
}

export default MemberPage