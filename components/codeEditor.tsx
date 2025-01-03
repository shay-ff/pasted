"use client";

import React from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <div className="flex flex-col  bg-[#1e1e1e]">
        {/* Top Section */}
        <div className="flex items-center justify-between bg-[#252526] px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#858585]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.707 3.293a1 1 0 10-1.414 1.414L6.586 11l-2.293 2.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3zM11 13a1 1 0 100-2h3a1 1 0 100 2h-3z" />
            </svg>
            <div className="text-gray-300 font-monospace pr-40 text-sm">Create a new snippet by pasting or typing your code below</div>
        </div>

        {/* Monaco Editor */}
        <div className="flex-1 bg-[#1e1e1e] p-4">
            <Editor
                height="65vh"
                width="80vh"
                defaultLanguage="javascript"
                defaultValue=""
                theme="vs-dark"
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                }}
            />
            </div>
        </div>
    );
}
