import React, { FC, useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../main/store/stores/Card/card-store";
import Navbar from "../../main/components/Navbar";

const ProductDetail: FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const getProduct = async () => {
    const response = await axios.get(`product/${id}`);

    console.log(response);
    setProduct(response.data.resultData);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div><Navbar />
   { product && (
      <div className="container mt-5 mb-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  <img
                    src={`data:image/jpeg;base64,${product.base64Image}`}
                    id="main_product_image"
                    width="350"
                  />
                </div>
                <div className="thumbnail_images">
                  <ul id="thumbnail">
                    <li>
                      <img
                        alt="changeImage(this)"
                        src={`data:image/jpeg;base64,${product.base64Image}`}
                        width="70"
                      />
                    </li>
                    <li>
                      <img
                        alt="changeImage(this)"
                        src={`data:image/jpeg;base64,${product.base64Image}`}
                        width="70"
                      />
                    </li>
                    <li>
                      <img
                        alt="changeImage(this)"
                        src={`data:image/jpeg;base64,${product.base64Image}`}
                        width="70"
                      />
                    </li>
                    <li>
                      <img
                        alt="changeImage(this)"
                        src={`data:image/jpeg;base64,${product.base64Image}`}
                        width="70"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{product.name}</h3>
                  <span className="heart">
                    <i className="bx bx-heart"></i>
                  </span>
                </div>
                <div className="mt-2 pr-3 content">
                  <p>{product.longDescription}</p>
                </div>
                <h3>${product.price}</h3>
                <div className="ratings d-flex flex-row align-items-center">
                  <div className="d-flex flex-row">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bx-star"></i>
                  </div>
                  <span>441 reviews</span>
                </div>
                <div className="mt-5">
                  <span className="fw-bold">Color</span>
                  <div className="colors">
                    <ul id="marker">
                      <li id="marker-1"></li> <li id="marker-2"></li>
                      <li id="marker-3"></li> <li id="marker-4"></li>
                      <li id="marker-5"></li>
                    </ul>
                  </div>
                </div>
                <div className="buttons d-flex flex-row mt-5 gap-3">
                  <input
                    type="number"
                    min="0"
                    max="10"
                    defaultValue={1}
                    onChange={(e) => {
                      setValue(Number(e.target.value));
                    }}
                  />
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.base64Image,
                          amount: value,
                        })
                      );
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="search-option">
                  <i className="bx bx-search-alt-2 first-search"></i>
                  <div className="inputs">
                    <input type="text" name="" />
                  </div>
                  <i className="bx bx-share-alt share"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
                  }
    </div>
  );
};

export default ProductDetail;
