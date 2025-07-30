import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, GraduationCapIcon, AwardIcon, TrendingUpIcon, UsersIcon, PlayCircleIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext'; // Assuming useAuth is correctly imported from context
import { fetchAllModules } from '../services/api'; // Keep if you intend to use this for dynamic module count

// Define the yearsData outside the component to avoid re-creation on every render
const yearsData = [
  {
    id: 1,
    name: 'First Year',
    description: 'Foundation courses for IT fundamentals',
    icon: <GraduationCapIcon className="h-8 w-8 text-smartmind-dark" />,
    modules: 10,
    color: 'bg-smartmind-light',
    hoverColor: 'text-smartmind-light',
  },
  {
    id: 2,
    name: 'Second Year',
    description: 'Intermediate programming and systems',
    icon: <AwardIcon className="h-8 w-8 text-smartmind-dark" />,
    modules: 10,
    color: 'bg-green-500',
    hoverColor: 'text-green-500',
  },
  {
    id: 3,
    name: 'Third Year',
    description: 'Advanced concepts and specializations',
    icon: <TrendingUpIcon className="h-8 w-8 text-smartmind-dark" />,
    modules: 10,
    color: 'bg-purple-500',
    hoverColor: 'text-purple-500',
  },
  {
    id: 4,
    name: 'Fourth Year',
    description: 'Professional preparation and projects',
    icon: <UsersIcon className="h-8 w-8 text-smartmind-dark" />,
    modules: 10,
    color: 'bg-orange-500',
    hoverColor: 'text-orange-500',
  },
];

