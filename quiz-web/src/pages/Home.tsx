import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, GraduationCapIcon, AwardIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { fetchAllModules } from '../services/api';
const yearsData = [{
  id: 1,
  name: 'First Year',
  description: 'Foundation courses for IT fundamentals',
  icon: <GraduationCapIcon className="h-8 w-8 text-blue-500" />,
  modules: 10,
  color: 'bg-blue-500'
}, {
  id: 2,
  name: 'Second Year',
  description: 'Intermediate programming and systems',
  icon: <AwardIcon className="h-8 w-8 text-green-500" />,
  modules: 10,
  color: 'bg-green-500'
}, {
  id: 3,
  name: 'Third Year',
  description: 'Advanced concepts and specializations',
  icon: <TrendingUpIcon className="h-8 w-8 text-purple-500" />,
  modules: 10,
  color: 'bg-purple-500'
}, {
  id: 4,
  name: 'Fourth Year',
  description: 'Professional preparation and projects',
  icon: <UsersIcon className="h-8 w-8 text-orange-500" />,
  modules: 10,
  color: 'bg-orange-500'
}];
const Home: React.FC = () => {
  const {
    user
  } = useAuth();
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to IT Quiz
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Test your knowledge, track your progress, and excel in your IT
              studies.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link to="/year/1" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700">
                  Start Quizzing
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <a href="#years" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                  Explore Years
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome Back Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#f5f7f7] shadow-md rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
              <BookOpenIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome back, {user?.name}!
              </h2>
              <p className="text-gray-600">Continue your learning journey</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="border border-gray-200 rounded-md p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Continue where you left off
                  </h3>
                  <p className="text-sm text-gray-600">
                    Database Design - Quiz 2
                  </p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  In Progress
                </span>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: '45%'
                }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">45% complete</p>
              </div>
              <button className="mt-4 w-full text-blue-600 hover:text-blue-800 font-medium text-sm">
                Resume Quiz
              </button>
            </div>
            <div className="border border-gray-200 rounded-md p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Recent Achievement
                  </h3>
                  <p className="text-sm text-gray-600">
                    Programming Fundamentals - Quiz 3
                  </p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Completed
                </span>
              </div>
              <div className="mt-4 flex items-center">
                <AwardIcon className="h-5 w-5 text-yellow-500 mr-1" />
                <span className="text-gray-700 font-medium">Score: 92%</span>
              </div>
              <button className="mt-4 w-full text-blue-600 hover:text-blue-800 font-medium text-sm">
                View Results
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Years Section */}
      <div id="years" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Choose Your Year
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {yearsData.map(year => <Link key={year.id} to={`/year/${year.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className={`h-2 ${year.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-100 rounded-full p-3">
                    {year.icon}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {year.modules} Modules
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{year.name}</h3>
                <p className="mt-2 text-gray-600">{year.description}</p>
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Modules
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>)}
        </div>
      </div>
      {/* Statistics Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Your Learning Stats
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow-md rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                    <BookOpenIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-5">
                    <div className="text-sm font-medium text-gray-500 truncate">
                      Total Quizzes Taken
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                      24
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow-md rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                    <AwardIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-5">
                    <div className="text-sm font-medium text-gray-500 truncate">
                      Average Score
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                      86%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow-md rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                    <TrendingUpIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-5">
                    <div className="text-sm font-medium text-gray-500 truncate">
                      Modules Explored
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                      18
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow-md rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-full p-3">
                    <UsersIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-5">
                    <div className="text-sm font-medium text-gray-500 truncate">
                      Rank Among Peers
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                      Top 15%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Home;