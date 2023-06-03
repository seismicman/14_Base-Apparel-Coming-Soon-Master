import React, { useState } from "react";
import hero_desktop from "../assets/images/hero-desktop.jpg";
import hero_mobile from "../assets/images/hero-mobile.jpg";
import logo from "../assets/images/logo.svg";
import icon_arrow from "../assets/images/icon-arrow.svg";
import icon_error from "../assets/images/icon-error.svg";

const Card = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const re =
      /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    re.exec(email) ? setError("") : setError("Please provide a valid email");
  };

  return (
    <section className="master">
      <article className="info">
        <picture className="logo">
          <img src={logo} alt="logo" />
        </picture>
        <picture className="hero-mobile">
          <img src={hero_mobile} alt="hero-mobile" />
        </picture>
        <div className="summary">
          <h1 className="title">
            <span>We're</span> coming soon
          </h1>
          <p className="description">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <div className="email-container">
          <input
            className={`email ${error ? "email-selected" : ""}`}
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <img
            src={icon_error}
            alt="icon-error"
            className={error ? "error-show" : "error-hidden"}
          />
          <button
            className={`btn ${error ? "btn-selected" : ""}`}
            onClick={handleSubmit}
          >
            <img src={icon_arrow} alt="icon-arrow" />
          </button>
        </div>
        <div className="errors-container">
          <p className="text-error">{error}</p>
        </div>
      </article>
      <picture className="hero">
        <img src={hero_desktop} alt="hero-desktop" />
      </picture>
    </section>
  );
};

export default Card;
