import React from "react";
import config from "../config.js";
import styles from "./styles/donateform.module.css";

const DonateForm = ({ id, isActivated, amount, onAmountChange }) => {
  const send_to = config.donateTo(id);

  return (
    <div id="DonateSection"> {/* ✅ Ensure ID is present */}
      <section>
        <form className="row" method="POST" action={send_to}>
          <div className="form-group col-7">
            <span className={styles.rupeeInput}>
              <i className="fa fa-inr" aria-hidden="true"></i>{" "}
              <input
                className={styles.input}
                name="amount"
                placeholder="Enter Amount"
                disabled={!isActivated}
                required
                value={amount}
                onChange={onAmountChange}
              />
            </span>
          </div>
          <div className={`col-5 ${styles.submit}`}>
            <button
              type="submit"
              disabled={!isActivated}
              className={`btn col-12 ${styles.btn} ${
                isActivated ? `btn-success ${styles.active}` : `btn-secondary ${styles.disabled}`
              }`}
            >
              Donate Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default DonateForm;
