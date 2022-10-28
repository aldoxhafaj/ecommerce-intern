import { FC, useEffect, useState } from "react";
import axios from "axios";
import Product from "../../main/components/Product";
import { useNavigate } from "react-router-dom";
import Navbar from "../../main/components/Navbar";
export interface IProduct {
  id?: any;
  base64Image: any;
  categoryId: any;
  longDescription: any;
  name: any;
  price: any;
  shortDescription: any;
}

const DashboardPage: FC = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const getProducts = async () => {
    const response = await axios.get("product/get-all");

    console.log(response);
    setProducts(response.data.resultData.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="text-center mb-4">
        <div className="row wow fadeIn">
  {products &&
        products.map((product: IProduct) => {
          return (
          
              <Product product={product} />
      
          );
        })}
        </div>
      </section>

    
    </div>
  );
};

export default DashboardPage;
