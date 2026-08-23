CREATE TABLE "appointments" (
	"appointment_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"booked_date" timestamp NOT NULL,
	"booked_service" varchar NOT NULL,
	"booked_user_name" text,
	"booked_user_id" text
);
--> statement-breakpoint
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_booked_user_name_user_name_fk" FOREIGN KEY ("booked_user_name") REFERENCES "public"."user"("name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_booked_user_id_user_id_fk" FOREIGN KEY ("booked_user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;