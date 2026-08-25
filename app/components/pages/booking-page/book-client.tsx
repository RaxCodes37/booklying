"use client";

import { services } from "@/utils/services";

export default function BookingClient() {
  return (
    <div className="flex flex-col items-center" id="book">
      <h1 className="text-4xl font-bold mt-10">
        <span className="underline">Book</span> with <span>us</span>
      </h1>

      <h2 className="text-2xl font-bold mt-10">
        Our <span>services</span>, Your <span className="underline">pick</span>
      </h2>

      <table className="border-3 bg-[#cd6c6c] border-[#a84949] w-90 text-center mt-5">
        <thead>
          <tr className="text-center p-2">
            <th className="border border-[#ff8a8a]">Services</th>
            <th className="p-2 border border-[#ff8a8a]">Book</th>
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
              <td className="duration-300 hover:bg-[#ad4747] hover:border-[#fc8787]">
                <button>Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
