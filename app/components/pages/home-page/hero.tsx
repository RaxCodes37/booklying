import { FaUser } from "react-icons/fa6";
import SignOutButton from "../../auth/sign-out-button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center" id="hero">
      <nav className="w-full flex justify-end pr-15 py-5">
        <div className="user-settings-button dropdown relative flex justify-center items-center">
          <FaUser></FaUser>

          <div className="dropdown-content hidden absolute mt-20">
            <SignOutButton/>
          </div>
        </div>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mt-10">
        Welcome to <span className="underline">Booklying</span>
      </h1>

      <p className="italic mt-5">
        "Where the <span>style</span> never <span>stops</span>"
      </p>

      <button className="mt-20">Book Here</button>
    </div>
  );
}
