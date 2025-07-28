import React, { useState } from "react";
import {
  MailIcon,
  LockIcon,
  UserIcon,
  EyeIcon,
  EyeOffIcon,
  AlertCircleIcon, // Added for error messages
  Loader2Icon, // Added for loading spinner
  BookOpenIcon // Added for logo icon
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Ensure Link is imported

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(""); // State for error messages
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setIsLoading(true); // Start loading

    if (!email || !username || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    // Basic email format validation (can be more robust)
    if (!email.includes('@') || !email.includes('.')) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Simulate registration process
    try {
      // In a real application, you would call an authentication service here:
      // const response = await registerUser(email, password, username);
      // if (response.success) { ... } else { setError(response.message); }

      // For now, using local storage simulation
      const user = { username, email };
      localStorage.setItem("user", JSON.stringify(user));
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      navigate("/"); // Navigate to home on successful registration
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(err.message || "An unexpected error occurred during registration. Please try again.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="min-h-screen bg-smartmind-very-light/50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans animate-page-reveal">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center animate-fade-in-down">
          {/* Using BookOpenIcon from lucide-react for consistency with Login/Navbar */}
          <BookOpenIcon className="h-14 w-14 text-smartmind-dark drop-shadow-md" />
        </div>
        <h2 className="mt-8 text-center text-4xl font-extrabold text-gray-900 animate-slide-in-top-smooth delay-100">
          Create your account
        </h2>
        <p className="mt-3 text-center text-base text-gray-600 animate-fade-in-slow delay-200">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-smartmind-medium hover:text-smartmind-dark transition-colors duration-200"
          >
            Sign in here
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

          <form onSubmit={handleRegister} className="space-y-7">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="pl-10 block w-full pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-smartmind-medium focus:border-smartmind-medium sm:text-base transition-all duration-200"
                  placeholder="Your username"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
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
                  {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="pl-10 pr-10 block w-full py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-smartmind-medium focus:border-smartmind-medium sm:text-base transition-all duration-200"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-smartmind-dark focus:outline-none transition-colors duration-200"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
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
                    Registering...
                  </>
                ) : (
                  'Register'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;