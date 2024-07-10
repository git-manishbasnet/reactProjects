
import React, { useState } from "react";
import { DC, LC, SC, UC } from "./Data/Passchar"; // Assuming these are your character sets

export default function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [pwlength, setPwlength] = useState(10);
  const [fpass, setFpass] = useState("");

  const createPassword = () => {
    let charSet = "";
    let finalPass = "";
    if (uppercase || lowercase || numbers || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += DC;
      if (symbol) charSet += SC;

      for (let i = 0; i < pwlength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFpass(finalPass);
    } else {
      alert("Please select at least one option");
    }
  };

  const copyPass = () => {
    navigator.clipboard.writeText(fpass);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-900">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Password Generator</h2>

        <div className="mb-4">
          <input
            type="text"
            value={fpass}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none"
            placeholder="Generated Password"
          />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label className="text-gray-800">Password Length:</label>
          <input
            type="number"
            value={pwlength}
            onChange={(e) => setPwlength(e.target.value)}
            min={4}
            max={20}
            step={1}
            className="w-20 px-3 py-2 bg-gray-100 border border-gray-300 rounded text-center focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Include:</label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={uppercase}
                onChange={() => setUppercase(!uppercase)}
                className="form-checkbox h-5 w-5 text-purple-600 border-gray-300 rounded focus:outline-none"
              />
              <span className="ml-2 text-gray-800">Uppercase</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={lowercase}
                onChange={() => setLowercase(!lowercase)}
                className="form-checkbox h-5 w-5 text-purple-600 border-gray-300 rounded focus:outline-none"
              />
              <span className="ml-2 text-gray-800">Lowercase</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={numbers}
                onChange={() => setNumbers(!numbers)}
                className="form-checkbox h-5 w-5 text-purple-600 border-gray-300 rounded focus:outline-none"
              />
              <span className="ml-2 text-gray-800">Numbers</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={symbol}
                onChange={() => setSymbol(!symbol)}
                className="form-checkbox h-5 w-5 text-purple-600 border-gray-300 rounded focus:outline-none"
              />
              <span className="ml-2 text-gray-800">Symbols</span>
            </label>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={createPassword}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none"
          >
            Generate Password
          </button>
          <button
            onClick={copyPass}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none"
          >
            Copy Password
          </button>
        </div>
      </div>
    </div>
  );
}
