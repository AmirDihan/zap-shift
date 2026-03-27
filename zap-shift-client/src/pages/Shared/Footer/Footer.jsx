import React from "react";
import Logo from "../../../components/Logo/Logo";
import { NavLink } from "react-router";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal bg-[#0B0B0B] text-white footer-center p-10 mt-10 rounded-2xl">
      <aside>
        <Logo></Logo>
        <p className="font-bold mt-3">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we deliver on
          time, every time.
        </p>
      </aside>
      <hr className="border-2 border-dotted border-[#ffffff]" />
      <nav>
        <div className="flex gap-4">
          <NavLink>Services</NavLink>
          <NavLink>Coverage</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Contact</NavLink>
        </div>
      </nav>
      <hr className="border-2 border-dotted border-[#ffffff]" />
      <nav>
        <div className="grid grid-flow-col gap-4">
          <NavLink>
            <FaLinkedin className="text-3xl rounded-full" />
          </NavLink>
          <NavLink>
            <FaXTwitter  className="text-3xl rounded-full" />
          </NavLink>
          <NavLink>
            <FaFacebook className="text-3xl rounded-full" />
          </NavLink>
          <NavLink>
            <FaYoutube className="text-3xl rounded-full" />
          </NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
