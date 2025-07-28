import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpenIcon,
  MailIcon,
  LockIcon,
  UserIcon,
  EyeIcon,
  EyeOffIcon,
  AlertCircleIcon
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Intersection Observer for animations
  const [heroRef, heroInView] = useIntersectionObserver<HTMLElement>({ threshold: 0.2 });
  const [formRef, formInView] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/login"); // Redirect to login after registration
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-smartmind-very-light text-gray-800 font-sans leading-relaxed animate-page-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Breadcrumb items={[{ label: 'Register' }]} />

        {/* Hero Section (Compact) */}
        <section
          ref={heroRef}
          className={`relative bg-smartmind-dark rounded-xl shadow-2xl overflow-hidden mb-8
                     transform transition-transform duration-500 ease-out hover:scale-[1.005]
                     ${heroInView ? 'animate-hero-enter' : 'opacity-0 scale-95'}`}
        >
          {/* Parallax background */}
          <div className="absolute inset-0 overflow-hidden parallax-background" style={{ willChange: 'transform' }}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-smartmind-dark to-smartmind-medium opacity-90 animate-[gradientMotion_8s_ease-in-out_infinite] bg-[length:200%_200%]"></div>
          </div>

          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
            <h1 className={`text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight
                           ${heroInView ? 'animate-text-slide-in [animation-delay:0.4s]' : 'opacity-0 -translate-x-full'}`}>
              Join SmartMind
            </h1>
            <p className={`text-md md:text-lg text-smartmind-light max-w-2xl mx-auto
                          ${heroInView ? 'animate-text-slide-in [animation-delay:0.7s]' : 'opacity-0 -translate-x-full'}`}>
              Create an account to start your learning journey
            </p>
          </div>
        </section>

        {/* Compact Form Container */}
        <div className="max-w-md mx-auto">
          <section
            ref={formRef}
            className={`bg-white rounded-xl shadow-lg p-6 mb-8
                        ${formInView ? 'animate-element-pop-up' : 'opacity-0 translate-y-8'}`}
          >
            {error && (
              <div className={`mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-center
                              ${formInView ? 'animate-element-pop-up' : 'opacity-0 translate-y-8'}`}>
                <AlertCircleIcon className="h-4 w-4 mr-2" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-4">
              <div className={`space-y-4 ${formInView ? 'animate-element-pop-up [animation-delay:0.2s]' : 'opacity-0 translate-y-8'}`}>
                {/* Username Field */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-smartmind-dark mb-1">
                    Username
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-4 w-4 text-smartmind-medium" />
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="pl-9 block w-full pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-smartmind-light focus:border-smartmind-light transition-all duration-200 hover:border-smartmind-light"
                      placeholder="yourusername"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-smartmind-dark mb-1">
                    Email Address
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon className="h-4 w-4 text-smartmind-medium" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-9 block w-full pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-smartmind-light focus:border-smartmind-light transition-all duration-200 hover:border-smartmind-light"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-smartmind-dark mb-1">
                    Password
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockIcon className="h-4 w-4 text-smartmind-medium" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-9 pr-9 block w-full py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-smartmind-light focus:border-smartmind-light transition-all duration-200 hover:border-smartmind-light"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-smartmind-medium hover:text-smartmind-dark transition-colors duration-200"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-smartmind-dark mb-1">
                    Confirm Password
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockIcon className="h-4 w-4 text-smartmind-medium" />
                    </div>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="pl-9 pr-9 block w-full py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-smartmind-light focus:border-smartmind-light transition-all duration-200 hover:border-smartmind-light"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-smartmind-medium hover:text-smartmind-dark transition-colors duration-200"
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-smartmind-dark hover:bg-smartmind-medium focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-smartmind-light transition-all duration-200 ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Registering...
                      </span>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Divider */}
            <div className={`mt-6 ${formInView ? 'animate-element-pop-up [animation-delay:0.4s]' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white text-smartmind-medium">
                    Or sign up with
                  </span>
                </div>
              </div>
            </div>

            {/* Social Register Buttons */}
            <div className={`mt-4 grid grid-cols-2 gap-2 ${formInView ? 'animate-element-pop-up [animation-delay:0.6s]' : 'opacity-0 translate-y-8'}`}>
              <div>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-1.5 px-3 border border-gray-300 rounded-lg shadow-sm text-xs font-medium text-smartmind-dark hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-smartmind-light transition-all duration-200 hover:scale-[1.02]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">GitHub</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-1.5 px-3 border border-gray-300 rounded-lg shadow-sm text-xs font-medium text-smartmind-dark hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-smartmind-light transition-all duration-200 hover:scale-[1.02]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z" />
                    <path d="M10 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                  <span className="ml-2">Google</span>
                </button>
              </div>
            </div>
          </section>

          {/* Login Link */}
          <div className={`text-center ${formInView ? 'animate-element-pop-up [animation-delay:0.8s]' : 'opacity-0 translate-y-8'}`}>
            <p className="text-sm text-smartmind-dark">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-smartmind-medium hover:text-smartmind-dark transition-colors duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
