'use client'
import { EnquiryResponse, GetAllEnquiry } from '@/action/enquiries.action'
import { GetAllMembers } from '@/action/member.action'
import { DataTable } from '@/components/custom/data-table'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useLoading } from '@/hooks/use-loading'
import Link from 'next/link'
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

const EnquiryPage =  (props: Props) => {
    const [enquiries, setEnquiries] = React.useState<EnquiryResponse[]>([])
    const {isLoading} = useLoading()
    useEffect(() => {
        const fetchData = async () => {
            const data = await GetAllEnquiry()
            setEnquiries(data)
        }
        fetchData()
    })
    return (
        <div className='max-w-xl w-full mx-auto space-y-6 p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Enquiries</h1>
                <Link href={'/enquiries/new'}>
                <Button>Create Enquiry</Button>
                </Link>
            </div>
            <Separator />
            <DataTable dataRows={enquiries} columns={columns} isLoading={isLoading} />
        </div>
    )
}

export default EnquiryPage