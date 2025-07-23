
import React, { useState } from "react";
;
import { TbFaceIdError } from "react-icons/tb";

import { IoWarning } from "react-icons/io5";

import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
const SuccessAlert2 = (props) => {
    const {dAlert}=props
  
    // const [dAlert,setDAlert]= useState({
    //     bodercolor:"border-[#00ff00]",
    //     txtcolor:"text-[#00ff00]",
        
    //     bgcolor:"bg-[#00ff00]",
    //     icon:"bg-[#0c2e0c]",
    //     headtitle:"     Message Sent Successfully",
    //     msg:"Lorem Ipsum is simply dummy",

    // })
  return (
    <div className="py-1 w-80 h-[66px] rounded-lg bg-white dark:bg-dark absolute right-0 top-24">
      <div className="container ">
        <div className={`${dAlert.bodercolor} ${dAlert.bgcolor} bg-opacity-15 flex w-full rounded-lg border-l-[6px] px-8 py-8 md:p-1`}>
          <div className="bg-green p-1 flex h-[34px] w-full max-w-[40px] items-center justify-center rounded-md">
           
{ dAlert.bgcolor==="bg-[#00ff00]" &&
            <IoCheckmarkDoneCircleOutline className={`w-full h-full  ${dAlert.txtcolor}`} />
} 
 {dAlert.bgcolor==="bg-[#ff0000]" &&
            <TbFaceIdError   className={`w-full h-full  ${dAlert.txtcolor}`}/>}
 {dAlert.bgcolor==="bg-[#ffff00]"&&
            <IoWarning   className={`w-full h-full  ${dAlert.txtcolor}`}/>}
            
          </div>
          <div className="w-full">
            <h5 className={`mb-1 text-lg font-semibold ${dAlert.txtcolor}`}>
            {dAlert.headtitle}
            </h5>
            <p className="text-base leading-relaxed text-body-color">
            {dAlert.msg}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert2;
