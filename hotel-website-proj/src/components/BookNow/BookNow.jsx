import React from "react";
import btnBookNow from "../../assets/images/button/Book now.png";
import btnScroll from "../../assets/images/button/btnScroll.png";
import BookNowStyle from "./BookNow.module.scss";

const BookNow = () => (
  <div className={BookNowStyle.container}>
    <div className={BookNowStyle.bookNow}>
      <h3>WELCOME TO</h3>
      <h1>LUXURY</h1>
      <h2>HOTELS</h2>
      Book your stay and enjoy Luxury
      <br />
      redefined at the most affordable rates.
    </div>
    <div className={BookNowStyle.btnScrollBlock}>
      <button
        className={BookNowStyle.btnBookNow}
        action="https://www.w3schools.com"
        target="blank"
        type="submit"
      >
        <img src={btnBookNow} alt="Book now" />
      </button>
      <button
        className={BookNowStyle.btnScroll}
        action="https://www.w3schools.com"
        target="blank"
        type="submit"
      >
        <img src={btnScroll} alt="Book now" />
      </button>
    </div>
  </div>
);

export default BookNow;
