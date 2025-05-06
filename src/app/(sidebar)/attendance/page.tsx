'use client'
import { AddAttendance, GetAttendanceByDate } from '@/action/attendance.action'
import { GetAllMembers } from '@/action/member.action'
import ItemSelector from '@/components/custom/item-selector'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useLoading } from '@/hooks/use-loading'
import { format, set } from 'date-fns'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

type Props = {}

const page = (props: Props) => {
    const {showLoading, hideLoading} = useLoading()
    const [memberList, setMemberList] = React.useState<any[]>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [selectedMember, setSelectedMember] = React.useState<string>()
    const [attendanceList, setAttendanceList] = React.useState<any[]>([])
    const [refresh, setRefresh] = React.useState<boolean>(false)
    useEffect(() => {
        async function fetchData() {
            const data = await GetAllMembers()
            setMemberList(data)
        }
        fetchData()
        fetchTodaysAttendance()
    }, [])
    useEffect(() => {
        async function fetchData() {
            await fetchTodaysAttendance()
        }
        fetchData()
    }, [refresh])
    async function fetchTodaysAttendance() {
        const data = await GetAttendanceByDate(format(new Date(), 'dd-MM-yyyy'))
        console.log(data)
        setAttendanceList(data)
    }
    const handleCheckIn = async () => {
        showLoading()
        setRefresh(!refresh)
        if (!selectedMember) return
        const newAttendance = {
            member_id: selectedMember,
            date: format(new Date(), 'dd-MM-yyyy'),
            time: format(new Date(), 'HH:mm:ss')
        }
        const data = await AddAttendance(newAttendance)
        if (data.id) {
            toast.success('Attendance added successfully')
            
        }
        hideLoading()
    }
    return (
        <div className='max-w-xl w-full mx-auto space-y-6 p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Attendance</h1>
            </div>
            <Separator />
            <div className='flex items-center justify-between gap-4'>
                <ItemSelector data={memberList} valueKey='id' labelKey='name' onSelect={(id) => setSelectedMember(id)} placeholder='Select Member' searchPlaceholder='Search Member' />
                <Button onClick={handleCheckIn} disabled={!selectedMember}>Check In</Button>
            </div>
            <Separator />
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h2 className='text-xl font-semibold'>Today's Attendance</h2>
                    </CardTitle>
                    <CardContent className='px-0'>
                        <div className=''>
                            {
                                attendanceList.map((attendance, index) => (
                                    <div key={attendance.id} className='flex gap-4 hover:bg-muted rounded-md p-2'>
                                        <p>{index + 1}</p>
                                        <p>{attendance.member.name}</p>
                                        <p className='ml-auto'>{attendance.time}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    )
}

export default page