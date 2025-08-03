import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BookOpenIcon, ClockIcon, HelpCircleIcon, AlertTriangleIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
// Mock module data
const modulesData = {
  '101': {
    id: 101,
    name: 'Introduction to Programming'
  },
  '201': {
    id: 201,
    name: 'Object-Oriented Programming'
  },
  '301': {
    id: 301,
    name: 'Software Engineering'
  },
  '401': {
    id: 401,
    name: 'Artificial Intelligence'
  }
};
// Mock quizzes data
const quizzesData = {
  '101': [{
    id: 1001,
    title: 'Programming Basics',
    questions: 10,
    timeLimit: 15,
    difficulty: 'Easy'
  }, {
    id: 1002,
    title: 'Control Structures',
    questions: 12,
    timeLimit: 20,
    difficulty: 'Medium'
  }, {
    id: 1003,
    title: 'Functions and Methods',
    questions: 15,
    timeLimit: 25,
    difficulty: 'Medium'
  }, {
    id: 1004,
    title: 'Arrays and Lists',
    questions: 10,
    timeLimit: 15,
    difficulty: 'Medium'
  }, {
    id: 1005,
    title: 'File Handling',
    questions: 8,
    timeLimit: 10,
    difficulty: 'Hard'
  }],
  '201': [{
    id: 2001,
    title: 'Classes and Objects',
    questions: 12,
    timeLimit: 20,
    difficulty: 'Medium'
  }, {
    id: 2002,
    title: 'Inheritance',
    questions: 15,
    timeLimit: 25,
    difficulty: 'Medium'
  }, {
    id: 2003,
    title: 'Polymorphism',
    questions: 10,
    timeLimit: 15,
    difficulty: 'Hard'
  }, {
    id: 2004,
    title: 'Encapsulation',
    questions: 8,
    timeLimit: 10,
    difficulty: 'Medium'
  }, {
    id: 2005,
    title: 'Design Patterns',
    questions: 20,
    timeLimit: 30,
    difficulty: 'Hard'
  }],
  '301': [{
    id: 3001,
    title: 'Software Development Lifecycle',
    questions: 15,
    timeLimit: 20,
    difficulty: 'Medium'
  }, {
    id: 3002,
    title: 'Agile Methodologies',
    questions: 12,
    timeLimit: 15,
    difficulty: 'Medium'
  }, {
    id: 3003,
    title: 'Requirements Engineering',
    questions: 10,
    timeLimit: 15,
    difficulty: 'Medium'
  }, {
    id: 3004,
    title: 'Software Testing',
    questions: 15,
    timeLimit: 20,
    difficulty: 'Hard'
  }, {
    id: 3005,
    title: 'Project Management',
    questions: 20,
    timeLimit: 25,
    difficulty: 'Hard'
  }],
  '401': [{
    id: 4001,
    title: 'AI Fundamentals',
    questions: 15,
    timeLimit: 20,
    difficulty: 'Medium'
  }, {
    id: 4002,
    title: 'Machine Learning Basics',
    questions: 20,
    timeLimit: 30,
    difficulty: 'Hard'
  }, {
    id: 4003,
    title: 'Neural Networks',
    questions: 15,
    timeLimit: 25,
    difficulty: 'Hard'
  }, {
    id: 4004,
    title: 'Natural Language Processing',
    questions: 12,
    timeLimit: 20,
    difficulty: 'Hard'
  }, {
    id: 4005,
    title: 'Ethical AI',
    questions: 10,
    timeLimit: 15,
    difficulty: 'Medium'
  }]
};
// Difficulty badge colors
const difficultyColors = {
  Easy: 'bg-green-100 text-green-800',
  Medium: 'bg-blue-100 text-blue-800',
  Hard: 'bg-red-100 text-red-800'
};
const QuizSetup: React.FC = () => {
  const {
    moduleId
  } = useParams<{
    moduleId: string;
  }>();
  const navigate = useNavigate();
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);
  const module = modulesData[moduleId as keyof typeof modulesData] || {
    id: 0,
    name: 'Unknown Module'
  };
  const quizzes = quizzesData[moduleId as keyof typeof quizzesData] || [];
  const handleStartQuiz = () => {
    if (selectedQuiz !== null) {
      navigate(`/module/${moduleId}/quiz/${selectedQuiz}`);
    }
  };
  return <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{
        label: 'All Modules',
        path: '/'
      }, {
        label: module.name,
        path: `/module/${moduleId}/description`
      }, {
        label: 'Quizzes'
      }]} />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {module.name}: Quizzes
          </h1>
          <p className="mt-2 text-gray-600">
            Select a quiz to test your knowledge
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <div className="bg-smartmind-light border-l-4 border-smartmind-dark p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <HelpCircleIcon className="h-5 w-5 text-smartmind-dark" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-smartmind-dark">
                      Quiz Instructions
                    </h3>
                    <div className="mt-2 text-sm text-smartmind-dark">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Select one quiz from the list below</li>
                        <li>
                          Each quiz has a specific time limit and number of
                          questions
                        </li>
                        <li>You can attempt each quiz multiple times</li>
                        <li>Your highest score will be recorded</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Available Quizzes
              </h2>
              <div className="space-y-4">
                {quizzes.map(quiz => <div key={quiz.id} className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedQuiz === quiz.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`} onClick={() => setSelectedQuiz(quiz.id)}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${selectedQuiz === quiz.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                          {selectedQuiz === quiz.id ? <CheckCircleIcon className="h-4 w-4" /> : quiz.id.toString().slice(-1)}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {quiz.title}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <HelpCircleIcon className="h-4 w-4 mr-1" />
                            <span>{quiz.questions} Questions</span>
                            <span className="mx-2">•</span>
                            <ClockIcon className="h-4 w-4 mr-1" />
                            <span>{quiz.timeLimit} Minutes</span>
                          </div>
                        </div>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${difficultyColors[quiz.difficulty as keyof typeof difficultyColors]}`}>
                        {quiz.difficulty}
                      </span>
                    </div>
                  </div>)}
              </div>
              {quizzes.length === 0 && <div className="text-center py-8">
                  <AlertTriangleIcon className="h-12 w-12 text-yellow-500 mx-auto" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No quizzes available
                  </h3>
                  <p className="mt-1 text-gray-500">
                    There are no quizzes available for this module yet.
                  </p>
                </div>}
              <div className="mt-8 flex justify-center space-x-4">
                <Link to={`/module/${moduleId}/description`} className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-smartmind-light">
                  Back to Module
                </Link>
                <button onClick={handleStartQuiz} disabled={selectedQuiz === null} className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-smartmind-dark hover:bg-smartmind-medium ${selectedQuiz === null ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default QuizSetup;