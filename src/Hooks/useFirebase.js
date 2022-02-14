
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Firebase/firebase.init";


initializeAuthentication();
const useFirebase=() => {
    const googleProvider = new GoogleAuthProvider();


    const [user ,setUser]=useState({});
    const auth=getAuth();

    //register with google 
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
          
      }

      // Stay in this page 
      useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            
            
        });
        return () => unsubscribed;
      }, []);

      // Logout Now
const logOut = () => {

    signOut(auth)
        .then(() => {  setUser({})});
  }
  

    return{
        user,
        setUser,
        handleGoogleSignIn,
        logOut

    }


}
export default useFirebase;