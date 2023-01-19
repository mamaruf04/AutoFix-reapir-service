import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <div className="pb-1">
        <h4
          className="text-center"
          style={{ color: "#265df2", marginTop: "60px" }}
        >
          Products
        </h4>
        <h1 className="text-center fw-bold">Browse Our Products</h1>
        <p className="text-center px-2 mx-auto text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          reprehenderit quasi facilis.
        </p>
        <div className="card-container">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        <Button
          className="mx-auto d-block mb-5  fw-semibold fs-6"
          variant="outline-primary"
        >
          More Products
        </Button>
      </div>
    );
};

export default Products;