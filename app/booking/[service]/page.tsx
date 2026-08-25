type BookingPageProps = {
  params: Promise<{service: string}>
}

export default async function BookService({params}: BookingPageProps) {
  const { service } = await params;
  const decodedServices = decodeURIComponent(service);
  console.log(decodedServices);
  
  return (
    <div>
      
    </div>
  )
}
