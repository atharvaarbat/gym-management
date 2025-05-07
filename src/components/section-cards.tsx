import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getAllActiveMembers, GetAllMembers } from "@/action/member.action"
import { GetSalesInCurrentMonth, GetSalesWithinLast7Days } from "@/action/sales.action"

export async function SectionCards() {
  const SalesIn7Days = await GetSalesWithinLast7Days()
  const Last7DaysAmount = SalesIn7Days.reduce((total, sale) => total + sale.amount - sale.discount, 0)
  const SalesInThisMonth = await GetSalesInCurrentMonth()
  const ThisMonthAmount = SalesInThisMonth.reduce((total, sale) => total + sale.amount - sale.discount, 0)
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>All Members</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {(await GetAllMembers()).length}
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Active Members</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {(await getAllActiveMembers()).length}
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Sales in this month</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ₹{Last7DaysAmount}
          </CardTitle>
          <CardDescription>Count: {SalesIn7Days.length}</CardDescription>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Sales in Last 7 Days</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ₹{ThisMonthAmount}
          </CardTitle>
          <CardDescription>Count: {SalesInThisMonth.length}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
