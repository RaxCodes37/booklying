import React from "react";

interface Props {
  services: string;
}

export default function BookingClient({ services }: Props) {
  return (
    <div className="text-3xl font-bold text-center mt-15">
      <h2>
        Book an <span>appointment </span>
        for
      </h2>
      <h2>
        <span>{services}</span> services
      </h2>
    </div>
  );
}
