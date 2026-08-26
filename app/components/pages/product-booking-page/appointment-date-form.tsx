"use client";

import { useState } from "react";
import Calendar from "react-calendar";

interface Props {
  bookedService: string;
}

type Appointment = Date | null;

type AppointmentValue = Appointment | [Appointment, Appointment];

export default function AppointmentDateForm({ bookedService }: Props) {
  const [appointmentDate, setAppointmentDate] = useState<AppointmentValue>(
    new Date(),
  );

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold mt-10">Choose a date</h3>

      <form
        onClick={() => {
          console.log(appointmentDate);
        }}
      >
        <Calendar
          value={appointmentDate}
          onChange={setAppointmentDate}
          className="calendar"
        ></Calendar>
      </form>
    </div>
  );
}
