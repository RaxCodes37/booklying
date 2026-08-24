"use client";

import { FaGithub } from "react-icons/fa"
import { authClient } from "@/lib/client"
 
export default function SocialSignInButton() {
	const signInWithGitHub = async () => await authClient.signIn.social({
		callbackURL: "/",
		provider: "github",
	})

	return (
		<div>
			<button onClick={signInWithGitHub} className="flex items-center gap-2 p-1 mb-1">
				<FaGithub/>
				Sign In with GitHub
			</button>
		</div>
	)
}