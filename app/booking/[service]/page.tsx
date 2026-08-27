import AppointmentDateForm from "@/app/components/pages/product-booking-page/appointment-date-form";
import BookingClient from "@/app/components/pages/product-booking-page/booking-page-client";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type BookingPageProps = {
  params: Promise<{ service: string }>;
};

export default async function BookService({ params }: BookingPageProps) {
  const { service } = await params;
  const decodedServices = decodeURIComponent(service);
  const session = await getSession();

  if(!session) redirect("/sign-in");
  const userName = session.user.name;
  const userId = session.user.id;

  return (
    <div className="flex flex-col items-center">
      <BookingClient services={decodedServices} />

      <AppointmentDateForm bookedService={decodedServices} userName={userName} userId={userId}/>
    </div>
  );
}
