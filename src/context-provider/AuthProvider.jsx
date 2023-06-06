import { createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // Create new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with google account
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout user
  const logoutUser = () => {
    setLoading(true);
    sessionStorage.clear();
    return signOut(auth);
  };

  // Get user info
  const userInfo = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // Load JWT info
  const loadJWT = (user) => {
    axios
      .post("http://localhost:5000/jwt", { email: user.email })
      .then(({ data }) => {
        const token = data.token;
        localStorage.setItem("JWT", token);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      userInfo();
      setUser(currentUser);
      if (currentUser) {
        loadJWT(currentUser);
      } else {
        localStorage.removeItem("JWT");
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createNewUser,
    loginUser,
    logoutUser,
    userInfo,
    signInWithGoogle,
    loadJWT,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
