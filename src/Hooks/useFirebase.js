import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAthentication from "../Components/Firebase/firebase.init";


initializeAthentication()

const useFirebase = () =>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState({})
    const [error,setError] =useState("")

    const handleGoogleSignIn =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
        .catch(error=>setError(error.message))
    }

    const handleLogOut=()=>{
        signOut(auth).then(() => {
        setUser({})
          }).catch((error) => {
            setError("");
          });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                setUser(user)
                
              } else {
                setError("")
              }
            });

    },[])
    
return {
         handleGoogleSignIn,
         user,
         handleLogOut
       }
}

export default useFirebase;