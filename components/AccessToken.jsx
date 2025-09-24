"use client";

import { useSession } from "next-auth/react";

export default function AccessToken() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>No session. Please sign in.</p>;

  return <div>Access Token: {session.accessToken}</div>;
}
