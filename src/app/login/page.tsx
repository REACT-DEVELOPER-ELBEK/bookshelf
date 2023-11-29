"use client";
import "./Login.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
    const navigation = useRouter()
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submitLogin() {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password }
      );
      const result = response.data.access_token;
      if (response.data.access_token) {
        setLoading(false)
        toast.success("Successfull Sign in", {
          theme: "colored",
        });
        localStorage.setItem(
          "access_token",
          JSON.stringify(response.data.access_token)
        );
        setTimeout(() => {
            navigation.push("/")
        }, 1270);
        return result;
      } else {
        toast.error("Wrong password or email", {
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  }
  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login__title">
            <h1>Sign in</h1>
          </div>
          <div className="fast__login">
            <Link href="google.com">
              <FcGoogle />
              <p>Continue with Google</p>
            </Link>
            <Link href="facebook.com">
              <FaFacebook />
              <p>Continue with Facebook</p>
            </Link>
          </div>
          <h2>OR</h2>
          <div className="login__inputs">
            <div className="login__input">
              <label>Your name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="login__input">
              <label>Your email</label>
              <input
                type="text"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login__input">
              <label>Your password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login__input">
              <label>Your username</label>
              <input type="text" placeholder="Enter your username" />
            </div>
          </div>
          <button onClick={() => submitLogin()}>
            {loading ? (
              <span className="login-loading">
                <AiOutlineLoading />
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
