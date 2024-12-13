"use client";

import React, { useState } from "react";
import NavBar from "../NavBar";
import { AddGameModal } from "./AddGameModal";
import LoginModal from "./LoginModal";

const ModalManager = ({ children }: { children: React.ReactNode }) => {
  const [addGameModalIsOpen, setAddGameModalIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  const openAddGameModal = () => {
    if (!loginModalIsOpen) {
      setAddGameModalIsOpen(true);
    }
  };
  const closeAddGameModal = () => {
    setAddGameModalIsOpen(false);
  };

  const openLoginModal = () => {
    if (!addGameModalIsOpen) {
      setLoginModalIsOpen(true);
    }
  };
  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  };

  return (
    <div>
      <NavBar onAddGameClick={openAddGameModal} onLoginClick={openLoginModal} />
      <AddGameModal isOpen={addGameModalIsOpen} onClose={closeAddGameModal} />
      <LoginModal isOpen={loginModalIsOpen} onClose={closeLoginModal} />
      {children}
    </div>
  );
};

export default ModalManager;
