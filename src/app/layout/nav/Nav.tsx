"use client";
import "./Nav.scss";
import { navLogo } from "@/app/assets/img";
import Image from "next/image";
import React from "react";
import { LuBellDot } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nav = () => {
  const pathname = usePathname();
  function logOut() {
    localStorage.clear();
    toast.info("You logged out", {
        theme: "colored"
    })
    setTimeout(() => {
        window.location.reload()
    }, 1200);
  }
  return pathname == "/login" ? (
    <></>
  ) : (
    <nav>
      <div className="container">
        <div className="nav__wrapper">
          <div className="nav__logo">
            <Image src={navLogo} alt="logo" />
            <p>
              Books <span>List</span>
            </p>
          </div>
          <div className="nav__options">
            <button>
              <LuBellDot />
            </button>
            <Link href="/" onClick={()=>logOut()} title="Logout">
              <IoMdContact />
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Nav;
