'use client'

import React from 'react';
import "../globals.css";
import "../live-preview-tailwind.css";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useState } from 'react';

const scope = { React };

const LiveCodeEditor = () => {
  const [code, setCode] = useState(`
    function App() {
      return (
        <div className="bg-blue-900 p-8 rounded-lg">
          <h1 className="text-white text-2xl">Hello, World!</h1>
          <p className="text-blue-200">This is a live preview with Tailwind CSS!</p>
        </div>
      );
    }
    render(<App />);
  `);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <LiveProvider code={code} scope={scope} noInline={true}>
        <div className="w-full md:w-1/2">
          <LiveEditor
            onChange={(newCode) => setCode(newCode)}
            className="border p-2 rounded-md"
            style={{ backgroundColor: '#1e1e1e', color: '#d4d4d4' }}
          />
          <LiveError className="text-red-500 p-2" />
        </div>
        <div className="w-full md:w-1/2 p-2 border rounded-md">
          <LivePreview />
        </div>
      </LiveProvider>
    </div>
  );
};

export default LiveCodeEditor;
