import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../main/store/redux/rootState";
import "../../main/components/Product/style.css";
import Navbar from "../../main/components/Navbar";
import "../../main/components/Navbar/style.css";
import {
  decreaseProduct,
  addToCart,
  clearCart,
} from "../../main/store/stores/Card/card-store";
import "./button.css";
import { useNavigate } from "react-router-dom";
const Cart: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const store = useSelector((state: RootState) => state.cart);
  console.log(store.items);

  return (
    <div>
      <Navbar />
<div className="my-3">
      {store.items.map((item: any) => {
        return (
          <div className="mx-5 ">
            <div className="row p-2 bg-white border rounded">
              <div className="col-md-3 mt-1">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  src={`data:image/jpeg;base64,${item.image}`}
                  style={{ height: "150px", width: "280px" }}
                />
              </div>
              <div className="col-md-6 mt-1">
                <h5>{item.name}</h5>
                <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>

                <p className="text-justify text-truncate para mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                  <br></br>
                </p>
              </div>
              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                <div className="d-flex flex-row align-items-center">
                  <h4 className="mr-1">${item.price}</h4>
                </div>

                <div className="d-flex flex-column mt-4">
                  <div className="input-group w-auto justify-content-end align-items-center">
                    <input
                      type="button"
                      value="-"
                      className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                      data-field="quantity"
                      onClick={() => {
                        dispatch(decreaseProduct(item.id));
                      }}
                    />
                    <input
                      type="number"
                      step="1"
                      max="10"
                      value={item.amount}
                      name="quantity"
                      className="quantity-field border-0 text-center w-25"
                    />
                    <input
                      type="button"
                      value="+"
                      className="button-plus border rounded-circle icon-shape icon-sm "
                      data-field="quantity"
                      onClick={() => {
                        dispatch(addToCart({ ...item, amount: 1 }));
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          </div>
        );
      })}
      </div>

      <div className="row p-2 bg-white border rounded mx-5">
        <div className="col-md-3 mt-1">
          <div className="total">Total:${store.total}</div>
          <div className="buttons">
            <div className="left">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/payment");
                }}
              >
                Pay now
              </button>
            </div>
            <div className="right">
              <button
                className="btn btn-success btn-lg btn-block"
                onClick={() => {
                  dispatch(clearCart());
                }}
              >
                Clear cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
