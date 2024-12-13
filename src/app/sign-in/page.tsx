"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    console.log(emailInput);
    console.log(passwordInput);

    try {
      const res = await signInWithEmailAndPassword(emailInput, passwordInput);
      console.log(res);
      setEmailInput("");
      setPasswordInput("");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center p-10">
      <div className="bg-stone-200 p-6 rounded shadow-lg w-full max-w-md flex flex-col items-center">
        <h2 className="text-xl mb-4 bg-stone-200">Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="w-full border p-2 mb-4"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border p-2 mb-4"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="bg-stone-200 p-6 rounded shadow-lg w-full max-w-md flex flex-row justify-around items-center">
        <h3>Don't have an account?</h3>
        <Link href="/sign-up" className="hover:underline text-blue-500">
          {" "}
          Sign Up{" "}
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
