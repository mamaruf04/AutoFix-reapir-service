import React, { useEffect } from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const SocialLogIn = () => {
  const [signInWithGoogle, user, googleLoading] = useSignInWithGoogle(auth);
  const [signInWithGitHub, user2, gitLoading] = useSignInWithGithub(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  useEffect(() => {
    if (user || user2) {
      navigate(from, { replace: true });
    }
  }, [user,user2, navigate, from]);

  if (googleLoading || gitLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      {/* divider */}
      <div className="d-flex align-items-center justify-content-center">
        <div className="border-bottom border-dark w-25"></div>
        <p className="m-2 px-2">or</p>
        <div className="border-bottom border-dark w-25"></div>
      </div>
      {/* social login  */}
      <div className="container d-block d-md-flex justify-content-around mt-3 text-center rounded">
        <button
          className="border-0 py-2 px-2 mt-1 rounded bg-primary text-white"
          onClick={() => signInWithGoogle()}
        >
          <i class="uil uil-google fs-5 me-1 text-black"></i>
          Continue with Google
        </button>
        <button
          className="border-0 py-2 px-2 mt-1 rounded bg-primary text-white"
          onClick={() => signInWithGitHub()}
        >
          <i class="uil uil-github fs-5 me-1 text-black"></i>
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
