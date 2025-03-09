import React, { useState } from "react";
import styles from "../styles/donateForm.module.css";

const DonateForm = ({ campaignId, isActivated }) => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Donation of ₹${amount} submitted!`);
  };

  return (
    <div className={styles.donateFormContainer}>
      <h2>Make a Donation</h2>
      <form className="row" onSubmit={handleSubmit}>
        <div className="form-group col-7">
          <span className={styles.rupeeInput}>
            <i className="fa fa-inr" aria-hidden="true"></i>{" "}
            <input
              type="number"
              className={styles.input}
              name="amount"
              placeholder="Enter Amount"
              required
              value={amount}
              onChange={handleAmountChange}
              disabled={!isActivated}
            />
          </span>
        </div>
        <div className={`col-5 ${styles.submit}`}>
          <button
            type="submit"
            disabled={!isActivated || amount === ""}
            className={`btn col-12 ${styles.btn} ${
              !isActivated ? `btn-secondary ${styles.disabled}` : `btn-success ${styles.active}`
            }`}
          >
            Donate Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonateForm;
