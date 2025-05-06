// 'use client'
import { GetAllEnquiry } from '@/action/enquiries.action'
import { GetAllMembers } from '@/action/member.action'
import { DataTable } from '@/components/custom/data-table'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

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
        accessorKey: 'followupDate',
        header: 'Follow Up',
        cellClassName: 'capitalize',
    },
    {
        accessorKey: 'type',
        header: 'Type',
        cellClassName: 'capitalize',
    },
    {
        accessorKey: 'message',
        header: 'Message',
    }
]

const MemberPage = async (props: Props) => {

    return (
        <div className='max-w-xl w-full mx-auto space-y-6 p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Enquiries</h1>
                <Link href={'/enquiries/new'}>
                <Button>Create Enquiry</Button>
                </Link>
            </div>
            <Separator />
            <DataTable dataRows={await GetAllEnquiry()} columns={columns} />
        </div>
    )
}

export default MemberPage