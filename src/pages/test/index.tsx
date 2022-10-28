import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../main/store/stores/navigation/navigation.store";
import onLogin from "../../main/store/stores/user/login.store.on-login";
import "./style.css";
import { BiUser } from "react-icons/bi";
import { IoKeySharp } from "react-icons/io5";

const TestPage: FC = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    dispatch(onLogin({ userName, password }));
    navigate("/dashboard", { replace: true });
  };
  return (
    // <form>
    //   <div className="form-outline mb-4">
    //     <input
    //       type="email"
    //       id="form2Example1"
    //       className="form-control"
    //       onChange={(e) => setUserName(e.target.value)}
    //     />
    //     <label className="form-label" htmlFor="form2Example1">
    //       Email address
    //     </label>
    //   </div>

    //   <div className="form-outline mb-4">
    //     <input
    //       type="password"
    //       id="form2Example2"
    //       className="form-control"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <label className="form-label" htmlFor="form2Example2">
    //       Password
    //     </label>
    //   </div>

    //   <div className="row mb-4">
    //     <div className="col d-flex justify-content-center">
    //       <div className="form-check">
    //         <input
    //           className="form-check-input"
    //           type="checkbox"
    //           value=""
    //           id="form2Example31"

    //         />
    //         <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
    //       </div>
    //     </div>

    //     <div className="col">
    //       <a href="#!">Forgot password?</a>
    //     </div>
    //   </div>

    //   <button type="button"
    //     className="btn btn-primary btn-block mb-4"
    //     onClick={() => handleButtonClick()}
    //   >
    //     Sign in
    //   </button>

    //   <div className="text-center">
    //     <p>
    //       Not a member? <a href="#!">Register</a>
    //     </p>
    //     <p>or sign up with:</p>
    //     <button type="button" className="btn btn-link btn-floating mx-1">
    //       <i className="fab fa-facebook-f"></i>
    //     </button>

    //     <button type="button" className="btn btn-link btn-floating mx-1">
    //       <i className="fab fa-google"></i>
    //     </button>

    //     <button type="button" className="btn btn-link btn-floating mx-1">
    //       <i className="fab fa-twitter"></i>
    //     </button>

    //     <button type="button" className="btn btn-link btn-floating mx-1">
    //       <i className="fab fa-github"></i>
    //     </button>
    //   </div>
    // </form>

    <div className="container h-100">
      <div className="d-flex justify-content-center h-100 mode">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                className="brand_logo"
                alt="Logo"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user">
                      <BiUser />
                    </i>
                  </span>
                </div>
                <input
                  type="text"
                  name=""
                  className="form-control input_user"
                  placeholder="username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key">
                      <IoKeySharp />
                    </i>
                  </span>
                </div>
                <input
                  type="password"
                  name=""
                  className="form-control input_pass"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlInline"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customControlInline"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <button
                  type="button"
                  className="btn login_btn"
                  onClick={() => handleButtonClick()}
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Don't have an account?{" "}
              <a href="#" className="ml-2">
                Sign Up
              </a>
            </div>
            <div className="d-flex justify-content-center links">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
