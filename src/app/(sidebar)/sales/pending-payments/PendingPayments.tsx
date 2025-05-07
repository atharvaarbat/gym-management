'use client'
import { GetSalesWithPendingAmount } from '@/action/sales.action'
import { DataTable } from '@/components/custom/data-table'
import { Button } from '@/components/ui/button'
import { IconSend } from '@tabler/icons-react'
import { on } from 'events'
import React from 'react'
import { PayPendingDialog } from './PayPendingButton'

type Props = {
    pendingPayments: {
        sales: any[],
        total: number
    }
}

const columns = [
    {
        accessorKey: 'member_name',
        header: 'Member',
    },
    {
        accessorKey: 'member_phone',
        header: 'Phone',
    },
    {
        accessorKey: 'service_name',
        header: 'Service',
    },
    {
        accessorKey: 'due',
        header: 'Due',
    },
]


const PendingPayments = ({
    pendingPayments
}: Props) => {
    
    const actions = [
        {
            accessorKey: 'id',
            header: 'Message',
            cellContent: <Button variant="destructive" className='cursor-pointer'><IconSend size={16} /></Button>,
            onClickGetRow: (row: any) => {
                console.log(row)
                const message = `Hi ${row.member_name}, your payment for ${row.service_name} of ₹${row.due} is due, thank you for choosing us. Stay healthy Stay strong.%0A%0A -Team Synergy 💪🏻`
                window.open(`https://api.whatsapp.com/send?phone=91${row.member_phone}&text=${message}`)
            },
            // cellContentGetRow: (row: any) => <Button variant="secondary" className='cursor-pointer'><IconSend size={16} /></Button>,
        },
        {
            accessorKey: 'id',
            header: 'Pay',
            cellContent: <Button className='cursor-pointer'>Pay</Button>,
            cellContentGetRow: (row: any) => <PayPendingDialog sale_id={row.id} sale={row} onSuccess={() => window.location.reload()} />,
        }
    ]
    return (
        <div>
            <DataTable dataRows={pendingPayments.sales || []} columns={columns} actionColumns={actions} />
        </div>
    )
}

export default PendingPayments