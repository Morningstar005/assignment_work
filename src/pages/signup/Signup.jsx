import React from "react";
import AuthWrapperOne from "../../components/auth-wraper";
import LoginForm from "../login/LoginForm";
import SignForm from "./SignForm";

const Signup = () => {
  return (
    <AuthWrapperOne
      title={
        <>
          Great Welcome Please{" "}
          <span className="relative inline-block">
            SignUp to
          </span>{" "}
          Explore.
        </>
      }
      description=""
      pageImage={
        <div className="relative mx-auto w-full max-w-[700px] h-auto">
          <img
            src="https://img.freepik.com/free-photo/abstract-dark-blue-futuristic-digital-grid-background_53876-104051.jpg?t=st=1734628720~exp=1734632320~hmac=d366b54181463caf4710babbf3f5162d576a865840aa514d673e682663867fb0&w=1380"
            alt="Sign up"
            priority
            layout="responsive"
            width={700}
            height={500}
            sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, 700px"
            className="object-cover"
          />
        </div>
      }
    >
      <SignForm />
    </AuthWrapperOne>
  );
};

export default Signup;
