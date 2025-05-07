'use client'
import { GetAttendanceByMemberId } from '@/action/attendance.action'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect } from 'react'

type Props = {
    member_id: string
}

const AttendanceSummary = ({
    member_id
}: Props) => {
    const [allAttendance, setAllAttendance] = React.useState<any[]>([])
    useEffect(() => {
        async function fetchAttendance() {
            const data = await GetAttendanceByMemberId(member_id)
            setAllAttendance(data)
        }
        fetchAttendance()
    }, [])
  return (
    <Card>
        <CardHeader>
            <CardTitle>
                Attendance Summary
            </CardTitle>
            <CardAction>
                Count: {allAttendance?.length}
            </CardAction>
        </CardHeader>
        <CardContent>
            {
                allAttendance.map((attendance) => (
                    <div key={attendance.id} className='flex justify-between hover:bg-muted p-2 rounded-md'>
                        <p>{attendance.date}</p>
                        <p>{attendance.time}</p>
                    </div>
                ))
            }
        </CardContent>
    </Card>
  )
}

export default AttendanceSummary