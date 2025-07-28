import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpenIcon,
  MailIcon,
  LockIcon,
  AlertCircleIcon,
  EyeIcon,
  EyeOffIcon,
  Loader2Icon // Ensure this is imported if you're using it for the loading spinner
} from 'lucide-react';
import { useAuth } from '../context/AuthContext'; // Ensure the path to AuthContext is correct

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth(); // Destructure login from useAuth
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setIsLoading(true); // Start loading
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/'); // Navigate to home on success
      } else {
        // This 'else' block might be hit if login returns false but doesn't throw
        // Consider if your `login` function always throws on failure or returns false
        setError('Invalid email or password. Please check your credentials.');
      }
    } catch (err: any) { // Catch any errors thrown by the login function
      console.error("Login error:", err);
      // More specific error messages based on actual authentication service errors could be added here
      // For example, if it's a Firebase error, you might check err.code or err.message
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="min-h-screen bg-smartmind-very-light/50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans animate-page-reveal">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center animate-fade-in-down">
          <BookOpenIcon className="h-14 w-14 text-smartmind-dark drop-shadow-md" />
        </div>
        <h2 className="mt-8 text-center text-4xl font-extrabold text-gray-900 animate-slide-in-top-smooth delay-100">
          Sign in to your account
        </h2>
        <p className="mt-3 text-center text-base text-gray-600 animate-fade-in-slow delay-200">
          Or{' '}
          <Link
            to="/register"
            className="font-semibold text-smartmind-medium hover:text-smartmind-dark transition-colors duration-200"
          >
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md animate-fade-in-up delay-300">
        <div className="bg-white py-8 px-4 shadow-2xl rounded-xl sm:px-10 border border-smartmind-light/20">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-lg flex items-center shadow-sm animate-pop-in">
              <AlertCircleIcon className="h-6 w-6 mr-3 flex-shrink-0" />
              <span className="text-sm font-medium">{error}</span>
            </div>
          )}

          <form className="space-y-7" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 block w-full pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-smartmind-medium focus:border-smartmind-medium sm:text-base transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 pr-10 block w-full py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-smartmind-medium focus:border-smartmind-medium sm:text-base transition-all duration-200"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-smartmind-dark focus:outline-none transition-colors duration-200"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-smartmind-dark focus:ring-smartmind-medium border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-smartmind-medium hover:text-smartmind-dark transition-colors duration-200">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-lg text-base font-semibold text-white bg-smartmind-dark hover:bg-smartmind-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-smartmind-dark transition-all duration-300 transform hover:scale-[1.01] ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2Icon className="animate-spin h-5 w-5 mr-3" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {/* Social Login Buttons */}
              <div>
                <a href="#" className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-smartmind-very-light transition-colors duration-200 transform hover:scale-[1.01]">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
              <div>
                <a href="#" className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-smartmind-very-light transition-colors duration-200 transform hover:scale-[1.01]">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    <path d="M10 4a6 6 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                    <path d="M10 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                  Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;