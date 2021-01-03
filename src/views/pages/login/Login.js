import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookSquare,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

import "./Login.css";

library.add(fab, faFacebookSquare, faGooglePlusSquare, faUser, faKey);

const Login = () => {
  return (
    <div className="container-fluid login">
      <div className="d-flex justify-content-center h-100">
        <div className="card login__card">
          <div className="card-header login__card__header">
            <h3>Sign In</h3>
            <div className="d-flex justify-content-end social__icon">
              <span>
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </span>
              <span>
                <FontAwesomeIcon icon={["fab", "google-plus-square"]} />
              </span>
            </div>
          </div>
          <div className="card-body login__card__body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend login__input__group__prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon="user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control login__input"
                  placeholder="username"
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend login__input__group__prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon="key" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control login__input"
                  placeholder="password"
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" className="login__input" />
                Remember Me
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn float-right login__btn login__input"
                />
              </div>
            </form>
          </div>
          <div className="card-footer login__card__footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?
              <Link to="/register"> Sign Up </Link>
              {/* <a href="register/">Sign Up</a> */}
            </div>
            <div className="d-flex justify-content-center">
              <a href="#link">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
