import React from "react";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
import PHONE from "../../assets/phone.jpg";
import CV from "../../assets/mycv.pdf";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <a href={CV} download className="full_name">
          <h1>MAYNARD ESCALANTE</h1>
        </a>
        <h5 className="text-light role">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={PHONE} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          SCROLL DOWN
        </a>
      </div>
    </header>
  );
}

export default Header;
