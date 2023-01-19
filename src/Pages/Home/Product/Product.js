import React from "react";
import "./Product.css";

const Product = ({product}) => {
    const { name, price, rating, image } = product;

    const ratingFloor = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="product-card">
      <div className="image-container ">
        <img className="w-75 " src={image} alt="ProductImage" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">${price}</div>
        {/* rating star */}
        <div className="product-rating">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            if (ratingValue <= ratingFloor) {
              return <span key={i} className={`uis uis-star checked`} />;
            }
            if (hasHalfStar && ratingValue === ratingFloor + 1) {
              return (
                <span key={i} className={`uis uis-star-half-alt checked`} />
              );
            }
            return <span key={i} className={`uis uis-star`} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
