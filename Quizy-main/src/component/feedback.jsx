import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa"
import { IoCallOutline } from "react-icons/io5";
import  { FiMail } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import withAuth from "./privatepage/"
 function Contact() {
    const [alerts,setAlerts]= useState("")

const handleForm = async(e)=>{
  e.preventDefault();
  const formData = new FormData(e.target);
    const name = formData.get('name');
    const cemail = formData.get('cemail');
    const message = formData.get('message');
     console.log(cemail,name,message);
     const con="stkbamtai1@gamil.com"
     const feedback=`${name} my feedback about your website`
     let a = window.open(`https://mail.google.com/mail/u/0/?to=${con}&su=${feedback}&body=${message}&tf=cm`);
    // try {
    //   const response = await axios.post('${import.meta.env.VITE_APP_API_URL}/feedback', {
    //     name,
    //     cemail,
    //     message
    //   });
    //   console.log(response.data);
    //   if(response.data){
    //     setAlerts(" your requist successfully submited")
    //     setTimeout(() => {
    //         setAlerts("")
            
    //     }, 5000);


    //   }else if(!response.data){
    //     setAlerts(" email not valid enter valid email")
    //     setTimeout(() => {
    //         setAlerts("")
            
    //     }, 6000);

    //   }else
    //   {
    //     setAlerts("Sorry please try again later")
    //     setTimeout(() => {
    //         setAlerts("")
            
    //     }, 5000);
    //   }
    // } catch (error) {
    //     setAlerts("Sorry please try again later")
    //     setTimeout(() => {
    //         setAlerts("")
            
    //     }, 6000);
    //   console.error('Error submitting feedback:', error);
    // }
// }
}
  return (
    <div><section className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
            <div className="lg:w-1/2 lg:mx-10">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">Let’s talk</h1>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Ask us everything and we would love
                    to hear from you
                </p>

                <form className="mt-12" onSubmit={handleForm}>
                <div className='flex justify-center items-center w-full mb-3  mt-0 '><span className='text-[#1f1f1f] text-xl'>{alerts}</span></div>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input name='name' type="text" placeholder="Full Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input name='cemail' type="email" placeholder="xyz@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea name='message' className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 resize-none placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <input type='submit' value="get in touch" className="w-full rounded-md px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[rgb(37,38,40)] hover:bg-[rgb(71,72,74)] cursor-pointer focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        
                    </input>
                </form>
            </div>

            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                {/* <img className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src="/Avaz-logo2.png" alt=""/> */}

                <div className="mt-6 space-y-8 md:mt-8">
                    <Link to="https://maps.app.goo.gl/gGk5oSVKmRMRsGdr6">
                    <p className="flex items-start -mx-2">
                        <FaMapMarkerAlt className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"  />
                            

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                            Rabodi Thane West
                        </span>
                    </p>
                    </Link>


                    <p className="flex items-start -mx-2">
                        <IoCallOutline className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />
                           

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+91 8291121080</span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <FiMail  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"  s />
                           

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">shakibkumnali@gmail.com</span>
                    </p>
                </div>

                <div className="mt-6 w-80 md:mt-8">
                    <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                    <div className="flex mt-4 -mx-1.5 ">
                        <Link className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" to="https://twitter.com/">
                        <FaSquareXTwitter className="w-6 h-6 fill-current"/>
                        </Link>

                        <Link className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" to="https://in.linkedin.com/">
                            <FaLinkedinIn className="w-6 h-6"/> 
                        </Link>

                        <Link className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" to="https://www.facebook.com">
                        <FaFacebookF className="w-6 h-6"/> 
                        </Link>

                        <Link className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" to="https://www.instagram.com/">
                        <FaInstagram className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></div>)}
export default Contact;