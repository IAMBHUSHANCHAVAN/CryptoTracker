import * as React from "react";
import "../App.css"
import { CryptoState } from "../CryptoContext";
import LoginAuth from "./authentication/LoginAuth";
export default function Header() {
  const {currency,symbol,setCurrency} = CryptoState()
  // console.log(currency);
  return (
    <>
    <nav class="navbar">
  <div class="container-fluid container p-3 mb-2 bg-dark text-white d-flex justify-content-between mt-5 rounded">
        <h5 className="bg-dark">crypto tracker</h5>
        <div className="d-flex">
        <select
          class="form-select border border-2 text-primary"
          aria-label="Default select example"
          style={{ width: "6rem" }}
          value={currency}
          onChange={(e)=>setCurrency(e.target.value)}
        >
          <option selected value="USD">
            USD
          </option>
          <option value="INR">INR</option>
        </select>
        {/* <LoginAuth/> */}
        </div>
      </div>
      </nav>
    </>
  );
}
