import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../FireBase";

// create Context
export let AuthContext = createContext();

const AuthProviders = ({ children }) => {
  // current User info [we need access this in any place in this app ]
  const [currentUser, setCurrentUser] = useState();

  //sign Up [regester]
  const signUp = async (email, pass) => {
    let res = await createUserWithEmailAndPassword(auth, email, pass);
    // we will catch any error when calling this fun
    setCurrentUser(res?.user);
  };
  // sign in [log in ]
  const signIn = async (email, pass) => {
    let res = await signInWithEmailAndPassword(auth, email, pass);
    // we will catch any error when calling this fun
    setCurrentUser(res?.user);
  };

  // Provider [that we wrapped the app by]
  return (
    <AuthContext.Provider value={{ signUp, signIn, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
