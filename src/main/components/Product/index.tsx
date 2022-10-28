import React, { FC } from "react";
import { IProduct } from "../../../pages/dashboard";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/stores/Card/card-store";

interface IProductProps {
  product?: IProduct;
}
const Product: FC<IProductProps> = (props: IProductProps) => {
  const { id, name, price, base64Image, shortDescription } = props.product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (


    <div className="col-lg-3 col-md-6 mb-4">
    <div className="card">
      <div className="view overlay">
        <img
          src={`data:image/jpeg;base64,${base64Image}`}
          style={{ height: "150px", width: "200px",marginRight:"35px" }}
          className="card-img-top"
          
        />
        <a>
          <div className="mask rgba-white-slight"></div>
        </a>
      </div>

      <div className="card-body text-center">
        <h3 className="grey-text">
       
          <h5> <strong>{name}</strong></h5>
         
        </h3>
        <h5>
          
          <p className="text-justify text-truncate para mb-0">
         {shortDescription}
       <br></br>
        </p>
          
        </h5>

        <h4 className="font-weight-bold blue-text">
          <strong>${price}</strong>
        </h4>
        <div className="mx-auto me-5">
        <button
            className="btn btn-outline-primary btn-sm mt-2 mb-2"
            type="button"
            onClick={() => {
              dispatch(
                addToCart({
                  id: id,
                  name: name,
                  price: price,
                  image: base64Image,
                  amount: 1,
                })
              );
            }}
          >
            Add to wishlist
          </button>

        <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => navigate(`/details/${id}`)}
          >
            Details
          </button>

         </div>
      </div>
    </div>
  </div>
    // <div className="row p-2 bg-white border rounded">
    //   <div className="col-md-3 mt-1">
    //     <img
    //       className="img-fluid img-responsive rounded product-image"
    //       src={`data:image/jpeg;base64,${base64Image}`}
    //       style={{ height: "150px", width: "280px" }}
    //     />
    //   </div>
    //   <div className="col-md-6 mt-1">
    //     <h5>{name}</h5>
    //     <div className="d-flex flex-row">
    //       <div className="ratings mr-2">
    //         <i className="fa fa-star"></i>
    //         <i className="fa fa-star"></i>
    //         <i className="fa fa-star"></i>
    //         <i className="fa fa-star"></i>
    //       </div>
    //     </div>

    //     <p className="text-justify text-truncate para mb-0">
    //       {shortDescription}
    //       <br></br>
    //     </p>
    //   </div>
    //   <div className="align-items-center align-content-center col-md-3 border-left mt-1">
    //     <div className="d-flex flex-row align-items-center">
    //       <h4 className="mr-1 custom">${price}</h4>
    //     </div>

    //     <div className="d-flex flex-column mt-4">
    //       <button
    //         className="btn btn-primary btn-sm"
    //         type="button"
    //         onClick={() => navigate(`/details/${id}`)}
    //       >
    //         Details
    //       </button>
    //       <button
    //         className="btn btn-outline-primary btn-sm mt-2"
    //         type="button"
    //         onClick={() => {
    //           dispatch(
    //             addToCart({
    //               id: id,
    //               name: name,
    //               price: price,
    //               image: base64Image,
    //               amount: 1,
    //             })
    //           );
    //         }}
    //       >
    //         Add to wishlist
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Product;
