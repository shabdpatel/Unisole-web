import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Course: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-100">
            <div className="bg-slate-300 rounded-lg shadow-md p-8 w-4/5 max-w-md">
                <h1 className="text-2xl font-semibold text-teal-600 mb-6">
                    Pick a course and get going <span className="font-bold">NOW!</span>
                </h1>
                <button className="bg-teal-600 text-white text-1xl font-bold py-3 px-8 rounded-full flex items-center bg-gradient-to-r from-teal-600 to-cyan-900 justify-center hover:bg-teal-700 transform hover:scale-90 transition-transform duration-300">
                    <FaSearch className="mr-2" /> Explore
                </button>
            </div>
        </div>
    );
}

export default Course;
