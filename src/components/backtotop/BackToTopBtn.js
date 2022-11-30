import React from "react";
import classes from "./BackToTopBtn.module.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const BackToTopBtn = () => {
  const handlerBtnClick = () => {};
  return (
    <a className={classes.container} href="#">
      <BsFillArrowUpCircleFill className={classes.btnToTop} />
    </a>
  );
};

export default BackToTopBtn;
