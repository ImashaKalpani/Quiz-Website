import React, { useState, useEffect } from 'react';
import withAuth from './privatepage';
import axios from 'axios';
import SuccessAlert2 from "./alert";
import Cookies from "js-cookie";
import { useParams } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaSpinner } from "react-icons/fa";

function Quizy() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [autoclose, setAutoclose] = useState(false);
  const [result, setResult] = useState(true);
  const [score, setScore] = useState(0);
  const [loader, setLoader] = useState(false);
  const [dAlert, setDAlert] = useState({
    bodercolor: "border-[#ff0000]",
    txtcolor: "text-[#ff0000]",
    bgcolor: "bg-[#ff0000]",
    icon: "bg-[#0c2e0c]",
    headtitle: "Failed server Error",
    msg: "Please try again later",
  });

  let token = Cookies.get("token");
  const subject = params.subject;

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      let response;
      if(subject==="all"){
         response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/fetchtopic`,
        { userAnswer },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
    } else {
      response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/questions/${subject}`,
        { userAnswer },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
    }
      if (response.data.message === "success") {
        setData(response.data.qWithoutAns);
        setQuestion(response.data.qWithoutAns[0]);
        setLoader(true);
      } else {
        console.log(response.data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionChange = (key) => {
    setSelectedOption(key);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      setDAlert({
        bodercolor: "border-[#ff0000]",
        txtcolor: "text-[#ff0000]",
        bgcolor: "bg-[#ff0000]",
        icon: "bg-[#0c2e0c]",
        headtitle: "Please select Answer",
        msg: " before proceeding.",
      });
      setAutoclose(true);
      setTimeout(() => {
        setAutoclose(false);
      }, 2000);
      return;
    }

    const newAnswer = { _id: question._id, userans: selectedOption };
    setUserAnswer((prevAnswers) => [...prevAnswers, newAnswer]);

    if (index === data.length - 1) {
      submitAnswers([...userAnswer, newAnswer]);
    } else {
      const newIndex = index + 1;
      setIndex(newIndex);
      setQuestion(data[newIndex]);
      setSelectedOption('');
    }
  };

  const submitAnswers = async (answers) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/score`, { userAnswer: answers }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      console.log('Quiz submitted successfully:', response.data.score);
      setScore(response.data.score);
      setResult(false);
      setData(response.data.data);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  const getBorderColor = (correctAnswer, userAnswer, optionKey) => {
    if (userAnswer === optionKey) {
      return correctAnswer === optionKey ? 'border-green-500 bg-[#00ff0077]' : 'border-red-500 bg-[#ff000077]';
    }
    return 'border-gray-300';
  };

  return (
    <div className='w-full relative h-full flex justify-center items-center bg-[rgb(255 253 244)]'>
      {autoclose && <SuccessAlert2 dAlert={dAlert}></SuccessAlert2>}
      {loader && question ? (
        result ? (
          <div className='w-full lg:w-[65%] shadow-2xl p-5 lg:p-10 rounded-[50px] my-5 bg-white'>
            <div className='text-3xl lg:text-4xl font-extrabold'>Quizy</div>
            <hr className='border border-[#00000077] mt-5' />
            <div className='text-xl lg:text-2xl my-4'>{question?.question}</div>
            <div>{question.topicName} <div>{index + 1}/{data.length}</div></div>
            <div className='flex flex-col justify-evenly w-full'>
              {Object.entries(question?.options || {}).map(([key, value]) => (
                <div className='w-full my-2' key={key}>
                  <div className='w-full flex'>
                    <label
                      htmlFor={key}
                      className={`w-full lg:w-[60%] p-2 lg:p-4 rounded-lg border-2 ${selectedOption === key ? 'bg-[#1f2937] text-[#fff]' : 'bg-gray-200 text-black'}`}
                    >
                      {value}
                    </label>
                    <input
                      hidden
                      type='radio'
                      value={key}
                      name={question._id}
                      id={key}
                      checked={selectedOption === key}
                      onChange={() => handleOptionChange(key)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              className='w-full lg:w-60 py-3 mt-5 cursor-pointer rounded-[4px] bg-[#6b99b1] px-3 rounded-3xl text-center font-semibold text-white'>
              {index === data.length - 1 ? 'Submit Quiz' : 'Next Question'}
            </button>
          </div>
        ) : (
          <>
            <div className="absolute top-3 right-3">
              <Link to="/">
                <button className="text-xl text-black hover:text-blue-500 focus:outline-none" title="Go to Home">
                  <FaHome size={45} />
                </button>
              </Link>
            </div>
            <div className='absolute top-2'>
              <div className='w-full flex row'>
                <div className='w-[50%] h-24 z-10 bg-slate-100'>
                  <div className='text-xl lg:text-2xl text-center p-1'>You scored</div>
                  <div className='text-4xl lg:text-5xl text-center'>{score}</div>
                </div>
                <div className='w-[50%] text-slate-100 h-24 z-20 bg-slate-900'>
                  <div className='text-xl lg:text-2xl p-1 text-center'>out Of</div>
                  <div className='text-4xl lg:text-5xl text-center'>{data.length}</div>
                </div>
              </div>
              {data.map((qsn) => (
                <div key={qsn._id}>
                  <div className='text-xl lg:text-2xl my-4'>{qsn?.question}</div>
                  <div className='flex flex-col justify-evenly w-full'>
                    {Object.entries(qsn.options).map(([key, value]) => (
                      <div className='w-full my-2' key={key}>
                        <div className='w-full flex'>
                          <div
                            className={`w-full lg:w-[60%] p-2 lg:p-4 rounded-lg border-2 ${getBorderColor(qsn.correctAnswer, userAnswer.find(answer => answer._id === qsn._id)?.userans, key)}`}
                          >
                            {value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='text-lg mt-2'>Correct Answer: {qsn.correctAnswer}</div>
                </div>
              ))}
            </div>
          </>
        )
      ) : (
        <div className="w-full flex justify-center flex-col items-center"> <FaSpinner className="animate-spin h-8 w-8 text-[#19444a]" />  <Link to="/" className=" px-6 py-3 my-5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#19444a] rounded-lg hover:bg-[#19444ae6] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
      back to Home
         </Link> if it take long time
         check in your profile may you didn't selected any topic</div>
      )}
    </div>
  );
}

export default withAuth(Quizy);
