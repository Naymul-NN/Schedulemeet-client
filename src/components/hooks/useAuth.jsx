"use client";

import { useContext } from "react";
import { AuthContext } from "../auth/Authprovider";

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

export default useAuth;
