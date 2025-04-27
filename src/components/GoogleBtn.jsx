import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebaseinit";

export default function GoogleBtn() {
  const [user, setUser] = useState(null);
  console.log(user);
  const auth = getAuth(app);
  const Googleprovider = new GoogleAuthProvider();
  const Facebookprovider = new FacebookAuthProvider();
  const handleOnClick = () => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user.email);
      })
      .catch((error) => console.error("some error", error));
  };

  const FaceBookLogin = () => {
    signInWithPopup(auth, Facebookprovider).then((result) => {
      setUser(result.user);
      console.log("Facebook Login", result.user);
    });
  };
  const handleOnClickSignOut = () => {
    signOut(auth).then((result) => {
      setUser(null);
    });
  };

  return (
    <div>
      {user && (
        <div>
          <img
            src={user?.photoURL}
            alt="User"
            referrerPolicy="no-referrer"
            className="w-16 h-16 rounded-full object-cover"
            alt=""
          />
          <p></p>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
        </div>
      )}

      {user ? (
        <button className="btn" onClick={handleOnClickSignOut}>
          Log Out
        </button>
      ) : (
        <button className="btn" onClick={handleOnClick}>
          Sign In With Google
        </button>
      )}

      {user ? (
        <button className="btn" onClick={handleOnClickSignOut}>
          Log Out
        </button>
      ) : (
        <button className="btn" onClick={FaceBookLogin}>
          Sign In With Facebook
        </button>
      )}
    </div>
  );
}
