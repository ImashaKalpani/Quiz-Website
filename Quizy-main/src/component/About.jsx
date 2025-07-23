import React from 'react';

const About = () => {
  return (
    <div className="p-8 font-sans bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">About the Quiz Application</h1>
      <p className="text-lg mb-6">
        I am excited to present the quiz application I developed as part of an assignment given by Neha Shaikh, HR Executive at CHANGE Networks. This opportunity has allowed me to showcase my skills in building a MERN (MongoDB, Express.js, React, Node.js) stack application, and I am grateful for the chance to demonstrate my capabilities.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Quiz Application Overview</h2>
      <p className="text-lg mb-6">
        This interactive quiz application offers two distinct modes:
      </p>

      <div className="flex flex-col md:flex-row justify-around mb-8">
        <div className="flex-1 text-center  flex flex-col items-center justify-center mb-6 md:mb-0">
          <img src="/image/random.jpg" alt="Random Mode" className="w-full max-w-md h-auto rounded-lg shadow-md" />
          <h3 className="text-2xl font-semibold mt-4">Random Mode</h3>
          <p className="text-lg mt-2">
            In this mode, users are presented with 5 randomly selected questions from a variety of topics. The selection is entirely random, ensuring a unique experience for each attempt.
          </p>
        </div>

        <div className="flex-1 text-center flex flex-col items-center justify-center">
          <img src="/image/topic1.png" alt="Topic-Specific Mode" className="w-full max-w-md h-auto rounded-lg shadow-md" />
          <h3 className="text-2xl font-semibold mt-4">Topic-Specific Mode</h3>
          <p className="text-lg mt-2">
            Users can choose a specific topic, and the application will present 5 random questions exclusively from that selected topic. This mode ensures that all questions are relevant to the chosen subject, while still offering a random selection within that topic.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc list-inside pl-6 text-lg mb-6">
        <li><strong>Backend Setup:</strong> Utilizes MongoDB for storing user data, quiz questions, and scores. Employs an Express.js and Node.js backend to handle user authentication, quiz logic, and API requests.</li>
        <li><strong>User Authentication:</strong> Secure registration and login systems, including password hashing and JWT authentication.</li>
        <li><strong>Dynamic Quiz Interface:</strong> Built with React, providing a user-friendly interface where users can answer questions and receive immediate feedback.</li>
        <li><strong>Score Calculation & Leaderboard:</strong> Calculates scores based on user responses and features a leaderboard to display top performers.</li>
        <li><strong>Deployment & Testing:</strong> Deployed on platforms such as Heroku and Netlify, with extensive testing to ensure a seamless user experience.</li>
      </ul>

      <p className="text-lg">
        This quiz application not only tests users' knowledge but also allows for flexible quiz-taking experiences based on their preferences. I am truly appreciative of the opportunity provided by CHANGE Networks and look forward to further developing innovative solutions.
      </p>
    </div>
  );
};

export default About;
