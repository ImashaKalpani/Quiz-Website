import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, GraduationCapIcon, AwardIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
const yearsData = [{
  id: 1,
  name: 'First Year',
  description: 'Foundation courses for IT fundamentals',
  icon: <GraduationCapIcon className="w-8 h-8 text-blue-500" />,
  modules: 10,
  color: 'bg-blue-500'
}, {
  id: 2,
  name: 'Second Year',
  description: 'Intermediate programming and systems',
  icon: <AwardIcon className="w-8 h-8 text-green-500" />,
  modules: 12,
  color: 'bg-green-500'
}, {
  id: 3,
  name: 'Third Year',
  description: 'Advanced concepts and specializations',
  icon: <TrendingUpIcon className="w-8 h-8 text-purple-500" />,
  modules: 8,
  color: 'bg-purple-500'
}, {
  id: 4,
  name: 'Fourth Year',
  description: 'Professional preparation and projects',
  icon: <UsersIcon className="w-8 h-8 text-orange-500" />,
  modules: 6,
  color: 'bg-orange-500'
}];
const Home: React.FC = () => {
  const {
    user
  } = useAuth();
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-white bg-blue-600">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to SmartMind
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-xl">
              Test your knowledge, track your progress, and excel in your IT
              studies.
            </p>
            <div className="flex justify-center mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link to="/year/1" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-800 border border-transparent rounded-md hover:bg-blue-700">
                  Start Quizzing
                </Link>
              </div>
              <div className="inline-flex ml-3">
                <a href="#years" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-blue-700 bg-white border border-transparent rounded-md hover:bg-blue-50">
                  Explore Years
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome Back Section */}
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
              <BookOpenIcon className="w-8 h-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome back, {user?.name}!
              </h2>
              <p className="text-gray-600">Continue your learning journey</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
            <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50">
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
                <p className="mt-1 text-xs text-gray-500">45% complete</p>
              </div>
              <button className="w-full mt-4 text-sm font-medium text-blue-600 hover:text-blue-800">
                Resume Quiz
              </button>
            </div>
            <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50">
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
              <div className="flex items-center mt-4">
                <AwardIcon className="w-5 h-5 mr-1 text-yellow-500" />
                <span className="font-medium text-gray-700">Score: 92%</span>
              </div>
              <button className="w-full mt-4 text-sm font-medium text-blue-600 hover:text-blue-800">
                View Results
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Years Section */}
      <div id="years" className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          Choose Your Year
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {yearsData.map(year => <Link key={year.id} to={`/year/${year.id}`} className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <div className={`h-2 ${year.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    {year.icon}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {year.modules} Modules
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{year.name}</h3>
                <p className="mt-2 text-gray-600">{year.description}</p>
                <div className="flex justify-end mt-4">
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                    View Modules
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>)}
        </div>
      </div>
      {/* Statistics Section */}
      <div className="py-12 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Your Learning Stats
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                    <BookOpenIcon className="w-6 h-6 text-blue-600" />
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
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                    <AwardIcon className="w-6 h-6 text-green-600" />
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
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-3 bg-purple-100 rounded-full">
                    <TrendingUpIcon className="w-6 h-6 text-purple-600" />
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
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-full">
                    <UsersIcon className="w-6 h-6 text-yellow-600" />
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