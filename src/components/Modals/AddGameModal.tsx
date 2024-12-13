import React, { useState } from "react";

export const AddGameModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [gameInput, setGameInput] = useState("");

  if (!isOpen) {
    return null;
  }

  const onExit = () => {
    onClose();
    setGameInput("");
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
        <h2 className="text-xl mb-4 bg-stone-200">Add Game</h2>
        <textarea
          className="w-full border p-2 mb-4"
          rows={5}
          value={gameInput}
          onChange={(e) => setGameInput(e.target.value)}
          placeholder="Paste your game data here"
        />
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
