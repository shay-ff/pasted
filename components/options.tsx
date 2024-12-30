'use Client';
import { useState } from "react";
import {nanoid} from "nanoid";
import {FaDice, FaLightbulb} from "react-icons/fa";
import { PiPlaceholder } from "react-icons/pi";
import { set } from "mongoose";

export default function Options() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [data, setData] = useState(undefined);
    const options = [
        "HTML",
        "CSS",
        "JavaScript",
        "JSON",
        "React",
        "Redux",
        "Cplusplus",
        "Csharp",
        "Java",
        "Python",
        "SQL",
        "TypeScript",
        "Swift",
        "Go",
        "Kotlin",
        "Ruby",
        "PHP",
        "Rust",
        "MATLAB",
    ];
    const onChangeHandler = (event) => {
        setData(event.target.value);
    }
    return (
        // give this div a border and padding
        <div className="p-6 bg-[#040200] border text-white max-w-md mx-auto rounded-lg shadow-lg">
        {/* Syntax Selector */}
        <div className="mb-4">
            
            <div className="flex items-center border border-gray-700 rounded-lg">
            <select
                className="w-full bg-gray-800 text-white p-2 rounded-l-lg focus:outline-none "
                onChange={onChangeHandler}
            >
                {/* we have to send the option selected to codeEditor.js file */}
                <option value="syntax">Syntax (Optional)</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {/* <button className="p-2 text-gray-400 hover:text-white">
              <FaLightbulb />
            </button> */}
            </div>
        </div>
  
        {/* Title Input */}
        <div className="mb-4">
            <label className="block text-sm mb-2">Title (Optional)</label>
            <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded-lg focus:outline-none"
                placeholder="Enter title..."
            />
        </div>
  
        {/* Description */}
        <div className="mb-4">
            <label className="block text-sm mb-2">Description (Optional)</label>
            <textarea
                id= "description"
                className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded-lg focus:outline-none"
                placeholder="Enter description..."
                rows={3}
            ></textarea>
        </div>
  
        {/* Password Input */}
        <div className="mb-4">
            <label className="block text-sm mb-2">Password (Optional)</label>
            <div className="flex items-center border border-gray-700 rounded-lg">
                <input
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                    className="w-full bg-gray-800 text-white p-2 rounded-l-lg focus:outline-none opacity-75"
                    placeholder="Enter password..."
                />
                <button
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="p-2 text-gray-400 hover:text-white "
                >
                {passwordVisible ? "🙈" : "👁️"}
                </button>
                {/* Generate Password from nanoid and fill it in password*/}
                <button 
                    onClick={() => {
                        const passwordInput = document.getElementById("password");
                        if (passwordInput) {
                            (passwordInput as HTMLInputElement).value = nanoid(8);
                        }
                    }}
                    className="p-2 text-gray-400 hover:text-white ">
                <FaDice />
                </button>
            </div>
        </div>
  
        {/* Expire After Selector */}
        <div>
            <label className="block text-sm mb-2">Expire After (Optional)</label>
            <select
                className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded-lg focus:outline-none opacity-75"
            >
                <option id="never">Never</option>
                <option id="once">Burn After Read</option>
                <option id="15m">15 minutes</option>
                <option id="30m">30 minutes</option>
                <option id="1h">1 Hour</option>
                <option id="24h">1 Day</option>
                <option id="1w">1 Week</option>
                <option id="1mo">1 Month</option>
                <option id="1y">1 Year</option>
            </select>
        </div>
        <button id = "save-button" className="flex  items-center px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path d="M8 2a2 2 0 00-2 2v1H4a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2H8zm0 2h4v1H8V4zm-4 3h12v9H4V7zm3 2a1 1 0 100 2h6a1 1 0 100-2H7z" />
            </svg>
            Save Snippet
        </button>
      </div>
    );
}