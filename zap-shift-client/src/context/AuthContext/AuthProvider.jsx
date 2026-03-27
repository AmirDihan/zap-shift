import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }
  const updateUserPassword = (newPassword) => {
    setLoading(true)
    return updatePassword(auth.currentUser, newPassword)
  }
  const getPasswordResetEmail =(email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }
  //observe user state
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    })
    return () => {
        unSubscribe();
    }
  },[])
  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    updateUserPassword,
    getPasswordResetEmail
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
