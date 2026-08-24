import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import HomeClient from "./components/pages/home-page/home-client";

export default async function Home() {
  const session = await getSession();

  if(!session) redirect("/sign-up")

  return (
    <div>
      <HomeClient/>
    </div>
  )
}
