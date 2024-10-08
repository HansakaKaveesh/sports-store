/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Summary.module.css";

const Summary = () => {
  return (
    <section className={styles.summary}>
      <h2 className={styles.summaryTitle}>Summary</h2>
      <form className={styles.promoForm}>
        <label htmlFor="promoCode" className={styles.promoLabel}>
          Promocode
        </label>
        <div className={styles.promoInputWrapper}>
          <input
            type="text"
            id="promoCode"
            className={styles.promoInput}
            placeholder="Enter promo code"
          />
          <button type="submit" className={styles.promoButton}>
            APPLY
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a58c04ab7a8927d0f8c383999c18e56afdf305cb498a13ef1b2877ee35e99028?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
              alt=""
              className={styles.applyIcon}
            />
          </button>
        </div>
      </form>
      <div className={styles.costBreakdown}>
        <div className={styles.costItem}>
          <span>Cost</span>
          <span>$415.00</span>
        </div>
        <div className={styles.costItem}>
          <span>Shipping cost</span>
          <span>$15.00</span>
        </div>
      </div>
      <div className={styles.totalCost}>
        <span>Total cost</span>
        <span>$430.00</span>
      </div>
    </section>
  );
};

export default Summary;
