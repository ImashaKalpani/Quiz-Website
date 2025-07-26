import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpenIcon, ClockIcon, UsersIcon, AwardIcon, CheckCircleIcon } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
// Mock module data
const modulesData = {
  '101': {
    id: 101,
    name: 'Introduction to Programming',
    description: 'This module provides a comprehensive introduction to programming concepts and techniques using Python and JavaScript. Students will learn about variables, data types, control structures, functions, and basic algorithms.',
    learningOutcomes: ['Understand fundamental programming concepts', 'Write and execute basic programs in Python and JavaScript', 'Apply problem-solving techniques to develop algorithms', 'Debug and test simple programs', 'Understand basic data structures'],
    duration: '12 weeks',
    instructors: ['Dr. John Smith', 'Prof. Sarah Johnson'],
    prerequisites: ['None'],
    assessments: [{
      name: 'Weekly Programming Exercises',
      weight: '30%'
    }, {
      name: 'Mid-term Practical Test',
      weight: '30%'
    }, {
      name: 'Final Project',
      weight: '40%'
    }],
    topics: ['Introduction to Programming Logic', 'Variables and Data Types', 'Control Structures (if/else, loops)', 'Functions and Procedures', 'Arrays and Lists', 'Basic Object-Oriented Programming', 'File I/O', 'Error Handling', 'Introduction to Algorithms', 'GUI Programming Basics']
  },
  '201': {
    id: 201,
    name: 'Object-Oriented Programming',
    description: 'This module focuses on advanced programming concepts using Java and object-oriented programming principles. Students will learn about classes, inheritance, polymorphism, encapsulation, and design patterns.',
    learningOutcomes: ['Apply object-oriented programming concepts effectively', 'Design and implement class hierarchies', 'Use inheritance and polymorphism appropriately', 'Implement common design patterns', 'Develop robust and maintainable software'],
    duration: '12 weeks',
    instructors: ['Prof. Michael Chen', 'Dr. Lisa Wong'],
    prerequisites: ['Introduction to Programming'],
    assessments: [{
      name: 'Programming Assignments',
      weight: '40%'
    }, {
      name: 'Group Project',
      weight: '30%'
    }, {
      name: 'Final Exam',
      weight: '30%'
    }],
    topics: ['Classes and Objects', 'Inheritance and Polymorphism', 'Encapsulation and Abstraction', 'Interfaces and Abstract Classes', 'Exception Handling', 'Collections Framework', 'Generics', 'Design Patterns', 'Unit Testing', 'GUI Development with JavaFX']
  },
  '301': {
    id: 301,
    name: 'Software Engineering',
    description: 'This module covers software development methodologies, practices, and tools used in professional software development. Students will learn about the software development lifecycle, project management, and quality assurance.',
    learningOutcomes: ['Apply software development methodologies', 'Create comprehensive software documentation', 'Perform requirements analysis and system design', 'Implement software testing strategies', 'Work effectively in software development teams'],
    duration: '12 weeks',
    instructors: ['Dr. Robert Taylor', 'Prof. Emily Brown'],
    prerequisites: ['Object-Oriented Programming', 'Database Management Systems'],
    assessments: [{
      name: 'Case Studies',
      weight: '20%'
    }, {
      name: 'Team Project',
      weight: '50%'
    }, {
      name: 'Final Report',
      weight: '30%'
    }],
    topics: ['Software Development Lifecycle', 'Agile Methodologies', 'Requirements Engineering', 'Software Architecture', 'UML Modeling', 'Version Control with Git', 'Software Testing Strategies', 'Continuous Integration/Deployment', 'Software Project Management', 'Software Quality Assurance']
  },
  '401': {
    id: 401,
    name: 'Artificial Intelligence',
    description: 'This module introduces the principles and techniques of artificial intelligence, focusing on machine learning, neural networks, and practical AI applications. Students will gain hands-on experience with AI frameworks and tools.',
    learningOutcomes: ['Understand core AI concepts and algorithms', 'Implement machine learning solutions', 'Design and train neural networks', 'Evaluate AI model performance', 'Apply AI techniques to real-world problems'],
    duration: '12 weeks',
    instructors: ['Prof. David Lee', 'Dr. Angela Martinez'],
    prerequisites: ['Data Structures & Algorithms', 'Advanced Mathematics'],
    assessments: [{
      name: 'AI Implementation Projects',
      weight: '40%'
    }, {
      name: 'Research Paper',
      weight: '20%'
    }, {
      name: 'Final AI System',
      weight: '40%'
    }],
    topics: ['Introduction to AI Concepts', 'Search Algorithms', 'Knowledge Representation', 'Machine Learning Fundamentals', 'Supervised and Unsupervised Learning', 'Neural Networks', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Ethical Considerations in AI']
  }
};
// Default module for fallback
const defaultModule = {
  id: 0,
  name: 'Module Not Found',
  description: 'The requested module information could not be found.',
  learningOutcomes: [],
  duration: 'N/A',
  instructors: [],
  prerequisites: [],
  assessments: [],
  topics: []
};
const ModuleDescription: React.FC = () => {
  const {
    moduleId
  } = useParams<{
    moduleId: string;
  }>();
  const module = modulesData[moduleId as keyof typeof modulesData] || defaultModule;
  return <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{
        label: 'All Modules',
        path: '/'
      }, {
        label: module.name
      }]} />
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">{module.name}</h1>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <ClockIcon className="h-5 w-5 mr-2 text-blue-600" />
                <span>{module.duration}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <UsersIcon className="h-5 w-5 mr-2 text-blue-600" />
                <span>{module.instructors.join(', ')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <BookOpenIcon className="h-5 w-5 mr-2 text-blue-600" />
                <span>Prerequisites: {module.prerequisites.join(', ')}</span>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Description
              </h2>
              <p className="text-gray-700">{module.description}</p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Learning Outcomes
              </h2>
              <ul className="space-y-2">
                {module.learningOutcomes.map((outcome, index) => <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </li>)}
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Topics Covered
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {module.topics.map((topic, index) => <li key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 text-xs font-semibold">
                        {index + 1}
                      </div>
                      {topic}
                    </li>)}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Assessment Methods
                </h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  {module.assessments.map((assessment, index) => <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <div className="flex items-center">
                        <AwardIcon className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-700">{assessment.name}</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {assessment.weight}
                      </span>
                    </div>)}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link to={`/module/${module.id}/quizzes`} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Take Quizzes for this Module
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ModuleDescription;