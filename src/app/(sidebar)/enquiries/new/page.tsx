"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import React, { useState } from "react"

import { toast } from "sonner"

import { AddService, ServiceInput } from "@/action/service.action"
import { AddEnquiry, EnquiryInput } from "@/action/enquiries.action"
import { DatePickerDemo } from "@/components/custom/date-picker"
import ItemSelector from "@/components/custom/item-selector"
import { useLoading } from "@/hooks/use-loading"




const page = () => {
  const { showLoading, hideLoading } = useLoading()
  const [formState, setFormState] = useState<EnquiryInput>({
    name: '',
    phone: BigInt(0),
    followupDate: '',
    message: '',
    type: 'walkin',
  })

  const handleInputChange = (
    e: any,
    field: keyof EnquiryInput
  ) => {
    setFormState((prev) => ({ ...prev, [field]: e }))
  }


  const handleOnSubmit = async () => {
    showLoading()
    // console.log(formState)
    if (formState.name === "" || formState.phone === null) {
      toast.error("Please fill all the required fields")
      return
    }
    if (formState.phone.toString().length !== 10) {
      toast.error("Phone number must be 10 digits")
      return
    }

    console.log("Form submitted with state:", formState)
    // db operation
    const response = await AddEnquiry(formState)
    // console.log(response)
    if (response.id) {
      toast.success("Enquiry added successfully")
      setFormState(
        {
          name: '',
          phone: BigInt(0),
          followupDate: '',
          message: '',
          type: 'walkin',
        }
      )
      hideLoading()
      return
    }
    hideLoading()
    toast.error("Failed to add enquiry")
    return
  }

  return (
    <div className="max-w-xl w-full mx-auto space-y-6 p-4">
      <div>
        <h1 className="text-3xl font-semibold">Create a new enquiry</h1>
        <p className="text-muted-foreground text-sm">Fields marked with <span className="text-destructive">*</span> are required</p>
      </div>
      <Separator className="" />
      <div className="space-y-2">
        <Label>
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          placeholder="Name"
          type="text"
          required
          value={formState.name}
          onChange={(e) => handleInputChange(e.target.value, "name")}
        />
      </div>
      <div className="space-y-2">
        <Label>
          Phone <span className="text-destructive">*</span>
        </Label>
        <Input
          placeholder="Phone number"
          type="tel"
          required
          value={(formState.phone).toString()}
          onChange={(e) => handleInputChange(Number(e.target.value), "phone")}
        />
      </div>
      <div className="space-y-2">
        <Label>
          Follow up date <span className="text-destructive">*</span>
        </Label>
        <DatePickerDemo
          onDateChange={(e) => handleInputChange(e, "followupDate")}
        />
      </div>
      <div className="space-y-2">
        <Label>
          Message
        </Label>
        <Input
          placeholder="Message"
          type="text"
          required
          value={formState.message}
          onChange={(e) => handleInputChange(e.target.value, "message")}
        />
      </div>
      <div className="space-y-2">
        <Label>
          Enquiry Type
        </Label>
        <ItemSelector placeholder="Enquiry Type" searchPlaceholder="Enquiry Type" data={types} labelKey="label" valueKey="value" onSelect={(e: string) => handleInputChange(String(e), "type")} />
      </div>
      <Button className="w-full md:w-fit px-8" onClick={handleOnSubmit}>
        Create
      </Button>
    </div>
  )
}

export default page


const types = [
  {
    label: "Walkin",
    value: "walkin"
  },
  {
    label: "Call",
    value: "call"
  },
  {
    label: "Instagram",
    value: "instagram"
  },
  {
    label: "Whatsapp",
    value: "whatsapp"
  }
]

// call
// walkin
// instagram
// whatsapp