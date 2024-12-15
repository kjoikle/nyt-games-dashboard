"use client";

import React, { useState } from "react";
import NavBar from "../NavBar";
import { AddGameModal } from "./AddGameModal";

const ModalManager = ({ children }: { children: React.ReactNode }) => {
  const [addGameModalIsOpen, setAddGameModalIsOpen] = useState(false);

  const openAddGameModal = () => {
    setAddGameModalIsOpen(true);
  };
  const closeAddGameModal = () => {
    setAddGameModalIsOpen(false);
  };

  return (
    <div>
      <NavBar onAddGameClick={openAddGameModal} />
      <AddGameModal isOpen={addGameModalIsOpen} onClose={closeAddGameModal} />
      {children}
    </div>
  );
};

export default ModalManager;
