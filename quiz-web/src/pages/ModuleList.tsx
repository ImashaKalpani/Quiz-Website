import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpenIcon, CodeIcon, DatabaseIcon, ServerIcon, GlobeIcon, ShieldIcon, MonitorIcon, FileTextIcon } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
// Mock data for modules
const modulesByYear = {
  '1': [{
    id: 101,
    name: 'Introduction to Programming',
    icon: <CodeIcon className="h-6 w-6" />,
    description: 'Learn the basics of programming with Python and JavaScript',
    quizzes: 5,
    difficulty: 'Beginner'
  }, {
    id: 102,
    name: 'Computer Systems',
    icon: <ServerIcon className="h-6 w-6" />,
    description: 'Understanding computer architecture and operating systems',
    quizzes: 4,
    difficulty: 'Beginner'
  }, {
    id: 103,
    name: 'Web Development Fundamentals',
    icon: <GlobeIcon className="h-6 w-6" />,
    description: 'Introduction to HTML, CSS, and basic JavaScript',
    quizzes: 6,
    difficulty: 'Beginner'
  }, {
    id: 104,
    name: 'Database Concepts',
    icon: <DatabaseIcon className="h-6 w-6" />,
    description: 'Introduction to databases and SQL',
    quizzes: 3,
    difficulty: 'Beginner'
  }, {
    id: 105,
    name: 'IT Professional Skills',
    icon: <BookOpenIcon className="h-6 w-6" />,
    description: 'Communication, teamwork, and professional ethics',
    quizzes: 4,
    difficulty: 'Beginner'
  }],
  '2': [{
    id: 201,
    name: 'Object-Oriented Programming',
    icon: <CodeIcon className="h-6 w-6" />,
    description: 'Advanced programming with Java and OOP principles',
    quizzes: 7,
    difficulty: 'Intermediate'
  }, {
    id: 202,
    name: 'Data Structures & Algorithms',
    icon: <CodeIcon className="h-6 w-6" />,
    description: 'Fundamental data structures and algorithm analysis',
    quizzes: 8,
    difficulty: 'Intermediate'
  }, {
    id: 203,
    name: 'Database Management Systems',
    icon: <DatabaseIcon className="h-6 w-6" />,
    description: 'Advanced database design and implementation',
    quizzes: 5,
    difficulty: 'Intermediate'
  }, {
    id: 204,
    name: 'Network Fundamentals',
    icon: <GlobeIcon className="h-6 w-6" />,
    description: 'Introduction to computer networks and protocols',
    quizzes: 6,
    difficulty: 'Intermediate'
  }],
  '3': [{
    id: 301,
    name: 'Software Engineering',
    icon: <CodeIcon className="h-6 w-6" />,
    description: 'Software development methodologies and practices',
    quizzes: 5,
    difficulty: 'Advanced'
  }, {
    id: 302,
    name: 'Web Application Development',
    icon: <GlobeIcon className="h-6 w-6" />,
    description: 'Full-stack web development with modern frameworks',
    quizzes: 6,
    difficulty: 'Advanced'
  }, {
    id: 303,
    name: 'Cybersecurity Fundamentals',
    icon: <ShieldIcon className="h-6 w-6" />,
    description: 'Introduction to cybersecurity concepts and practices',
    quizzes: 7,
    difficulty: 'Advanced'
  }, {
    id: 304,
    name: 'Cloud Computing',
    icon: <ServerIcon className="h-6 w-6" />,
    description: 'Cloud platforms, services, and deployment models',
    quizzes: 4,
    difficulty: 'Advanced'
  }],
  '4': [{
    id: 401,
    name: 'Artificial Intelligence',
    icon: <MonitorIcon className="h-6 w-6" />,
    description: 'Machine learning, neural networks, and AI applications',
    quizzes: 8,
    difficulty: 'Expert'
  }, {
    id: 402,
    name: 'Big Data Analytics',
    icon: <DatabaseIcon className="h-6 w-6" />,
    description: 'Processing and analyzing large-scale data',
    quizzes: 6,
    difficulty: 'Expert'
  }, {
    id: 403,
    name: 'IT Project Management',
    icon: <FileTextIcon className="h-6 w-6" />,
    description: 'Managing IT projects and teams effectively',
    quizzes: 5,
    difficulty: 'Expert'
  }, {
    id: 404,
    name: 'Advanced Cybersecurity',
    icon: <ShieldIcon className="h-6 w-6" />,
    description: 'Advanced security concepts and ethical hacking',
    quizzes: 7,
    difficulty: 'Expert'
  }]
};
// Mapping for year names
const yearNames = {
  '1': 'First Year',
  '2': 'Second Year',
  '3': 'Third Year',
  '4': 'Fourth Year'
};
// Difficulty badge colors
const difficultyColors = {
  Beginner: 'bg-green-100 text-green-800',
  Intermediate: 'bg-blue-100 text-blue-800',
  Advanced: 'bg-purple-100 text-purple-800',
  Expert: 'bg-red-100 text-red-800'
};
const ModuleList: React.FC = () => {
  const {
    yearId
  } = useParams<{
    yearId: string;
  }>();
  const yearName = yearNames[yearId as keyof typeof yearNames] || `Year ${yearId}`;
  const modules = modulesByYear[yearId as keyof typeof modulesByYear] || [];
  return <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{
        label: yearName
      }]} />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {yearName} Modules
          </h1>
          <p className="mt-2 text-gray-600">
            Select a module to view its description or take quizzes
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(module => <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                    {module.icon}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${difficultyColors[module.difficulty as keyof typeof difficultyColors]}`}>
                    {module.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {module.name}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {module.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <BookOpenIcon className="h-4 w-4 mr-1" />
                  <span>{module.quizzes} Quizzes</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Link to={`/module/${module.id}/description`} className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Description
                  </Link>
                  <Link to={`/module/${module.id}/quizzes`} className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                    Quizzes
                  </Link>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default ModuleList;