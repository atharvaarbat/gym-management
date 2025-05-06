'use client'
import { GetAllMembers, MemberResponse } from '@/action/member.action'
import { AddSales, SalesInput } from '@/action/sales.action'
import { GetAllServices, ServiceResponse } from '@/action/service.action'
import { DatePickerDemo } from '@/components/custom/date-picker'
import ItemSelector from '@/components/custom/item-selector'
import { RadioSelect } from '@/components/custom/radio-select'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import MultipleSelector from '@/components/ui/multiselect'
import { Separator } from '@/components/ui/separator'
import { format } from 'date-fns'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

type Props = {}

const page = (props: Props) => {
    const [members, setMembers] = React.useState<MemberResponse[]>([])
    const [services, setServices] = React.useState<ServiceResponse[]>([])
    const [selected, setSelected] = React.useState<any>({
        member: {},
        service: {}
    })
    const [formState, setFormState] = React.useState<SalesInput>({
        member_id: '',
        service_id: '',
        description: '',
        discount: 0,
        amount: 0,
        paid: 0,
        startDate: ''
    })
    useEffect(() => {
        async function fetchData() {
            setMembers(await GetAllMembers())
            setServices(await GetAllServices())
        }
        fetchData()
    }, [])
    const handleInputChange = (
        e: any,
        field: keyof SalesInput
    ) => {
        setFormState((prev) => ({ ...prev, [field]: e }))
    }

    const handleOnSubmit = async () => {
        if (formState.member_id === '' || formState.service_id === '' || formState.amount === 0 || formState.startDate === '' || formState.paid === null || formState.paid <= 0) {
            toast.error('Please fill all the required fields')
            return
        }
        if (formState.amount <= 0) {
            toast.error('Amount must be greater than zero')
            return
        }
        const response = await AddSales(formState)
        if (response.id) {
            toast.success('Sale added successfully')
        }

    }
    return (
        <div className="max-w-xl w-full mx-auto space-y-6 p-4">
            <div>
                <h1 className="text-3xl font-semibold">Create a new diet plan</h1>
                <p className="text-muted-foreground text-sm">Fields marked with <span className="text-destructive">*</span> are required</p>
            </div>
            <Separator className="" />
            <div className="space-y-2">
                <Label>
                    Member <span className="text-destructive">*</span>
                </Label>
                <ItemSelector data={members} valueKey="id" labelKey="name" onSelect={(value) => handleInputChange(value, "member_id")} placeholder="Select a member" searchPlaceholder="Search members..." onSelectGetRow={(row) => setSelected((prev: any) => ({ ...prev, member: row }))} />
            </div>
            {
                selected.member.id && (
                    <Card>
                        <CardContent className="space-y-2">
                            <div className="flex gap-4"><Label className='w-1/3'>Name</Label><p>{selected.member.name}</p> </div>
                            <div className="flex gap-4"><Label className='w-1/3'>Phone</Label><p>{selected.member.phone}</p> </div>
                        </CardContent>
                    </Card>
                )
            }
            <div className="space-y-2">
                <Label>
                    Date <span className="text-destructive">*</span>
                </Label>
                <DatePickerDemo
                    defaultDate={format(new Date(), 'dd-MM-yyyy')}
                    onDateChange={(e) => handleInputChange(e, "startDate")}
                />
            </div>
            <Separator />
            <div className="space-y-2">
                <Label>
                    Description
                </Label>
                <Input
                    placeholder="Description"
                    type="text"
                    // value={formState.address}
                    onChange={(e) => handleInputChange(e.target.value, "description")}
                />
            </div>
            <Separator />
            <RadioSelect
                items={yesno}
                defaultValue={false}
                onSelect={(e) => console.log(e)}
                title="Is diabetic?"
                className="my-4"
                itemClassName=""
            />
            <RadioSelect
                items={yesno}
                defaultValue={false}
                onSelect={(e) => console.log(e)}
                title="Blood pressure issue?"
                className="my-4"
                itemClassName=""
            />

            <Separator />
            {/* <MultipleSelector
                commandProps={{
                    label: "Select frameworks",
                }}
                defaultOptions={frameworks}
                placeholder="Select Food Item"
                emptyIndicator={'No food item found'}
            /> */}
            <Button className="w-full md:w-fit px-8" onClick={handleOnSubmit}>
                Create
            </Button>
        </div>
    )
}

export default page

const yesno = [
    {
        label: "Yes",
        value: true
    },
    {
        label: "No",
        value: false
    }
]


const frameworks = [
    {
      value: "atharva",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
    {
      value: "angular",
      label: "Angular",
    },
    {
      value: "vue",
      label: "Vue.js",
    },
    {
      value: "react",
      label: "React",
    },
    {
      value: "ember",
      label: "Ember.js",
    },
    {
      value: "gatsby",
      label: "Gatsby",
    },
    {
      value: "eleventy",
      label: "Eleventy",
    },
    {
      value: "solid",
      label: "SolidJS",
    },
    {
      value: "preact",
      label: "Preact",
    },
    {
      value: "qwik",
      label: "Qwik",
    },
    {
      value: "alpine",
      label: "Alpine.js",
    },
    {
      value: "lit",
      label: "Lit",
    },
  ]