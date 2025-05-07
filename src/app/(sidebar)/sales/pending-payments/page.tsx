import { Separator } from '@/components/ui/separator'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="max-w-xl w-full mx-auto space-y-6 p-4">
            <div>
                <h1 className="text-3xl font-semibold">Create a new sale</h1>
                <p className="text-muted-foreground text-sm">Fields marked with <span className="text-destructive">*</span> are required</p>
            </div>
            <Separator className="" />
        </div>
    )
}

export default page