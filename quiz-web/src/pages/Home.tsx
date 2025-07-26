import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, GraduationCapIcon, AwardIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext'; // Assuming this provides user details

// Define TypeScript interfaces for the data we'll fetch
interface Year {
    id: string; // MongoDB IDs are strings
    name: string;
    description: string;
    modules: number;
    color: string;
}

interface UserProgress {
    id: string;
    userId: string;
    quizId: string;
    quizTitle: string;
    progressPercentage: number;
    status: 'IN_PROGRESS' | 'COMPLETED'; // Using a union type for status
    score?: number; // Optional score
    lastUpdated: string; // Will be a string from backend, can convert to Date if needed
}

// Interface for overall user stats
interface UserStats {
    totalQuizzesTaken: number;
    averageScore: number;
    modulesExplored: number;
    rankAmongPeers: string; // E.g., "Top 15%"
}


const Home: React.FC = () => {
    const { user } = useAuth(); // Get user from context

    // State for fetched data
    const [yearsData, setYearsData] = useState<Year[]>([]);
    const [inProgressQuiz, setInProgressQuiz] = useState<UserProgress | null>(null);
    const [lastCompletedQuiz, setLastCompletedQuiz] = useState<UserProgress | null>(null);
    const [userStats, setUserStats] = useState<UserStats | null>(null);

    // Loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Base URL for your Spring Boot backend
    const API_BASE_URL = 'http://localhost:8080/api'; // Make sure this matches your Spring Boot port

    useEffect(() => {
        const fetchData = async () => {
            if (!user?.id) { // Ensure user ID is available for personalized data
                // Handle case where user is not logged in or user ID is missing
                setLoading(false);
                setError("User not logged in or user ID is missing.");
                // You might want to redirect to login or show a different UI
                return;
            }

            try {
                // Fetch Years data
                const yearsResponse = await fetch(`${API_BASE_URL}/years`);
                if (!yearsResponse.ok) {
                    throw new Error(`HTTP error! status: ${yearsResponse.status}`);
                }
                const years: Year[] = await yearsResponse.json();
                setYearsData(years);

                // Fetch In Progress Quiz
                const inProgressResponse = await fetch(`${API_BASE_URL}/progress/user/${user.id}/in-progress`);
                if (inProgressResponse.ok) {
                    const inProgress: UserProgress = await inProgressResponse.json();
                    setInProgressQuiz(inProgress);
                } else if (inProgressResponse.status === 404) {
                    setInProgressQuiz(null); // No in-progress quiz found
                } else {
                    throw new Error(`HTTP error! status: ${inProgressResponse.status} for in-progress quiz`);
                }

                // Fetch Last Completed Quiz
                const completedResponse = await fetch(`${API_BASE_URL}/progress/user/${user.id}/last-completed`);
                if (completedResponse.ok) {
                    const completed: UserProgress = await completedResponse.json();
                    setLastCompletedQuiz(completed);
                } else if (completedResponse.status === 404) {
                    setLastCompletedQuiz(null); // No completed quiz found
                } else {
                    throw new Error(`HTTP error! status: ${completedResponse.status} for last completed quiz`);
                }

                // Placeholder for User Stats (You'll need a backend endpoint for this)
                // For now, using static data or calculating on frontend if possible
                // If you create an endpoint: fetch(`${API_BASE_URL}/stats/user/${user.id}`);
                setUserStats({
                    totalQuizzesTaken: 24, // Replace with fetched data
                    averageScore: 86, // Replace with fetched data
                    modulesExplored: 18, // Replace with fetched data
                    rankAmongPeers: "Top 15%" // Replace with fetched data
                });

            } catch (err: any) {
                console.error("Failed to fetch data:", err);
                setError(`Failed to load data: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user]); // Re-run effect if user changes (e.g., after login)

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <p className="text-xl text-gray-700">Loading SmartMind data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-red-50">
                <p className="text-xl text-red-700">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
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
            {user && ( // Only show if user is logged in
                <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                                <BookOpenIcon className="w-8 h-8 text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Welcome back, {user.name || user.username || 'Student'}!
                                </h2>
                                <p className="text-gray-600">Continue your learning journey</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                            {inProgressQuiz ? (
                                <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-800">
                                                Continue where you left off
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {inProgressQuiz.quizTitle}
                                            </p>
                                        </div>
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                            In Progress
                                        </span>
                                    </div>
                                    <div className="mt-4">
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded-full"
                                                style={{ width: `${inProgressQuiz.progressPercentage}%` }}
                                            ></div>
                                        </div>
                                        <p className="mt-1 text-xs text-gray-500">{inProgressQuiz.progressPercentage}% complete</p>
                                    </div>
                                    <button className="w-full mt-4 text-sm font-medium text-blue-600 hover:text-blue-800">
                                        Resume Quiz
                                    </button>
                                </div>
                            ) : (
                                <div className="p-4 text-center text-gray-500 border border-gray-200 rounded-md">
                                    <p className="mb-2">No quiz in progress.</p>
                                    <Link to="/year/1" className="text-blue-600 hover:text-blue-800">Start a new quiz!</Link>
                                </div>
                            )}

                            {lastCompletedQuiz ? (
                                <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-800">
                                                Recent Achievement
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {lastCompletedQuiz.quizTitle}
                                            </p>
                                        </div>
                                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                            Completed
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <AwardIcon className="w-5 h-5 mr-1 text-yellow-500" />
                                        <span className="font-medium text-gray-700">Score: {lastCompletedQuiz.score}%</span>
                                    </div>
                                    <button className="w-full mt-4 text-sm font-medium text-blue-600 hover:text-blue-800">
                                        View Results
                                    </button>
                                </div>
                            ) : (
                                <div className="p-4 text-center text-gray-500 border border-gray-200 rounded-md">
                                    <p className="mb-2">No completed quizzes yet.</p>
                                    <Link to="/profile" className="text-blue-600 hover:text-blue-800">View your progress</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}


            {/* Years Section */}
            <div id="years" className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
                    Choose Your Year
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {yearsData.length > 0 ? (
                        yearsData.map(year => (
                            <Link key={year.id} to={`/year/${year.id}`} className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                                <div className={`h-2 ${year.color}`}></div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-gray-100 rounded-full">
                                            {/* Render icon based on name or a lookup table if more complex */}
                                            {year.name === 'First Year' && <GraduationCapIcon className="w-8 h-8 text-blue-500" />}
                                            {year.name === 'Second Year' && <AwardIcon className="w-8 h-8 text-green-500" />}
                                            {year.name === 'Third Year' && <TrendingUpIcon className="w-8 h-8 text-purple-500" />}
                                            {year.name === 'Fourth Year' && <UsersIcon className="w-8 h-8 text-orange-500" />}
                                            {/* Fallback if icon not matched */}
                                            {!['First Year', 'Second Year', 'Third Year', 'Fourth Year'].includes(year.name) && <BookOpenIcon className="w-8 h-8 text-gray-500" />}
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
                            </Link>
                        ))
                    ) : (
                        <p className="col-span-4 text-center text-gray-500">No year data available.</p>
                    )}
                </div>
            </div>

            {/* Statistics Section */}
            {user && userStats && ( // Only show if user is logged in and stats are loaded
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
                                                {userStats.totalQuizzesTaken}
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
                                                {userStats.averageScore}%
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
                                                {userStats.modulesExplored}
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
                                                {userStats.rankAmongPeers}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;