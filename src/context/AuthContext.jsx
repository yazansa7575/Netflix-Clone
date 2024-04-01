import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../FireBase";
import { useEffect } from "react";

// create Context
export let AuthContext = createContext();

const AuthProviders = ({ children }) => {
  // current User info [we need access this in any place in this app ]
  const [currentUser, setCurrentUser] = useState();

  //sign Up [regester]
  const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
    email = String(email).toLocaleLowerCase();
    // we will catch any error when calling this fun
    setDoc(doc(db, "Users", email), {
      userList: [],
    });
  };
  // sign in [log in ]
  const signIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
    // we will catch any error when calling this fun
  };
  // sign out [log in ]
  const logOut = async () => {
    await signOut(auth);
  };
  // on Auth State Changed
  useEffect(() => {
    let unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  });

  // Provider [that we wrapped the app by]
  return (
    <AuthContext.Provider value={{ signUp, signIn, logOut, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
