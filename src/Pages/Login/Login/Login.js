import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { toast, Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "../accountShared.css";
import SocialLogIn from "../SocialLogIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // password reset
  const [sendPasswordResetEmail, sending, passResetError] =
    useSendPasswordResetEmail(auth);

  const handlePasswordReset = async () => {
    if (email) {
      // await sendPasswordResetEmail(email);
      toast.promise(sendPasswordResetEmail(email), {
        loading: "Sending...",
        success: <b>Email send!</b>,
        error: <b>Could not save.</b>,
      });
    } else {
      toast.error("please provide a valid email.");
    }
  };

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  // if (loading || sending) {
  //   return <Loading></Loading>;
  // }
  return (
    <>
      <div className="account-section">
        <div className="account-container">
          <div className="forms">
            <div className="form login">
              <span className="title">Login</span>
              <form
                onSubmit={(e) =>
                  signInWithEmailAndPassword(email, password) &&
                  e.preventDefault()
                }
              >
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
                    placeholder="Enter your password"
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

                <div className="checkbox-text">
                  <div className="checkbox-content">
                    <input type="checkbox" id="logCheck"></input>
                    <label htmlFor="logCheck" className="text">
                      Remember me
                    </label>
                  </div>

                  <Link onClick={handlePasswordReset} to="#" className="text">
                    Forgot password?
                  </Link>
                </div>
                {sending && <Loading></Loading>}
                {passResetError || error ? (
                  <p className="text-danger mt-1">
                    {passResetError?.message || error?.message}
                  </p>
                ) : (
                  ""
                )}

                <div className="input-field button">
                  <input type="submit" value="Login"></input>
                </div>
                {loading && <Loading></Loading>}
              </form>

              <div className="login-signup">
                <span className="text">
                  Don't have an account?
                  <Link to="/signup" className="text signup-link ms-1">
                    Register Now
                  </Link>
                </span>
                <SocialLogIn></SocialLogIn>
                <Toaster></Toaster>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
