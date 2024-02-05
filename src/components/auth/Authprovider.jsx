"use client";

import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./firebase.config";
import useAxiospublic from "@/components/hooks/useAxious";
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiospublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setLoading(false);

      console.log(currentUser);
      if (currentUser) {
        const userInfo = {
          email: currentUser?.email,
        };
        axiosPublic
          .post("/api/v1/users/createToken", userInfo)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.error(err.message);
          });
      } else {
        axiosPublic
          .post("api/v1/users/logout")
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.error(err.message);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  const authinfo = {
    user,
    loading,
    createUser,
    userLogin,
    logOut,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
