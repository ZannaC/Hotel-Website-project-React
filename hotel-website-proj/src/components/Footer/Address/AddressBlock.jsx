import React from "react";
import { addressData } from "./addressData";
import FooterStyle from "../Footer.module.scss";

const AddressBlock = (props) => (
  <div>
    <h3>LUXURY</h3>
    <h6>HOTELS</h6>
    <ul>
      {addressData.map((data, index) => (
        <li key={index}>
          <p className={FooterStyle.addressBlock}>{data.address}</p>
          <p className={FooterStyle.addressBlock}>{data.phone}</p>
          <p className={FooterStyle.addressBlock}>{data.email}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default AddressBlock;
