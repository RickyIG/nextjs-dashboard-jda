import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { LatestInvoiceRaw } from '../lib/definitions';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
// Make sure the following file exists: app/lib/db.ts and exports 'sql'
import { sql } from '@vercel/postgres';
import { Suspense } from 'react';
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
 
export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
//   const cardData = await fetchCardData();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
    } = await fetchCardData(); // wait for fetchLatestInvoices() to finish

//   // Fetch the last 5 invoices, sorted by date
//   const data = await sql<LatestInvoiceRaw>`
//   SELECT invoices.amount, customers.name, customers.image_url, customers.email
//   FROM invoices
//   JOIN customers ON invoices.customer_id = customers.id
//   ORDER BY invoices.date DESC
//   LIMIT 5`;
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
            <CardWrapper/>
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}