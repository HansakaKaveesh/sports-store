/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ image, name, price, rating }) => {
  return (
    <article className={styles.productCard}>
      <img src={image} alt={name} className={styles.productImage} />
      <h2 className={styles.productName}>{name}</h2>
      <p className={styles.productPrice}>{price}</p>
      <div className={styles.productRating}>
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/703564e073ad6b733df785542ff0466d7757bf6db1425045982bd8cba4ca5977?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
            alt={i < rating ? "Filled star" : "Empty star"}
            className={styles.starIcon}
          />
        ))}
      </div>
      <button className={styles.addToCartButton}>ADD TO CART</button>
    </article>
  );
};

export default ProductCard;