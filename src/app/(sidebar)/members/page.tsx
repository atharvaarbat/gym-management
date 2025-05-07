'use client'
import { GetAllMembers, getAllMembersWithActiveSale, getAllActiveMembers, getAllInActiveMembers } from '@/action/member.action'
// import { getAllActiveMembers } from '@/action/sales.action'
import { DataTable } from '@/components/custom/data-table'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLoading } from '@/hooks/use-loading'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}
const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'activeServiceName',
    header: 'Active Service',
    cellClassName: 'capitalize',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
]

const MemberPage = (props: Props) => {
  const router = useRouter();
  const [memberList, setMemberList] = React.useState<any[]>([])
  const [value, setValue] = React.useState<string>('')
  // const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { showLoading, hideLoading, isLoading } = useLoading()
  useEffect(() => {
    async function fetchData() {
      const data = await getAllMembersWithActiveSale()
      // console.log(await getAllActiveMembers())
      setMemberList(data)
      hideLoading()
    }
    showLoading()
    fetchData()

  }, [])
  useEffect(() => {
    async function fetchData() {
      if (value === '0') {
        const data = await getAllMembersWithActiveSale()
        setMemberList(data)
        hideLoading()
        return
      } else if (value === '1') {
        const data = await getAllActiveMembers()
        setMemberList(data)
        hideLoading()
        return
      } else if (value === '2') {
        const data = await getAllInActiveMembers()
        setMemberList(data)
        hideLoading()
        return
      }
      hideLoading()
    }
    showLoading()
    fetchData()
  }, [value])

  return (
    <div className='max-w-xl w-full mx-auto space-y-6 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Members</h1>
        <Link href={'/members/new'}>
          <Button>Create Member</Button>
        </Link>
      </div>
      <Separator />
      <Tabs onValueChange={(e) => setValue(e)} defaultValue='0'>
        <TabsList >
          <TabsTrigger value='0'>All</TabsTrigger>
          <TabsTrigger value='1'>Active</TabsTrigger>
          <TabsTrigger value='2'>In active</TabsTrigger>
        </TabsList>
      </Tabs>
      <DataTable dataRows={memberList} isLoading={isLoading} columns={columns} onItemClick={(row) => router.push(`/members/${row.id}`)} />
    </div>
  )
}

export default MemberPage