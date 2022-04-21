import React from "react";

import './ProductList.css'
import Product from "../Product/Product";
import { products } from '../../Data';

const ProductList = () => {
  return (
    <div className="prod-list" id="projects">
      <div className="prod-list__texts">
        <h1 className="prod-list__title">Projects</h1>
        <p className="prod-list__desc">
          Here are a few projects I've worked on recently. Want to see more? <a href="#contact" ><strong>Email me!</strong></a>
        </p>
      </div>
      <div className="product-list">
        {products.map((item) =>
          (<Product key={item.id} img={item.img} link={item.link} alt={item.alt} />)
        )}
      </div>
    </div>
  );

}

export default ProductList;