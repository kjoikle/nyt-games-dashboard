"use client";

import React from "react";
import gameStats from "@data/gameStats.json";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const connectionsStats = gameStats.connections;
  const strandsStats = gameStats.strands;
  const router = useRouter();
  const [user] = useAuthState(auth);

  console.log(user);

  if (!user) {
    router.push("/sign-in");
  }

  return (
    <div className="p-5">
      <button onClick={() => signOut(auth)}>Log Out</button>
      <h1>Lifetime Stats:</h1>
      <p>
        Games Played: {connectionsStats.gamesPlayed + strandsStats.gamesPlayed}{" "}
      </p>
    </div>
  );
}
