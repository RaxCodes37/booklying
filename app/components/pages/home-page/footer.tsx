import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col items-center text-[#848181] mt-5">
      <p>Example footer</p>
      <div>
        <p className="mt-5">
          <Link
            href="https://github.com/RaxCodes37/booklying"
            target="_blank"
            className="flex items-center gap-1.5 hover:underline"
          >
            Source Code:
            <FaGithub></FaGithub>
          </Link>
        </p>
      </div>
    </div>
  );
}
