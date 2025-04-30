import React, { useContext, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebaseinit";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

export default function SignUp() {
  const auth = getAuth(app);
  const Googleprovider = new GoogleAuthProvider();
  const Facebookprovider = new FacebookAuthProvider();
  const [profile, setProfile] = useState(null);

  const { createUser } = useContext(AuthContext);
  console.log("from sign up ", createUser);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    createUser(email, password).then((userCredential) => {
      // Signed up
    //  const user = userCredential.user;
    const creationTime=userCredential.user.metadata.creationTime
    const user = {userName,email,creationTime}
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "User Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
      updateProfile(user, {
        displayName: userName,
      }).then(() => {
        setProfile(user);
        console.log(profile);
      });
      // ...
      console.log(user);
    });
  };
  return (
    <div className="h-screen">
      {profile && (
        <>
          <p>{profile.displayName}</p>
          <p>{profile.email}</p>
        </>
      )}
      <div className="h-9/10 flex flex-col justify-center items-center bg-gray-50">
        <form
          onSubmit={handleOnSubmit}
          className="bg-white w-1/3 mx-auto my-4 shadow-xl p-5"
        >
          <h1 className="text-center text-3xl font-bold mb-7">Sign Up</h1>
          <input
            className="block w-full p-2 my-2 border border-gray-300 focus:border-gray-200 focus:outline-none"
            type="text"
            name="userName"
            id=""
            placeholder="Write Your Full Name"
          />
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
          <input
            className="block w-full p-2 my-2 border border-gray-300 focus:border-gray-200 focus:outline-none"
            type="password"
            name="confirmPassword"
            id=""
            placeholder="Enter Confirm Password"
          />
          <div className="flex justify-between">
            <div>
              <input type="checkbox" id="chk" />
              <label htmlFor="chk">Show Password</label>
            </div>
            <div>
              <Link to={"/"}>
                <input type="checkbox" id="chkk" />
                <label htmlFor="chkk">
                  I agree to the treams and condition
                </label>
              </Link>
            </div>
          </div>
          <input
            className="btn bg-primary text-white w-full my-2"
            type="submit"
            value="Sign Up"
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
            <button className="flex w-64 items-center rounded space-x-1 mx-auto my-2 bg-gray-200 py-2 px-4 font-bold">
              <FaGithub /> <span>Sign Up With Github</span>
            </button>
          </p>

          <p className="text-center">
            Already have account?
            <Link to={"/signin"}>
              <span>Sign In</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
