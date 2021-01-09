import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { toast } from "react-toastify";
import { useForm } from 'react-hook-form'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookSquare,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import { CForm } from '@coreui/react'
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import axios from 'axios';
library.add(fab, faFacebookSquare, faGooglePlusSquare, faUser, faKey);

const Login = () => {
  // const { getUsers } = useContext(GlobalContext)
  // useEffect(() => {
  //   getUsers()
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []) 
  const history = useHistory();
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false);

  const userLogin = async (data) => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
    }
    try {
      const res = await axios.post('http://localhost:5000/api/v1/users/login', data, config);
      console.log("This is res", res)

        localStorage.setItem("token", res.data.access_token);
        history.push("/dashboard");
        setLoading(false);
     } catch (err) {
      alert(`Something went wrong. ${err}`)
      setLoading(false);
    }
  }

  const onSubmit = (data) => {
      setLoading(true);
      userLogin(data)
  }


  return (
    <div className="container-fluid login">
      <div className="d-flex justify-content-center h-100">
        <div className="card login__card">
          <div className="card-header login__card__header">
            <h3>Sign In</h3>
            {/* <div className="d-flex justify-content-end social__icon">
              <span>
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </span>
              <span>
                <FontAwesomeIcon icon={["fab", "google-plus-square"]} />
              </span>
            </div> */}
          </div>
          <div className="card-body login__card__body">
            <CForm id='assetForm' onSubmit = {handleSubmit(onSubmit) } >
              <div className="input-group form-group">
                <div className="input-group-prepend login__input__group__prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon="user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control login__input"
                  name="email"
                  placeholder="email"
                  ref={register} 
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
                  name="password"                  
                  placeholder="password"
                  ref={register} 
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" className="login__input" />
                Remember Me
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value={loading ? "Loading..." : "Submit"}
                  className="btn float-right login__btn login__input"
                />
                {/* <CButton variant="primary" type="submit" disabled={loading}>
                  {loading ? "Loading..." : "Submit"}
                </CButton> */}
              </div>
            </CForm>
          </div>
          {/* <div className="card-footer login__card__footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?
              <Link to="/register"> Sign Up </Link>
              <a href="register/">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#link">Forgot your password?</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}  

export default Login;
