import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (


        <div className='max-w-xl w-full mx-auto space-y-6 p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Diet Charts</h1>
                <div className='flex gap-4'>

                <Link href={'/diet/food-items'}>
                    <Button variant={"secondary"} size={"sm"}>
                        Manage Food Items
                    </Button>
                </Link>
                <Link href={'/diet/new'}  >
                    <Button size='sm'>
                        New Diet
                    </Button>
                </Link>
                </div>
            </div>
            <Separator />
            {/* <DataTable dataRows={serviceList} columns={columns} actionColumn={DeleteColumn} isLoading={isLoading} /> */}
        </div>

    )
}

export default page