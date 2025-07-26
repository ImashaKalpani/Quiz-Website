import React, { useEffect, useState, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ClockIcon, AlertCircleIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
// Mock quiz data
const quizData = {
  '1001': {
    id: 1001,
    title: 'Programming Basics',
    moduleId: 101,
    moduleName: 'Introduction to Programming',
    timeLimit: 15,
    questions: [{
      id: 1,
      text: 'What is a variable in programming?',
      options: ['A fixed value that cannot be changed', 'A container for storing data values', 'A programming language', 'A type of function'],
      correctAnswer: 1
    }, {
      id: 2,
      text: 'Which of the following is NOT a data type in most programming languages?',
      options: ['Integer', 'String', 'Boolean', 'Program'],
      correctAnswer: 3
    }, {
      id: 3,
      text: 'What does the following code do: x = x + 1;',
      options: ['Assigns the value 1 to x', 'Creates a new variable', 'Increments the value of x by 1', 'Causes an error'],
      correctAnswer: 2
    }, {
      id: 4,
      text: 'What is a comment in programming?',
      options: ['A line of code that must be executed', 'Text that is ignored by the compiler/interpreter', 'A special function', 'A debugging tool'],
      correctAnswer: 1
    }, {
      id: 5,
      text: 'Which symbol is commonly used for multiplication in programming?',
      options: ['x', '*', '^', '#'],
      correctAnswer: 1
    }]
  },
  '2001': {
    id: 2001,
    title: 'Classes and Objects',
    moduleId: 201,
    moduleName: 'Object-Oriented Programming',
    timeLimit: 20,
    questions: [{
      id: 1,
      text: 'What is a class in object-oriented programming?',
      options: ['A built-in function', 'A template for creating objects', 'A type of variable', 'A collection of methods'],
      correctAnswer: 1
    }, {
      id: 2,
      text: 'What is encapsulation?',
      options: ['Creating multiple instances of a class', 'Hiding the internal state and functionality of an object', 'Inheriting properties from a parent class', 'Converting one data type to another'],
      correctAnswer: 1
    }, {
      id: 3,
      text: 'What keyword is used to create a new instance of a class in Java?',
      options: ['create', 'instance', 'new', 'class'],
      correctAnswer: 2
    }, {
      id: 4,
      text: 'What is a constructor?',
      options: ['A method used to destroy objects', 'A special method called when an object is created', 'A variable that stores class information', 'A keyword in programming'],
      correctAnswer: 1
    }, {
      id: 5,
      text: 'Which of the following is NOT a principle of OOP?',
      options: ['Inheritance', 'Encapsulation', 'Polymorphism', 'Fragmentation'],
      correctAnswer: 4
    }]
  }
};
const QuizPage: React.FC = () => {
  const {
    moduleId,
    quizId
  } = useParams<{
    moduleId: string;
    quizId: string;
  }>();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const quiz = quizData[quizId as keyof typeof quizData];
  // If quiz not found, show error
  if (!quiz) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <AlertCircleIcon className="h-12 w-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-xl font-bold text-gray-900">
            Quiz Not Found
          </h2>
          <p className="mt-2 text-gray-600">
            The quiz you're looking for doesn't exist.
          </p>
          <button onClick={() => navigate(`/module/${moduleId}/quizzes`)} className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            Back to Quizzes
          </button>
        </div>
      </div>;
  }
  // Initialize timer and selected answers
  useEffect(() => {
    setTimeLeft(quiz.timeLimit * 60);
    setSelectedAnswers(new Array(quiz.questions.length).fill(-1));
  }, [quiz]);
  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !quizSubmitted) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizSubmitted) {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizSubmitted]);
  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    // Calculate score
    let score = 0;
    selectedAnswers.forEach((selected, index) => {
      if (selected === quiz.questions[index].correctAnswer) {
        score++;
      }
    });
    // Navigate to results page with score data
    navigate(`/module/${moduleId}/quiz/${quizId}/result`, {
      state: {
        score,
        totalQuestions: quiz.questions.length,
        selectedAnswers,
        quizTitle: quiz.title
      }
    });
  };
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isAnswered = selectedAnswers[currentQuestionIndex] !== -1;
  const allQuestionsAnswered = !selectedAnswers.includes(-1);
  return <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Quiz Header */}
          <div className="bg-blue-600 px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">{quiz.title}</h1>
            <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-md text-white">
              <ClockIcon className="h-5 w-5 mr-2" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          {/* Quiz Progress */}
          <div className="px-6 py-3 bg-gray-50 border-b">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
              </span>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-2">
                  {Math.round(selectedAnswers.filter(a => a !== -1).length / quiz.questions.length * 100)}
                  % Complete
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: `${selectedAnswers.filter(a => a !== -1).length / quiz.questions.length * 100}%`
                }}></div>
                </div>
              </div>
            </div>
          </div>
          {/* Question */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {currentQuestion.text}
            </h2>
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => <div key={index} className={`border rounded-md p-4 cursor-pointer transition-all ${selectedAnswers[currentQuestionIndex] === index ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`} onClick={() => handleAnswerSelect(index)}>
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedAnswers[currentQuestionIndex] === index ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
                      {selectedAnswers[currentQuestionIndex] === index && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <span className="text-gray-700">{option}</span>
                  </div>
                </div>)}
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0} className={`px-4 py-2 border rounded-md text-sm font-medium ${currentQuestionIndex === 0 ? 'border-gray-200 text-gray-400 cursor-not-allowed' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                Previous
              </button>
              <div className="flex space-x-3">
                {currentQuestionIndex === quiz.questions.length - 1 ? <button onClick={handleSubmitQuiz} disabled={!allQuestionsAnswered} className={`px-4 py-2 rounded-md text-sm font-medium ${allQuestionsAnswered ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                    Submit Quiz
                  </button> : <button onClick={handleNextQuestion} className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                    Next
                  </button>}
              </div>
            </div>
          </div>
          {/* Question Navigation */}
          <div className="px-6 py-4 bg-gray-50 border-t">
            <div className="flex flex-wrap gap-2">
              {quiz.questions.map((_, index) => <button key={index} onClick={() => setCurrentQuestionIndex(index)} className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${currentQuestionIndex === index ? 'bg-blue-600 text-white' : selectedAnswers[index] !== -1 ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-700'}`}>
                  {index + 1}
                </button>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default QuizPage;