import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactUsStyle from "./Contact.module.scss";
import ContactForm from "./ContactPageContent/PageContent";
import arrow from "../../assets/icons/Arrow.svg";

const ContactUs = () => (
  <div className={ContactUsStyle.wrapper}>
    <div className={ContactUsStyle.background}>
      <Header />
      <h1 className={ContactUsStyle.title}>Contact-us</h1>
    </div>
    <div className={ContactUsStyle.text}>
      <h2>WE ARE HERE FOR YOU</h2>
      <h4>
        At Luxury Hotels, we take our customers seriously. Do you have any
        enquiries, compaints or requests, please forward it to our support desk
        and we will get back to you as soon as possible.
      </h4>
    </div>
    <div className={ContactUsStyle.infoContactBlock}>
      <div className={ContactUsStyle.info}>
        497 Evergreen Rd. Roseville, CA 95673 <br />
        View map
        <a
          href="https://www.google.com/maps/search/497+Evergreen+Rd.+Roseville,+CA+95673/@38.6871701,-121.5033654,13z/data=!3m1!4b1?entry=ttu"
          className={ContactUsStyle.arrowLink}
        >
          <img src={arrow} alt="map" className={ContactUsStyle.arrowImage} />
        </a>
        <br /> <br />
        Phone: +44 345 678 903 <br /> Email: luxury_hotels@gmail.com
      </div>
      <div>
        <ContactForm />
      </div>
    </div>

    <Footer />
  </div>
);

export default ContactUs;
