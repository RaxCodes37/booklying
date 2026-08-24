"use client";

import { signOutAction } from '@/app/api/auth';

export default function SignoutButton() {	
	const SignOut = async() => await signOutAction();
	
	return (
		<button onClick={SignOut} >		
			Sign-Out
		</button>
	)
}