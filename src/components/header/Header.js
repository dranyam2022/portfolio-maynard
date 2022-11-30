import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/DJV FEC 282-28.jpg";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>MAYNARD ESCALANTE</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          SCROLL DOWN
        </a>
      </div>
    </header>
  );
}

export default Header;
