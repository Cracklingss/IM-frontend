"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthStatus() {

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in with Google</button>
    </>
  );
}
