import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import PendingPayments from "../sales/pending-payments/PendingPayments"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GetSalesWithPendingAmount } from "@/action/sales.action"

export default async function Page() {
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <Card>
          <CardHeader>
            <CardTitle>Pending Payments</CardTitle>
            <CardAction className="text-muted-foreground">Total Amount: ₹{(await GetSalesWithPendingAmount()).total}</CardAction>
          </CardHeader>
          <CardContent>
            <PendingPayments pendingPayments={await GetSalesWithPendingAmount()} />
          </CardContent>
        </Card>
      </div>
      <div className="px-4 lg:px-6">
        {/* <ChartAreaInteractive /> */}
      </div>
      {/* <DataTable data={data} /> */}
    </>

  )
}
