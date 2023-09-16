import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

import YogaStyle from "./Yoga.module.scss";

import Footer from "../../components/Footer/Footer";

const URL =
  "https://rnd.kilohealthservices.com/api/quizzes/products?api_token=d88ab57d-4cbe-4826-b593-2c1b2f8b657f";
const myURL = "https://api.jsonbin.io/v3/b/65034bcfe4033326cbd7a5b3";

const Yoga = () => {
  const [dailyPrice_6month, setDailyPrice_6month] = useState(0);

  const [originalPrice_6month, setOriginPrice_6month] = useState(0);

  const [finalPrice_6month, setFinalPrice_6month] = useState(0);

  const [dailyPrice_OneTimePayment, setDailyPrice_OneTimePayment] = useState(0);

  const [originalPrice_OneTimePayment, setOriginPrice_OneTimePayment] =
    useState(0);

  const [finalPrice_OneTimePayment, setFinalPrice_OneTimePayment] = useState(0);

  // My API
  const [kidsYoga, setKidsYoga] = useState(0);
  const [adultsYoga, setAdultsYoga] = useState(0);
  const [teachersYoga, setTeachersYoga] = useState(0);

  useEffect(() => {
    const fetchDataMonthly = async () => {
      const result = await fetch(URL);

      result.json().then((json) => {
        setDailyPrice_6month(json.data.questions[0].daily_price);

        setFinalPrice_6month(json.data.questions[0].final_price);

        setOriginPrice_6month(json.data.questions[0].original_price);
      });
    };

    fetchDataMonthly();
  }, []);

  useEffect(() => {
    const fetchDataOneTimePayment = async () => {
      const result = await fetch(URL);

      result.json().then((json) => {
        setDailyPrice_OneTimePayment(json.data.questions[1].daily_price);

        setFinalPrice_OneTimePayment(json.data.questions[1].final_price);

        setOriginPrice_OneTimePayment(json.data.questions[1].original_price);
      });
    };

    fetchDataOneTimePayment();
  }, []);

  // My API
  useEffect(() => {
    const fetchDataYOGA = async () => {
      const result = await fetch(myURL);

      result.json().then((json) => {
        // console.log(json);
        setKidsYoga(json.record.record.yoga.kids);
        setAdultsYoga(json.record.record.yoga.adults);
        setTeachersYoga(json.record.record.yoga.teachers);
      });
    };

    fetchDataYOGA();
  }, []);

  return (
    <div className={YogaStyle.wrapper}>
      <div className={YogaStyle.background}>
        <Header />
      </div>
      {/* Over 52,147 plans ordered. Get access to your yoga program now! */}
      <div>
        <span className={YogaStyle.title}>
          Choose your plan and get 7 days free trial
        </span>
        <ul className={YogaStyle.priceBox}>
          <li className={YogaStyle.offerPrice}>6 month plan </li>
          <li>
            <span className={YogaStyle.coolPrice}>
              <li> ${dailyPrice_6month} / month</li>
            </span>
          </li>
          <li>
            <span className={YogaStyle.crossedOut}>${finalPrice_6month} </span>
            <li>${originalPrice_6month} billed every 6 months</li>
          </li>
        </ul>
        <ul className={YogaStyle.priceBox}>
          <li className={YogaStyle.offerPrice}>3 month plan </li>
          <li>
            <span className={YogaStyle.coolPrice}>
              <li> ${dailyPrice_OneTimePayment} / month</li>
            </span>
          </li>
          <li>
            <span className={YogaStyle.crossedOut}>
              ${finalPrice_OneTimePayment}
            </span>
            <li> ${originalPrice_OneTimePayment} billed every 3 months</li>
          </li>
        </ul>
      </div>
      <div>
        <span className={YogaStyle.title}>Choose your 🧘‍♀️ plan</span>
        <ul className={YogaStyle.priceBox}>
          <li className={YogaStyle.offerPriceYoga}>YOGA for KIDS</li>
          <li>
            <span className={YogaStyle.coolPrice}>${kidsYoga} / month</span>
          </li>
        </ul>
        <ul className={YogaStyle.priceBox}>
          <li className={YogaStyle.offerPriceYoga}>YOGA for ADULTS</li>
          <li>
            <span className={YogaStyle.coolPrice}>${adultsYoga} / month</span>
          </li>
        </ul>
        <ul className={YogaStyle.priceBox}>
          <li className={YogaStyle.offerPriceYoga}>YOGA for TEACHERS</li>
          <li>
            <span className={YogaStyle.coolPrice}>${teachersYoga} / month</span>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status === 200) {
      console.log("Data posted successfully:", req.responseText);
    } else {
      console.error("Error:", req.status, req.statusText);
    }
  }
};

const apiKey = "$2b$10$QicGxsrGEpmODOSNZP7Tlu5P8nENEG7zNy9kuQ94evxU4HFpIEErW";
let req1 = new XMLHttpRequest();
req1.onreadystatechange = () => {
  if (req1.readyState === XMLHttpRequest.DONE) {
    console.log(req1.responseText);
  }
};

req1.open("PUT", "https://api.jsonbin.io/v3/b/65034bcfe4033326cbd7a5b3", true);
req1.setRequestHeader("Content-Type", "application/json");
req1.setRequestHeader("X-Master-Key", apiKey);

const postData1 = {
  record: {
    yoga: {
      product_key: "monthly",
      kids: 119,
      adults: 129,
      teachers: 179,
    },
  },
};

req1.send(JSON.stringify(postData1));

let req2 = new XMLHttpRequest();

req2.onreadystatechange = () => {
  if (req2.readyState === XMLHttpRequest.DONE) {
    console.log(req2.responseText);
  }
};

req2.open("GET", "https://api.jsonbin.io/v3/b/65034bcfe4033326cbd7a5b3", true);
req2.setRequestHeader("X-Master-Key", apiKey);

req2.send();
export default Yoga;
