import { services } from "@/utils/services";

export default function Services() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold">
        <span className="underline">Services</span>
      </h2>
      <div id="book">
        <table className="border-3 bg-[#cd6c6c] border-[#a84949] w-70 text-center mt-5">
          <thead>
            <tr className="text-center p-2">
              <th className="border border-[#ff8a8a] py-2">Services</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr
                className="border border-[#ff8a8a] p-2"
                key={service.serviceName}
              >
                <td className="border border-[#ff8a8a] p-2">
                  {service.serviceName} - <span>{service.serviceDuration}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
