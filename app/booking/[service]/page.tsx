import AppointmentDateForm from "@/app/components/pages/product-booking-page/appointment-date-form";
import BookingClient from "@/app/components/pages/product-booking-page/booking-page-client";

type BookingPageProps = {
  params: Promise<{ service: string }>;
};

export default async function BookService({ params }: BookingPageProps) {
  const { service } = await params;
  const decodedServices = decodeURIComponent(service);

  return (
    <div className="flex flex-col items-center">
      <BookingClient services={decodedServices} />

      <AppointmentDateForm bookedService={decodedServices} />
    </div>
  );
}
