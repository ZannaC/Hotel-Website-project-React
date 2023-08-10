import React from "react";
import { addressData } from "./addressData";
import AddressStyle from "./Address.module.scss";

const AddressBlock = (props) => (
  <div className={AddressStyle.addressBlock}>
    <h2>LUXURY</h2>
    <h4>HOTELS</h4>
    <ul>
      {addressData.map((data, index) => (
        <li key={index}>
          <h3>{data.address}</h3>
          <h3>{data.phone}</h3>
          <h3>{data.email}</h3>
        </li>
      ))}
    </ul>
  </div>
);

export default AddressBlock;
