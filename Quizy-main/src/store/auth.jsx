import { createContext, useContext, useState, useEffect } from "react";
export  const AuthContext =createContext();
import Cookies from "js-cookie";
import axios from "axios";
export const AuthProvider=({children})=>{
    const [token,setToken]=useState(Cookies.get("token"))
    const [user,setUser]=useState('')

  
    // const [user,setUser]=useState({
    //     _id: {},
    //     Fname: '',
    //     Lname: '',
    //     City: '',
    //     Email: '',
    //     Phone: '',
    //     DOB: '',
    //     Branch: '',
    //     Balance: null,
    //     Accno: undefined,
    //     UPIID: '',
    //     __v: 22
    //   })
    let isLoggedIn=!!token
   const stroteTokenInLS=(servertoken)=>
    {
       Cookies.set("token",servertoken)
       setToken(servertoken);
    }
    const FetchUserData=async()=>{
        if (!token) return; 
        try {
            const userData=await axios.get(`${import.meta.env.VITE_APP_API_URL}/user`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
             
              console.log(userData.data);
              setUser(userData.data)

              
            
        } catch (error) {
            console.error("fetch error user not found");
            
        }
    }
    const LogoutUser=()=>{
        Cookies.remove("token")
        setToken("");
        setUser("");
    } 
    useEffect(() => {

        FetchUserData();
    }, [token])
    
    return(<AuthContext.Provider value={{stroteTokenInLS,isLoggedIn,LogoutUser,user, FetchUserData}}>{children}</AuthContext.Provider>);

}
export const useAuth=()=>{
    return useContext(AuthContext)
}