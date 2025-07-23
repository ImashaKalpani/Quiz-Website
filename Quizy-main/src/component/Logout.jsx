
import { useAuth } from '../store/auth'
import { Navigate } from 'react-router-dom'
import { useEffect, React } from 'react'

export default function Logout() {
    const {LogoutUser}=useAuth()
    useEffect(() => {

    
      LogoutUser();
    }, [LogoutUser])
    
  return <Navigate to='/'></Navigate>
}

        {/* <div classname="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]" onClick={ setDetails({...details,["ammount"]:"100"})}>100</div>
        <div classname="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] " onClick={ setDetails({...details,["ammount"]:"500"})}>$500</div>
        <div classname="mt-[14px] cursor-pointer truncate rounded-[4px] border border-green-700 p-3 text-[#191D23]" onClick={ setDetails({...details,["ammount"]:"1000"})}>$1000</div>
        <div classname="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]" onClick={ setDetails({...details,["ammount"]:"5000"})}>$500.00</div> */}