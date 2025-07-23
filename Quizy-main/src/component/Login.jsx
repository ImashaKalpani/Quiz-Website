import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLock } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import axios from "axios";
import SuccessAlert2 from "./alert";
import { useAuth } from "../store/auth";
import Loading from "./Loading";  // Import the loading spinner
import { FaSpinner } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const { stroteTokenInLS } = useAuth();
  const [autoclose, setAutoclose] = useState(false);
  const [loading, setLoading] = useState(false);  // Loading state for login request
  const [user, setUser] = useState({ 
    Email: "",
    userPassword: "",
  });

  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const [dAlert, setDAlert] = useState({
    bodercolor: "border-[#ff0000]",
    txtcolor: "text-[#ff0000]",
    bgcolor: "bg-[#ff0000]",
    icon: "bg-[#0c2e0c]",
    headtitle: "Failed server Error",
    msg: "Please try again later",
  });

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);  // Set loading state to true when login starts
    try {
      const response = await axios.post(`${apiUrl}/login`, user);
      if (response.data.message === "success") {
        stroteTokenInLS(response.data.token);
        navigate("/select");
      } else if (response.data.message === "wrong") {
        setDAlert({
          bodercolor: "border-[#ff0000]",
          txtcolor: "text-[#ff0000]",
          bgcolor: "bg-[#ff0000]",
          icon: "bg-[#0c2e0c]",
          headtitle: "Invalid password",
          msg: "Please try again",
        });
        setAutoclose(true);
        setTimeout(() => setAutoclose(false), 6000);
      } else {
        setDAlert({
          bodercolor: "border-[#ff0000]",
          txtcolor: "text-[#ff0000]",
          bgcolor: "bg-[#ff0000]",
          icon: "bg-[#0c2e0c]",
          headtitle: "User does not exist",
          msg: "Please try again",
        });
        setAutoclose(true);
        setTimeout(() => setAutoclose(false), 6000);
      }
    } catch (error) {
      setDAlert({
        bodercolor: "border-[#ff0000]",
        txtcolor: "text-[#ff0000]",
        bgcolor: "bg-[#ff0000]",
        icon: "bg-[#0c2e0c]",
        headtitle: "Something went wrong",
        msg: "Please try again later",
      });
      setAutoclose(true);
      setTimeout(() => setAutoclose(false), 6000);
    } finally {
      setLoading(false);  // Set loading state to false after login attempt
    }
  };

  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return navigate('/');
  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          {autoclose && <SuccessAlert2 dAlert={dAlert}></SuccessAlert2>}

          <form className="w-full max-w-md" onSubmit={login}>
            <div className="flex justify-center mx-auto">
              <img className="w-auto h-7 sm:h-8" src="/image/quiz-multicolor.png" alt="Logo" />
            </div>

            <div className="flex items-center justify-center mt-6">
              <Link
                to="/signup"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
              >
                sign in
              </Link>
              <Link
                to="/login"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-[#19444a] dark:border-[#19444a] dark:text-white"
              >
                login
              </Link>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <HiOutlineUser className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                name="Email"
                value={user.Email}
                required
                onChange={onChangeInput}
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <BiLock className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="password"
                name="userPassword"
                value={user.userPassword}
                required
                onChange={onChangeInput}
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

            <div className="mt-6">
            {loading ?<div className="w-full flex justify-center items-center"> <FaSpinner className="animate-spin h-8 w-8 text-[#19444a]" /> </div>:<button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#19444a] rounded-lg hover:bg-[#19444ae6] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                disabled={loading}  // Disable button when loading
              >
                Login 
              </button>}
              <div className="mt-6 text-center">
                <Link to="/signup" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
               you haven't an account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