const Home: React.FC = () => {
  const { user } = useAuth();

  const [totalModules, setTotalModules] = useState(0);

  useEffect(() => {
    const getModuleCount = async () => {
      try {
        // const modules = await fetchAllModules(); // Uncomment if you have this API
        // setTotalModules(modules.length); // Update based on actual data
        setTotalModules(yearsData.reduce((acc, year) => acc + year.modules, 0)); // Fallback for static data
      } catch (error) {
        console.error('Failed to fetch modules:', error);
        setTotalModules(yearsData.reduce((acc, year) => acc + year.modules, 0)); // Fallback
      }
    };
    getModuleCount();
  }, []);

  return (
    <div className="min-h-screen bg-smartmind-very-light/50 font-sans">
      {/* Hero Section */}
      <div className="bg-smartmind-dark text-white shadow-xl py-20 md:py-32 overflow-hidden relative">
        {/* Animated Wave Background Layers */}
        {/* Layer 1: Darker wave */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-64 lg:h-80 z-0 opacity-40 animate-wave-slide-1"
          style={{
            background: `linear-gradient(to top, rgba(75, 100, 141, 0.9), rgba(75, 100, 141, 0.5))`,
            clipPath: 'polygon(0 40%, 8% 50%, 15% 45%, 25% 55%, 35% 48%, 45% 58%, 55% 50%, 65% 60%, 75% 55%, 85% 65%, 95% 58%, 100% 68%, 100% 100%, 0% 100%)',
            width: '200%' // Make it wider to allow continuous scrolling
          }}
        ></div>
        {/* Layer 2: Medium wave */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-64 lg:h-80 z-[1] opacity-50 animate-wave-slide-2"
          style={{
            background: `linear-gradient(to top, rgba(89, 135, 168, 0.9), rgba(89, 135, 168, 0.6))`,
            clipPath: 'polygon(0 50%, 10% 40%, 20% 55%, 30% 45%, 40% 60%, 50% 50%, 60% 65%, 70% 55%, 80% 70%, 90% 60%, 100% 75%, 100% 100%, 0% 100%)',
            width: '200%' // Make it wider to allow continuous scrolling
          }}
        ></div>
        {/* Layer 3: Lighter wave */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 sm:h-64 lg:h-80 z-[2] opacity-60 animate-wave-slide-1"
          style={{
            background: `linear-gradient(to top, rgba(185, 228, 244, 0.9), rgba(185, 228, 244, 0.7))`,
            clipPath: 'polygon(0 60%, 12% 50%, 22% 65%, 34% 55%, 48% 70%, 60% 60%, 75% 75%, 88% 65%, 100% 80%, 100% 100%, 0% 100%)',
            width: '200%' // Make it wider to allow continuous scrolling
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> {/* z-10 ensures content is above waves */}
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-tight text-smartmind-light animate-slide-in-top-smooth">
            Welcome to <span className="text-white drop-shadow-lg">SmartMind</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-smartmind-light opacity-90 animate-fade-in-slow delay-500">
            Test your knowledge, track your progress, and excel in your IT studies with intelligent quizzes.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-1000">
            <div className="inline-flex rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              <Link
                to="/year/1"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-smartmind-dark bg-smartmind-light hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-smartmind-light"
              >
                <PlayCircleIcon className="h-5 w-5 mr-2" /> Start Quizzing
              </Link>
            </div>
            <div className="inline-flex rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              <a
                href="#years"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-smartmind-light text-base font-semibold rounded-full text-smartmind-light bg-transparent hover:bg-smartmind-light hover:text-smartmind-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-smartmind-light"
              >
                Explore Years
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Back Section (Conditional based on user login) */}
      {user && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up delay-300">
          <div className="bg-white shadow-2xl rounded-2xl p-8 transform hover:scale-[1.005] transition-transform duration-300 overflow-hidden border border-smartmind-light/20">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 bg-smartmind-light/20 rounded-full p-4 animate-scale-in-delay">
                <BookOpenIcon className="h-9 w-9 text-smartmind-dark" />
              </div>
              <div className="ml-5">
                <h2 className="text-3xl font-bold text-gray-900 leading-snug animate-slide-in-left-smooth">
                  Welcome back, <span className="text-smartmind-dark">{user?.name || 'User'}</span>!
                </h2>
                <p className="mt-1 text-lg text-gray-600 animate-fade-in-slow delay-700">Continue your exciting learning journey</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Continue Quiz Card */}
              <div className="border border-smartmind-light/30 rounded-xl p-6 hover:bg-smartmind-very-light/70 transition-all duration-300 transform hover:-translate-y-1 shadow-md animate-slide-in-right-smooth delay-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Continue where you left off
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Database Design - Quiz 2
                    </p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full animate-pulse-fade">
                    In Progress
                  </span>
                </div>
                <div className="mt-5">
                  <div className="w-full bg-smartmind-very-light rounded-full h-3">
                    <div className="bg-smartmind-light h-3 rounded-full shadow-md" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 font-medium">45% complete</p>
                </div>
                <button className="mt-6 w-full text-smartmind-dark hover:text-smartmind-medium font-semibold text-base py-2 rounded-md border border-smartmind-light/50 hover:border-smartmind-medium transition-colors duration-300 group">
                  <span className="flex items-center justify-center">
                    Resume Quiz <PlayCircleIcon className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform duration-200" />
                  </span>
                </button>
              </div>
              {/* Recent Achievement Card */}
              <div className="border border-smartmind-light/30 rounded-xl p-6 hover:bg-smartmind-very-light/70 transition-all duration-300 transform hover:-translate-y-1 shadow-md animate-slide-in-left-smooth delay-900">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Recent Achievement
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Programming Fundamentals - Quiz 3
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Completed
                  </span>
                </div>
                <div className="mt-5 flex items-center">
                  <AwardIcon className="h-6 w-6 text-yellow-500 mr-2 animate-bounce-scale" />
                  <span className="text-gray-700 font-semibold text-lg">Score: 92%</span>
                </div>
                <button className="mt-6 w-full text-smartmind-dark hover:text-smartmind-medium font-semibold text-base py-2 rounded-md border border-smartmind-light/50 hover:border-smartmind-medium transition-colors duration-300 group">
                  <span className="flex items-center justify-center">
                    View Results <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Years Section */}
      <div id="years" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center animate-fade-in-up">
          Choose Your <span className="text-smartmind-dark">Academic Year</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {yearsData.map((year, index) => (
            <Link
              key={year.id}
              to={`/year/${year.id}`}
              className="bg-white rounded-2xl shadow-xl overflow-hidden
                         hover:shadow-2xl transition-all duration-300 transform
                         hover:-translate-y-2 hover:scale-[1.01]
                         border border-smartmind-light/20
                         group animate-slide-in-up"
              style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
            >
              {/* Color accent bar */}
              <div className={`h-3 ${year.color} w-full transition-colors duration-300`}></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-smartmind-very-light rounded-full p-4 shadow-inner">
                    {year.icon}
                  </div>
                  <span className="bg-smartmind-dark/10 text-smartmind-dark text-sm font-bold px-4 py-1 rounded-full">
                    {year.modules} Modules
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{year.name}</h3>
                <p className="text-gray-600 leading-relaxed">{year.description}</p>
                <div className="mt-6 flex justify-end">
                  <span className={`inline-flex items-center text-smartmind-dark hover:${year.hoverColor} text-base font-semibold transition-colors duration-300`}>
                    View Modules
                    <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Statistics Section (Conditional based on user login) */}
      {user && (
        <div className="bg-smartmind-very-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 animate-fade-in-up">
                Your <span className="text-smartmind-dark">Learning Stats</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 animate-fade-in-up delay-200">Insights into your quiz performance</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Stat Cards */}
              {[
                { icon: <BookOpenIcon className="h-7 w-7 text-smartmind-dark" />, label: 'Total Quizzes Taken', value: '24', bg: 'bg-smartmind-light/20' },
                { icon: <AwardIcon className="h-7 w-7 text-green-600" />, label: 'Average Score', value: '86%', bg: 'bg-green-100' },
                { icon: <TrendingUpIcon className="h-7 w-7 text-purple-600" />, label: 'Modules Explored', value: totalModules.toString(), bg: 'bg-purple-100' },
                { icon: <UsersIcon className="h-7 w-7 text-orange-600" />, label: 'Rank Among Peers', value: 'Top 15%', bg: 'bg-orange-100' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white overflow-hidden shadow-xl rounded-xl
                             transform hover:scale-[1.03] transition-all duration-300
                             border border-smartmind-light/20
                             group animate-pop-in"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="px-6 py-6 sm:p-7">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 ${stat.bg} rounded-full p-3 shadow-inner`}>
                        {stat.icon}
                      </div>
                      <div className="ml-5">
                        <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                        <div className="mt-1 text-4xl font-extrabold text-gray-900">{stat.value}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;