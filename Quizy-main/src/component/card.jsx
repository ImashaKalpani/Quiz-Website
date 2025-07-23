import { Link } from 'react-router-dom';

// Function to limit the length of descriptions
const truncateDescription = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
};

const cardData = [
    {
        imgSrc: '/image/MERN.png',
        title: 'MERN',
        description: 'MERN stands for MongoDB, Express, React, and Node',
        category: 'Web Development',
        link: 'quiz/MERN'
    },
    {
        imgSrc: '/image/Java.png',
        title: 'Java',
        description: 'Java is a high-level, class-based, object-oriented programming language.',
        category: 'Programming Language',
        link: 'quiz/Java'
    },
    {
        imgSrc: '/image/c.jpeg',
        title: 'C',
        description: 'C is a general-purpose programming language created in 1972.',
        category: 'Programming Language',
        link: 'quiz/C'
    },
    {
        imgSrc: '/image/React-Native.png',
        title: 'React Native',
        description: 'React Native lets you create mobile apps using only JavaScript.',
        category: 'Mobile Development',
        link: 'quiz/React-Native'
    },
    {
        imgSrc: '/image/Python.png',
        title: 'Python',
        description: 'Python is an interpreted, high-level, general-purpose programming language.',
        category: 'Programming Language',
        link: 'quiz/Python'
    },
    {
        imgSrc: '/image/HTML.png',
        title: 'HTML',
        description: 'HTML is the standard markup language for creating web pages.',
        category: 'Web Development',
        link: 'quiz/HTML'
    },
    {
        imgSrc: '/image/Logics.png',
        title: 'Programming Logic',
        description: 'Programming Logic helps to solve computational problems and write efficient code.',
        category: 'Fundamentals',
        link: 'quiz/Programming-Logic'
    }
];

const CardGrid = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1">
            {cardData.map((card, index) => (
                <div key={index} className="flex flex-col justify-center items-center h-[75vh] sm:h-[85vh]">
                    <div className="!z-5 relative border shadow-2xl border-[#a7a7a7] flex flex-col rounded-[20px] max-w-[320px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-2 py-4">
                        <div className="h-full w-full">
                            <div className="relative w-full border-b-2 mb-4">
                                <img 
                                    src={card.imgSrc} 
                                    className="mb-3 h-[200px] w-[300px] object-cover rounded-xl 3xl:h-[200px] 3xl:w-[300px]" 
                                    alt={card.title} 
                                />
                            </div>
                            <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                                <div className="mb-2">
                                    <p className="text-lg font-bold text-navy-700"> {card.title} </p>
                                    <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                                        {truncateDescription(card.description, 60)}  {/* Description limited to 60 characters */}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between md:items-center lg:justify-between">
                                <div className="flex">
                                    <p className="!mb-0 text-sm font-bold text-brand-500">{card.category}</p>
                                </div>
                                <Link to={card.link}>
                                    <button className="linear rounded-[20px] bg-[#20702b] px-4 py-1 text-lg font-medium text-white  transition duration-200 hover:bg-[#20702ba6] active:bg-brand-700">
                                        Start Quiz 
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGrid;
