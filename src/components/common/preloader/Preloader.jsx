import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import "./preloader.css";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__inner">
        <img src={preloader} alt="loader" />
      </div>
    </div>
  );
}
