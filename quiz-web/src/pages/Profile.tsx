import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserIcon, MailIcon, PencilIcon, KeyIcon, SaveIcon, XIcon, BarChart2Icon, ClockIcon, AwardIcon, BookOpenIcon, CheckCircleIcon } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
const Profile: React.FC = () => {
  const {
    user
  } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  // Mock quiz history data
  const quizHistory = [{
    id: 1,
    module: 'Database Systems',
    score: '85%',
    date: '2023-06-15',
    questions: 20,
    correct: 17
  }, {
    id: 2,
    module: 'Web Development',
    score: '92%',
    date: '2023-06-10',
    questions: 15,
    correct: 14
  }, {
    id: 3,
    module: 'Computer Networks',
    score: '78%',
    date: '2023-06-05',
    questions: 25,
    correct: 19
  }, {
    id: 4,
    module: 'Operating Systems',
    score: '88%',
    date: '2023-05-28',
    questions: 18,
    correct: 16
  }];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to update the profile
    setShowSuccessMessage(true);
    setIsEditMode(false);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate and update the password
    setProfileData(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }));
    setShowSuccessMessage(true);
    setShowPasswordSection(false);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };
  return <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{
        label: 'Profile'
      }]} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Profile</h1>
        {showSuccessMessage && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              <span>Your changes have been saved successfully!</span>
            </div>
            <button onClick={() => setShowSuccessMessage(false)} className="text-green-700">
              <XIcon className="h-5 w-5" />
            </button>
          </div>}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="h-32 w-32 bg-gray-200 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                  <UserIcon className="h-16 w-16 text-gray-500" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {user?.name}
                </h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Account Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Member since</p>
                      <p className="font-medium">June 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BookOpenIcon className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Quizzes taken</p>
                      <p className="font-medium">12</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <AwardIcon className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Average score</p>
                      <p className="font-medium">85%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <button onClick={() => setShowPasswordSection(!showPasswordSection)} className="flex items-center text-blue-600 hover:text-blue-800">
                  <KeyIcon className="h-4 w-4 mr-2" />
                  {showPasswordSection ? 'Hide Password Form' : 'Change Password'}
                </button>
              </div>
            </div>
          </div>
          {/* Right Column - Edit Profile & Quiz History */}
          <div className="lg:col-span-2">
            {/* Profile Form */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Profile Information
                </h2>
                {!isEditMode && <button onClick={() => setIsEditMode(true)} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                    <PencilIcon className="h-4 w-4 mr-1" />
                    Edit
                  </button>}
              </div>
              {isEditMode ? <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <div className="flex items-center">
                        <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <input type="text" id="name" name="name" value={profileData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <div className="flex items-center">
                        <MailIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <input type="email" id="email" name="email" value={profileData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button type="button" onClick={() => setIsEditMode(false)} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Cancel
                      </button>
                      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <SaveIcon className="h-4 w-4 mr-2" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form> : <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">
                      Name
                    </h3>
                    <div className="flex items-center">
                      <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <p className="text-gray-900">{user?.name}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">
                      Email
                    </h3>
                    <div className="flex items-center">
                      <MailIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <p className="text-gray-900">{user?.email}</p>
                    </div>
                  </div>
                </div>}
              {/* Password Change Form */}
              {showPasswordSection && <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Change Password
                  </h3>
                  <form onSubmit={handlePasswordSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input type="password" id="currentPassword" name="currentPassword" value={profileData.currentPassword} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input type="password" id="newPassword" name="newPassword" value={profileData.newPassword} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={profileData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                      </div>
                      <div className="flex justify-end">
                        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <KeyIcon className="h-4 w-4 mr-2" />
                          Update Password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>}
            </div>
            {/* Quiz History */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <BarChart2Icon className="h-5 w-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Quiz History
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Module
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {quizHistory.map(quiz => <tr key={quiz.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {quiz.module}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${parseInt(quiz.score) >= 80 ? 'bg-green-100 text-green-800' : parseInt(quiz.score) >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            {quiz.score}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {quiz.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {quiz.correct} / {quiz.questions} correct
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
              {quizHistory.length === 0 ? <div className="text-center py-4">
                  <p className="text-gray-500 italic">
                    No quiz history available.
                  </p>
                </div> : <div className="mt-4 text-right">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    View all history
                  </button>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Profile;