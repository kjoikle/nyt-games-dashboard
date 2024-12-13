"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

const SignUpPage = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const onExit = () => {
    setEmailInput("");
    setPasswordInput("");
  };

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(
        emailInput,
        passwordInput
      );
      console.log(res);
      setEmailInput("");
      setPasswordInput("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-5">
      <div className="bg-stone-200 p-6 rounded shadow-lg w-full max-w-md flex flex-col items-center">
        <h2 className="text-xl mb-4 bg-stone-200">Sign Up</h2>
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
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="bg-stone-200 p-6 rounded shadow-lg w-full max-w-md flex flex-row justify-around items-center">
        <h3>Already have an account?</h3>
        <Link href="/sign-in" className="hover:underline text-blue-500">
          {" "}
          Sign In{" "}
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
