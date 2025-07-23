import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { BsBank2 } from "react-icons/bs";
import withAuth from "./privatepage/";
import { CiEdit } from "react-icons/ci";
import {
  MdDashboard,
  MdPerson,
  MdTableChart,
  MdNotifications,
  MdLogin,
  MdAppRegistration,
  MdSearch,
  MdMenu,
  MdExpandMore,
  MdOutlineAccountBalance,
  MdOutlinePeople,
  MdOutlineWork,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { useAuth } from "../store/auth";
import axios from "axios";

const userKeys = {
  Fname: "First Name",
  Lname: "Last Name",
  Email: "Email",
};

function Topics({ user }) {
  return (
    <>
      {user && user.Topics && Array.isArray(user.Topics) ? (
        user.Topics.map((topic) => (
          <label
            className="cursor-pointer px-[13px] truncate rounded-[4px] border my-[5px] p-2 m-2 bg-[#191D23] text-[#E7EAEE]"
            key={topic.topicName}
          >
            {topic.topicName}
          </label>
        ))
      ) : (
        <p>No topics available</p>
      )}
    </>
  );
}

function Profile() {
  const [lastFourItem, setLastFourItems] = useState();
  const [data, setData] = useState();
  const { user } = useAuth();
  
  useEffect(() => {
    if (user.Topics) {
      const topi = user.Topics.map((topic) => topic.topicName);
      setData(topi);
    }
  }, [user]);

  function UserTable({ user }) {
    return (
      <tbody>
        {Object.keys(userKeys).map((key) => (
          <tr key={key}>
            <td className="py-3 px-2 border-b border-blue-gray-50">
              <div className="flex items-center gap-4">
                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                  {userKeys[key]}
                </p>
              </div>
            </td>
            <td className="py-3 px-2 border-b border-blue-gray-50">
              <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                {user[key]}
              </p>
            </td>
          </tr>
        ))}
        <tr>
          <td className="py-3 px-2 border-b border-blue-gray-50">
            <div className="flex items-center gap-4">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                Topics
              </p>
            </div>
          </td>
          <td className="py-3 px-2 border-b border-blue-gray-50">
            <Topics user={user} />
          </td>
        </tr>
      </tbody>
    );
  }

  const userToken = user._id;

  return (
    <div className="min-h-screen bg-gray-50/50 flex justify-center items-center p-6 sm:p-12 lg:p-24">
      <div className="container w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[40%] h-full rounded-[30px] sm:rounded-[50px] overflow-hidden p-5 sm:p-10 bg-white shadow-lg transform duration-200 ease-in-out">
        <div className="h-24 sm:h-32 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="./image/quiz-multicolor.png"
            alt=""
          />
        </div>
        <div className="flex justify-center px-5 -mt-12">
          <img
            className="h-24 w-24 sm:h-32 sm:w-32 bg-white p-2 rounded-full"
            src="https://cdn-icons-png.freepik.com/512/9967/9967422.png"
            alt=""
          />
        </div>
        <div className="text-center px-4 sm:px-10">
          <h2 className="text-gray-800 text-2xl sm:text-3xl font-bold">
            {user.Fname + " " + user.Lname}
          </h2>
          <Link
            className="text-gray-400 mt-2 hover:text-blue-500"
            to="https://www.instagram.com/immohitdhiman/"
            target="BLANK()"
          >
            {user.Email}
          </Link>
        </div>
        <hr className="mt-6" />
        <div className="p-4 sm:p-6 w-full px-0 pt-0 pb-2">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-50 py-2 px-2 sm:py-3 text-left">
                  <p className="antialiased font-sans text-[10px] sm:text-[11px] font-medium uppercase text-blue-gray-400">
                    Name
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-2 px-2 sm:py-3 text-left">
                  <p className="antialiased font-sans text-[10px] sm:text-[11px] font-medium uppercase text-blue-gray-400">
                    Value
                  </p>
                </th>
              </tr>
            </thead>

            <UserTable user={user} />
          </table>
          <div className="w-full my-4 flex justify-center items-center">
            <Link
              to="/select"
              className="cursor-pointer relative px-[20px] sm:px-[25px] truncate rounded-[20px] sm:rounded-[23px] border-[#191D23] border-2 my-[5px] p-2 pr-10 m-2 hover:bg-[#191d2333] text-[#191D23]"
            >
              Edit Topics
              <CiEdit
                className="absolute top-2 sm:top-3 cursor-pointer right-4"
                size={19}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Profile);
