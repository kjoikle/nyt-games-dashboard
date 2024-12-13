import React, { useState } from "react";

const LoginModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  if (!isOpen) {
    return null;
  }

  const onExit = () => {
    onClose();
    setUsernameInput("");
    setPasswordInput("");
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      onClick={onExit}
    >
      <div
        className="bg-stone-200 p-6 rounded shadow-lg w-full max-w-md flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-4 bg-stone-200">Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="w-full border p-2 mb-4"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            className="w-full border p-2 mb-4"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-red-500 rounded" onClick={onExit}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onExit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
