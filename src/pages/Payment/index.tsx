import React, { FC, useState, useEffect } from "react";
import { RootState } from "../../main/store/redux/rootState";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css";
import { toast } from "react-toastify";

const Payment: FC = () => {
  const total = useSelector((state: RootState) => state.cart.total);
  const [account, setAccount] = useState([]);
  const [description, setDescription] = useState("");
  const [id, setId] = useState<Number>();

  const getBankAccounts = async () => {
    const response: any = await axios.get("bankaccount/get-all");
    setAccount(response.data.resultData.data);
    console.log(response.data.resultData.data);
  };



  useEffect(() => {
    getBankAccounts();
  }, []);
  return (
    <div className="container-fluid px-1 px-md-2 px-lg-4 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-sm-11">
          <div className="card border-0">
            <div className="row justify-content-center">
              <h3 className="mb-4">Credit Card Checkout</h3>
            </div>
            <div className="row">
              <div className="col-sm-7 border-line pb-3">
                <div className="form-group">
                  <p className="text-muted text-sm mb-0">Bank Account</p>
                  <select
                    placeholder="Choose bank"
                    onChange={(e) => {
                      setId(Number(e.target.value));
                    }}
                  >
                    <option value="">Choose bank</option>
                    {account &&
                      account.map((acc: any) => {
                        return <option value={acc.id}>{acc.name}</option>;
                      })}
                  </select>
                </div>
                <div className="form-group">
                  <p className="text-muted text-sm mb-0">Description</p>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="card-num"
                      placeholder="Give trancacton info"
                      id="cr_no"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                    <p className="mb-0 ml-3">/</p>
                    <img
                      className="image ml-1"
                      src="https://i.imgur.com/WIAP9Ku.jpg"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <p className="text-muted text-sm mb-0">Expiry date</p>
                  <input type="date" name="exp" id="exp" />
                </div>

                <div className="form-group mb-0">
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      className="custom-control-input"
                      checked
                    />
                    <label
                      htmlFor="chk1"
                      className="custom-control-label text-muted text-sm"
                    >
                      save my card for future payment
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 text-sm-center justify-content-center pt-4 pb-4">
                <small className="text-sm text-muted">Payment amount</small>
                <div className="row px-3 justify-content-sm-center">
                  <h2 className="">
                    <span className="text-md font-weight-bold mr-2">$</span>
                    <span className="text-danger">{total}</span>
                  </h2>
                </div>
                <button
                  type="submit"
                  className="btn btn-red text-center mt-4"
                  onClick={async () => {
                    const response=await axios
                      .post("banktransaction",  {
                        bankAccountId: id,
                        action: 1,
                        amount: total,
                        description: description,
                        isActive: true,
                      })
                  
                      console.log(response,"Prove");

                       if(response.data.status==false) {
                         toast.error("you can not buy this product");
                        }else{

                          toast.success("Bravo bosi e bleve");
                        }

                  }}
                >
                  PAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
