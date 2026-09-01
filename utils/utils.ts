"use server";

import { db } from "@/app";
import { appointmentTable } from "@/auth-schema";
import { and, eq } from "drizzle-orm";

export interface Services {
  serviceName: string;
  serviceDuration: string;
}

export const bookServiceAppointment = async (
  bookedService: string,
  appointmentDate: string,
  appointmentTime: string,
  bookedUserName: string,
  bookedUserId: string,
) => {
  const checkAvailability = await db
    .select()
    .from(appointmentTable)
    .where(and(eq(appointmentTable.appointmentDate, appointmentDate), eq(appointmentTable.appointmentTime, appointmentTime)));

  let message: string;

  if (checkAvailability.length > 0) {
    return (message = "Sorry, no appointments available at this time");
  }

  await db.insert(appointmentTable).values({
    bookedService,
    appointmentDate,
    appointmentTime,
    bookedUserName,
    bookedUserId,
  });

  return (message = "Appointment booked succesfully!");
};
