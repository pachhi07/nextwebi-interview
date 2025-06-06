import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import "./sidenav.css";

export default function SideNav() {
  return (
    <section id="mysidenav">
      <div id="sidenavphone">
        <a href="tel:+91 9008310907" target="_blank">
          <IoCallSharp />
          Call Now
        </a>
      </div>
      <section id="sidenavwhatsapp">
        <a href="https://api.whatsapp.com/send/?phone=9008310907&text=Hi,I%20have%20a%20query">
          <FaWhatsapp /> Chat Now
        </a>
      </section>
    </section>
  );
}
