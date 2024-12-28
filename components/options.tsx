'use Client';
import { useState } from "react";
import {nanoid} from "nanoid";
import {FaDice, FaLightbulb} from "react-icons/fa";
import { PiPlaceholder } from "react-icons/pi";

export default function Options() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <div className="p-6 bg-gray-900 text-white max-w-md mx-auto rounded-lg shadow-lg">
        {/* Syntax Selector */}
        <div className="mb-4">
          <label className="block text-sm mb-2">Syntax (Optional)</label>
          <div className="flex items-center border border-gray-700 rounded-lg">
            <select
              className="w-full bg-gray-800 text-white p-2 rounded-l-lg focus:outline-none scroll"
            >
                <option id="plain-text" value="text">Plain Text</option>
                <option id="javascript" value="javascript">JavaScript</option>
                <option id="python" value="python">Python</option>
                <option id="Csharp" value="Csharp">C#</option>
                <option id="C" value="C">C</option>
                <option id="sql" value="sql">SQL</option>
                <option id="java" value="java">Java</option>
                <option id="cplusplus" value="Cplusplus">C++</option>
                <option id="php" value="php">PHP</option>
                <option id="swift" value="swift">Swift</option>
                <option id="go" value="go">Go</option>
                <option id="kotlin" value="kotlin">Kotlin</option>
                <option id="ruby" value="ruby">Ruby</option>
                <option id="typescript" value="typescript">TypeScript</option>
                <option id="rust" value="rust">Rust</option>
                <option id="matlab" value="matlab">MATLAB</option>
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
                    className="w-full bg-gray-800 text-white p-2 rounded-l-lg focus:outline-none"
                    placeholder="Enter password..."
                />
                <button
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="p-2 text-gray-400 hover:text-white"
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
                    className="p-2 text-gray-400 hover:text-white">
                <FaDice />
                </button>
            </div>
        </div>
  
        {/* Expire After Selector */}
        <div>
          <label className="block text-sm mb-2">Expire After (Optional)</label>
          <select
            className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded-lg focus:outline-none"
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
      </div>
    );
}