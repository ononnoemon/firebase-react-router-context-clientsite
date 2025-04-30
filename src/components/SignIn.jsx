import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
export default function SignIn() {
  const {signIn}=useContext(AuthContext)
  const handlOnSignIn=(e)=>{
    e.preventDefault()
    console.log('Sign In Clicked')
    const email=e.target.email.value
    const password=e.target.password.value
    signIn(email,password)
    .then(result=>{
      console.log(result)
    })
  }

  return (
    <div className="h-screen">
      <div className="h-9/10 flex flex-col justify-center items-center bg-gray-50">
        <form className="bg-white w-1/3 mx-auto my-4 shadow-xl p-5">
          <h1 className="text-center text-3xl font-bold mb-7">Sign In</h1>
          <input
            className="block w-full p-2 my-2 border border-gray-300 focus:border-gray-200 focus:outline-none"
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
          />
          <input
            className="block w-full p-2 my-2 border border-gray-300 focus:border-gray-200 focus:outline-none"
            type="password"
            name="password"
            id=""
            placeholder="Enter Password"
          />
          <div className="flex justify-between">
            <div>
              <input type="checkbox" id="chk" />
              <label htmlFor="chk">Show Password</label>
            </div>
            <div>
              <Link to={"/"}>
                {" "}
                <p>Forgotten Password?</p>{" "}
              </Link>
            </div>
          </div>
          <input
            onClick={handlOnSignIn}
            className="btn bg-primary text-white w-full my-2"
            type="submit"
            value="Sign In"
          />
          <div className="flex justify-center items-center space-x-2">
            <hr className="w-1/4 border-gray-300 " />{" "}
            <span>Or SignUp With</span>
            <hr className="w-1/4 border-gray-300" />
          </div>
          <p>
            <button className="flex w-64 items-center rounded space-x-1 mx-auto my-2 bg-gray-200 py-2 px-4 font-bold">
              <FaGoogle /> <span>Sign Up With Google</span>
            </button>
          </p>
          <p>
            <button className="flex w-64 items-center rounded space-x-1 mx-auto my-2 bg-gray-200 py-2 px-4 font-bold">
              <FaFacebookF /> <span>Sign Up With Facebook</span>
            </button>
          </p>
          <p>
            <button  className="flex w-64 items-center rounded space-x-1 mx-auto my-2 bg-gray-200 py-2 px-4 font-bold">
              <FaGithub /> <span>Sign Up With Github</span>
            </button>
          </p>

          <p className="text-center">
            Don't have account?
            <Link to={"/signup"}>
              <span>Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
