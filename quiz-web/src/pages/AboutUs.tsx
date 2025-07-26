import React from 'react';
import { BookOpenIcon, UsersIcon, LightbulbIcon, AwardIcon, CheckCircleIcon } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
const AboutUs: React.FC = () => {
  return <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{
        label: 'About Us'
      }]} />
        {/* Hero Section */}
        <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden mb-12">
          <div className="px-6 py-12 md:px-12 md:py-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About IT Quiz
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Empowering IT students with interactive learning tools to enhance
              their knowledge and skills through engaging quizzes and
              comprehensive resources.
            </p>
          </div>
        </div>
        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <div className="bg-blue-100 p-6 rounded-full inline-block">
                <BookOpenIcon className="h-20 w-20 text-blue-600" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                At IT Quiz, our mission is to make learning information
                technology concepts engaging, accessible, and effective. We
                believe that interactive quizzes are one of the best ways to
                reinforce knowledge and prepare students for success in their IT
                careers.
              </p>
              <p className="text-gray-600">
                We've designed our platform specifically for campus students,
                providing a structured approach to learning that complements
                classroom instruction and helps identify areas where additional
                study may be beneficial.
              </p>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose IT Quiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                <LightbulbIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Comprehensive Coverage
              </h3>
              <p className="text-gray-600">
                Our quizzes cover all essential IT topics across multiple years
                of study, ensuring you have a complete understanding of your
                curriculum.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
                <AwardIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Interactive Learning
              </h3>
              <p className="text-gray-600">
                Our interactive quiz format makes learning engaging and helps
                reinforce key concepts through active recall and practice.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-yellow-100 p-3 rounded-full inline-block mb-4">
                <CheckCircleIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Progress Tracking
              </h3>
              <p className="text-gray-600">
                Track your performance over time, identify strengths and
                weaknesses, and focus your studies where they're needed most.
              </p>
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-gray-200 h-32 w-32 mx-auto mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="CEO" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Dr. Michael Chen
              </h3>
              <p className="text-blue-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Ph.D. in Computer Science with 15+ years of experience in
                education technology.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gray-200 h-32 w-32 mx-auto mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="CTO" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Sarah Johnson
              </h3>
              <p className="text-blue-600 mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Former lead developer at EdTech with expertise in interactive
                learning platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gray-200 h-32 w-32 mx-auto mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Content Director" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                David Wilson
              </h3>
              <p className="text-blue-600 mb-2">Content Director</p>
              <p className="text-gray-600 text-sm">
                IT professor with 10+ years experience developing curriculum for
                computer science programs.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gray-200 h-32 w-32 mx-auto mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="UX Designer" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Emily Rodriguez
              </h3>
              <p className="text-blue-600 mb-2">UX Designer</p>
              <p className="text-gray-600 text-sm">
                Specialist in educational interface design with a focus on
                accessibility and engagement.
              </p>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Alex T.</h3>
                  <p className="text-sm text-gray-500">
                    Computer Science Student
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "IT Quiz has been an invaluable resource for my studies. The
                interactive quizzes helped me identify gaps in my knowledge and
                better prepare for exams."
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Priya M.</h3>
                  <p className="text-sm text-gray-500">
                    Software Engineering Student
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The comprehensive module descriptions and targeted quizzes made
                a huge difference in my understanding of complex topics. Highly
                recommended!"
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">James L.</h3>
                  <p className="text-sm text-gray-500">IT Security Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As someone who learns by doing, the quiz format is perfect for
                me. I've seen my grades improve significantly since I started
                using IT Quiz."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AboutUs;