import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

import YogaStyle from "./Yoga.module.scss";

import Footer from "../../components/Footer/Footer";

const URL =
  "https://rnd.kilohealthservices.com/api/quizzes/products?api_token=d88ab57d-4cbe-4826-b593-2c1b2f8b657f";

const Yoga = () => {
  const [dailyPrice_6month, setDailyPrice_6month] = useState(0);

  const [originalPrice_6month, setOriginPrice_6month] = useState(0);

  const [finalPrice_6month, setFinalPrice_6month] = useState(0);

  const [dailyPrice_OneTimePayment, setDailyPrice_OneTimePayment] = useState(0);

  const [originalPrice_OneTimePayment, setOriginPrice_OneTimePayment] =
    useState(0);

  const [finalPrice_OneTimePayment, setFinalPrice_OneTimePayment] = useState(0);

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

  return (
    <div className={YogaStyle.wrapper}>
      <div className={YogaStyle.background}>
        <Header />
      </div>
      Over 52,147 plans ordered. Get access to your yoga program now!
      <div>
        <p>
          Choose your plan and get 7 days free trial 6 month plan $
          {dailyPrice_6month} / month
        </p>
        <p>
          ${finalPrice_6month} ${originalPrice_6month} billed every 6 months
        </p>
      </div>
      <div>
        <p>
          Choose your plan and get 7 days free trial 6 month plan $
          {dailyPrice_OneTimePayment} / month
        </p>
        <p>
          ${finalPrice_OneTimePayment} ${originalPrice_OneTimePayment} billed
          every 6 months
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Yoga;
