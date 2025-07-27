import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, MessageCircleIcon, SendIcon, HelpCircleIcon, CheckCircleIcon } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Import the new hook

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Use the intersection observer for each section, specifying the exact HTML element type
  const [titleRef, titleInView] = useIntersectionObserver<HTMLDivElement>({ root: null, rootMargin: '0px', threshold: 0.5 }); // This is a <div>
  const [infoRef, infoInView] = useIntersectionObserver<HTMLDivElement>({ root: null, rootMargin: '0px', threshold: 0.1 }); // This is a <div>
  const [formRef, formInView] = useIntersectionObserver<HTMLDivElement>({ root: null, rootMargin: '0px', threshold: 0.1 }); // This is a <div>

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    setFormError('');
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };
<<<<<<< Updated upstream
  return <div className="min-h-screen" style={{ backgroundColor: '#f5f7f7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{
        label: 'Contact Us'
      }]} />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Contact Us</h1>
=======

  return (
    // Main page container with overall page reveal animation and consistent typography
    <div className="min-h-screen bg-smartmind-very-light text-gray-800 font-sans leading-relaxed animate-page-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Breadcrumb - Static, no animation needed */}
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        {/* Page Title Section with animation */}
        <div
          ref={titleRef} // No 'as React.RefObject<HTMLDivElement>' cast needed anymore
          className={`mb-10 ${titleInView ? 'animate-element-pop-up' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="text-4xl font-extrabold text-smartmind-dark mb-2">Contact Us</h1>
          <p className="mt-2 text-gray-700 text-lg">
            Have questions or feedback? We'd love to hear from you.
          </p>
>>>>>>> Stashed changes
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<<<<<<< Updated upstream
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-[#ecf4f7] rounded-lg shadow-md p-6 h-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
=======
          {/* Contact Information Section with animation */}
          <div
            ref={infoRef} // No 'as React.RefObject<HTMLDivElement>' cast needed anymore
            className={`lg:col-span-1 ${infoInView ? 'animate-element-pop-up' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-smartmind-dark mb-6">
>>>>>>> Stashed changes
                Get in Touch
              </h2>
              <div className="space-y-7">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-smartmind-light shadow-sm">
                    <MapPinIcon className="h-6 w-6 text-smartmind-dark stroke-1.5" />
                  </div>
<<<<<<< Updated upstream
                  <div className="ml-3 text-gray-700">
                    <p className="font-medium">Address</p>
                    <p className="mt-1">IT Park</p>
                    <p>Millenium Dr,</p>
                    <p>Malabe</p>
=======
                  <div className="ml-4 text-gray-700">
                    <p className="font-semibold text-lg">Address</p>
                    <p className="mt-1">123 Education Lane</p>
                    <p>Cinec Campus, Building 4</p>
                    <p>Malabe, SL 94105</p>
>>>>>>> Stashed changes
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-smartmind-light shadow-sm">
                    <PhoneIcon className="h-6 w-6 text-smartmind-dark stroke-1.5" />
                  </div>
<<<<<<< Updated upstream
                  <div className="ml-3 text-gray-700">
                    <p className="font-medium">Phone</p>
                    <p className="mt-1">(+94) 715 16 9999</p>
=======
                  <div className="ml-4 text-gray-700">
                    <p className="font-semibold text-lg">Phone</p>
                    <p className="mt-1">(+94) 76 9762216</p>
>>>>>>> Stashed changes
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-smartmind-light shadow-sm">
                    <MailIcon className="h-6 w-6 text-smartmind-dark stroke-1.5" />
                  </div>
<<<<<<< Updated upstream
                  <div className="ml-3 text-gray-700">
                    <p className="font-medium">Email</p>
                    <p className="mt-1">lmssupport@cinec.edu</p>
=======
                  <div className="ml-4 text-gray-700">
                    <p className="font-semibold text-lg">Email</p>
                    <p className="mt-1">cinec@itquiz.edu</p>
>>>>>>> Stashed changes
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-full bg-smartmind-light shadow-sm">
                    <MessageCircleIcon className="h-6 w-6 text-smartmind-dark stroke-1.5" />
                  </div>
                  <div className="ml-4 text-gray-700">
                    <p className="font-semibold text-lg">Support Hours</p>
                    <p className="mt-1">Monday - Friday: 9am - 5pm</p>
                    <p>Saturday: 10am - 2pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
<<<<<<< Updated upstream
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Connect With Us
                </h3>
                <div className="flex space-x-4 items-center justify-center">
                  <a href="https://www.facebook.com/share/16pv4qfUWH/" className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
=======
              <div className="mt-10">
                <h3 className="text-xl font-bold text-smartmind-dark mb-5">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-smartmind-light p-3 rounded-full text-smartmind-dark hover:bg-smartmind-medium hover:text-white transition-colors duration-300 transform hover:scale-110 shadow-md">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
>>>>>>> Stashed changes
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-smartmind-light p-3 rounded-full text-smartmind-dark hover:bg-smartmind-medium hover:text-white transition-colors duration-300 transform hover:scale-110 shadow-md">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
<<<<<<< Updated upstream
                  <a href="#" className="bg-blue-100 p-2 rounded-full text-black hover:bg-blue-200">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/school/cinec-campus/" className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
=======
                  <a href="#" className="bg-smartmind-light p-3 rounded-full text-smartmind-dark hover:bg-smartmind-medium hover:text-white transition-colors duration-300 transform hover:scale-110 shadow-md">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-smartmind-light p-3 rounded-full text-smartmind-dark hover:bg-smartmind-medium hover:text-white transition-colors duration-300 transform hover:scale-110 shadow-md">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
>>>>>>> Stashed changes
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
<<<<<<< Updated upstream
          <div className="lg:col-span-2">
            <div className="bg-[#ecf4f7] rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
=======
          <div
            ref={formRef} // No 'as React.RefObject<HTMLDivElement>' cast needed anymore
            className={`lg:col-span-2 ${formInView ? 'animate-element-pop-up' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-smartmind-dark mb-6">
>>>>>>> Stashed changes
                Send Us a Message
              </h2>
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-xl flex flex-col items-center text-center shadow-inner">
                  <CheckCircleIcon className="h-16 w-16 text-green-500 mb-6" /> {/* bounce-in class can be added here if defined in tailwind.config.js */}
                  <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                  <p className="mt-3 text-lg">
                    Your message has been sent successfully. We'll get back to
                    you as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-3 bg-smartmind-dark text-white rounded-lg shadow-md
                               hover:bg-smartmind-medium transition-colors duration-300 transform hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6 shadow-sm">
                      <div className="flex items-center">
                        <HelpCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>{formError}</span>
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                                   focus:ring-2 focus:ring-smartmind-medium focus:border-transparent
                                   transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                                   focus:ring-2 focus:ring-smartmind-medium focus:border-transparent
                                   transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                                 focus:ring-2 focus:ring-smartmind-medium focus:border-transparent
                                 transition-all duration-200 bg-white"
                    >
                      <option value="">Please select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="bug">Report a Bug</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                                 focus:ring-2 focus:ring-smartmind-medium focus:border-transparent
                                 transition-all duration-200"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md
                                 text-white bg-smartmind-dark hover:bg-smartmind-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-smartmind-dark
                                 transition-colors duration-300 transform hover:scale-105"
                    >
                      <SendIcon className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
<<<<<<< Updated upstream
export default ContactUs;
=======

export default ContactUs;
>>>>>>> Stashed changes
