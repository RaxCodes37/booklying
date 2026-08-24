import Link from "next/link";

export default function AuthNavBar() {
  return (
    <div id="auth-nav-bar">
      <nav className="flex justify-center gap-10">
        <Link href="/sign-in">Sign-In</Link>
        <Link href="/sign-up">Sign-Up</Link>
      </nav>
    </div>
  )
}
