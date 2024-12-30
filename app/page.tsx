"use client";
import Header from "../components/Header";
import Options from "../components/options";
import CodeEditor from "../components/codeEditor";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex items-center">
        <Options />
        <CodeEditor/>
      </div>
      
    </div>
  );
}
