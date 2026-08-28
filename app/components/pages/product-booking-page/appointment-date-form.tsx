"use client";

import { bookServiceAppointment } from "@/utils/utils";
import e from "cors";
import React, { useState } from "react";
import Calendar from "react-calendar";

interface Props {
  bookedService: string;
  userName: string;
  userId: string;
}

type Appointment = string;

export default function AppointmentDateForm({
  bookedService,
  userName,
  userId,
}: Props) {
  const [appointmentDate, setAppointmentDate] = useState<string>(() =>
    new Date().toISOString().slice(0, 10),
  );
  const [appointmentTime, setAppointmentTime] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState<string>("flex");
  const [showTime, setShowTime] = useState<string>("hidden");
  const [message, setMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState<string>("hidden");

  const navigateBooking = () => {
    if (showCalendar === "flex") {
      setShowCalendar("hidden");
      setShowTime("flex");
    } else {
      setShowCalendar("flex");
      setShowTime("hidden");
      setShowMessage("hidden");
    }
  };

  const bookService = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(appointmentDate);
      setMessage(await bookServiceAppointment(bookedService, appointmentDate, appointmentTime, userName, userId));
      setShowMessage("block")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className={`${showCalendar} flex-col items-center `}>
        <h3 className="text-2xl font-bold mt-10">
          Choose a <span>date</span>
        </h3>

        <form onClick={navigateBooking} className="mt-3">
          <Calendar
            value={appointmentDate}
            onChange={(e) => {
              const d = e as Date;
              const formatted = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
              setAppointmentDate(formatted);
            }}
            className="calendar"
          ></Calendar>
        </form>
      </div>

      <div className={`${showTime} flex-col items-center`}>
        <h3 className="text-2xl font-bold mt-10">
          Choose a <span>time</span>
        </h3>

        <div className="mt-6 bg-[#858c8e] text-center p-3 rounded-md">
          <form onSubmit={bookService} className=" flex flex-col">
            <input
              type="time"
              value={appointmentTime}
              onChange={(e) => {
                setAppointmentTime(e.target.value);
              }}
              required
            />

            <button type="submit" className="mt-3">
              Book
            </button>
          </form>
          <button className="mt-4 px-2" onClick={navigateBooking}>
            Back
          </button>
        </div>
      </div>

      <p className={`${showMessage} mt-6 text-xl`}>{message}</p>
    </div>
  );
}
