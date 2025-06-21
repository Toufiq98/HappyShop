import { div } from "motion/react-client";
import React from "react";

const single = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="card bg-base-100 w-76 shadow-2xl">
        <figure className="p-3">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary p-2">$ {price}</div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default single;
