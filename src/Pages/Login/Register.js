import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login-img.svg";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import "./accountShared.css";
import SocialLogIn from "./SocialLogIn";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setConfirmShowPass] = useState(false);
  const [match, setMatch] = useState(true);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // updateProfile
  const [updateProfile, updateError] = useUpdateProfile(auth);
  console.log(user);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(email, password);
    e.preventDefault();
  };

  useEffect(() => {
    const update = () => {
      updateProfile({ displayName });
    };
    if (!loading) {
      update();
    }
  }, [displayName, loading, updateProfile]);

  return (
    <div className="account-section  d-flex align-items-center justify-content-evenly my-5 flex-wrap">
      <img className="w-50 img-fluid" src={loginImg} alt="" />
      <div className="account-container">
        <div className="forms">
          <div className="form signup">
            <span className="title">Registration</span>

            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  onBlur={(e) => setDisplayName(e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                  required
                ></input>
                <i className="uil uil-user"></i>
              </div>
              <div className="input-field">
                <input
                  onBlur={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter your email"
                  required
                ></input>
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input
                  onBlur={(e) => setPassword(e.target.value)}
                  type={!showPass ? "password" : "text"}
                  className="password"
                  placeholder="Create a password"
                  required
                ></input>
                <i className="uil uil-lock icon"></i>
                <i
                  onClick={() => setShowPass(!showPass)}
                  className={
                    !showPass
                      ? "uil uil-eye-slash showHidePw"
                      : "uil uil-eye showHidePw"
                  }
                ></i>
              </div>
              <div className="input-field">
                <input
                  onChange={(e) =>
                    e.target.value !== password
                      ? setMatch(false)
                      : setMatch(true)
                  }
                  type={!showConfirmPass ? "password" : "text"}
                  className="password"
                  placeholder="Confirm a password"
                  required
                ></input>
                <i className="uil uil-lock icon"></i>
                <i
                  onClick={() => setConfirmShowPass(!showConfirmPass)}
                  className={
                    !showConfirmPass
                      ? "uil uil-eye-slash showHidePw"
                      : "uil uil-eye showHidePw"
                  }
                ></i>
              </div>
              {!match ? (
                <p className="text-danger">Password does not match.</p>
              ) : (
                <p></p>
              )}
              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="termCon"></input>
                  <label htmlFor="termCon" className="text">
                    I accepted all terms and conditions
                  </label>
                </div>
              </div>

              {error && <p className="text-danger">{error.message}</p>}

              <div className="input-field button">
                <input
                  type={match ? "submit" : "button"}
                  value="SignUp"
                ></input>
              </div>
            </form>
            {loading && <Loading></Loading>}
            <div className="login-signup">
              <span className="text">
                Already have an account?
                <Link to="/login" className="text login-link ms-1">
                  Login Now
                </Link>
              </span>
              <SocialLogIn></SocialLogIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
