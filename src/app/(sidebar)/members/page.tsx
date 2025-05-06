'use client'
import { GetAllMembers, getAllMembersWithActiveSale } from '@/action/member.action'
import { DataTable } from '@/components/custom/data-table'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import {  useRouter } from 'next/navigation'
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
  const router  = useRouter();
  const [memberList, setMemberList] = React.useState<any[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  useEffect(() => {
    async function fetchData() {
      const data = await getAllMembersWithActiveSale()
      console.log(await getAllMembersWithActiveSale())
      setMemberList(data)
      setIsLoading(false)
    }
    setIsLoading(true)
    fetchData()

  }, [])

  return (
    <div className='max-w-xl w-full mx-auto space-y-6 p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Members</h1>
        <Link href={'/members/new'}>
        <Button>Create Member</Button>
        </Link>
      </div>
      <Separator />
      <DataTable dataRows={memberList} isLoading={isLoading} columns={columns} onItemClick={(row) => router.push(`/members/${row.id}`)} />
    </div>
  )
}

export default MemberPage