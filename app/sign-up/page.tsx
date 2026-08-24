import { signUpAction } from "../api/auth";
import SocialSignInButton from "../components/auth/sign-in-button";

export default function SignUpPage() {
  return (
    <div className="flex justify-center">
      <form
        action={signUpAction}
        id="auth-form"
        className="flex flex-col items-center mt-30 py-2"
      >
        <h1 className="text-3xl font-medium ">Sign Up</h1>

        <div className="flex flex-col items-center gap-2 my-4 px-3">
          <input type="text" name="name" placeholder="Name" required className="p-1"/>
          <input type="text" name="email" placeholder="Email" required className="p-1"/>
          <input type="password" name="password" placeholder="Password" required className="p-1"/>
        </div>

        <button type="submit" className="p-1">Sign Up</button>

        <p className="text-[#736a6a] my-3">Or</p>

        <SocialSignInButton/>
      </form>
    </div>
  );
}
