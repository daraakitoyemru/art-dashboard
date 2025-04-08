import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MainFooter from "./MainFooter";
import NavBar from "./NavBar";
import FavoritesModal from "./FavoritesModal";
import { useState } from "react";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 opacity-35 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582562231447-8afae47fce5f?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 flex flex-col min-h-screen app-container">
        <NavBar />
        <main className="flex-grow content">
          <Outlet />
        </main>
        <footer className="text-center py-4 bg-[#4B3A2C] text-white">
          COMP 4513 Assignment 2
        </footer>
      </div>
      <FavoritesModal />
    </div>
  );
};

export default Layout;
