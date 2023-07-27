/* eslint-disable react/prop-types */
import Refractor from "react-refractor";
// Load any languages you want to use from `refractor`
import js from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import jsx from "refractor/lang/jsx";
import React, { useState } from "react";
import "./Code.css";

//You'll need to register the languages you want to use
Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(jsx);

const CodeComponents = ({ value }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = () => {
    // Logic to copy the code to the clipboard
    // For example, you can use the Clipboard API or a library like `clipboard.js`
    // Here, we're just toggling the `isCopied` state for demonstration purposes
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };
  return (
    <div id="code-block__container">
      <Refractor language={value.language} value={value.code} />

      <button
        className="px-2 py-1 text-white bg-blue-500 rounded-md shadow-md"
        onClick={copyCode}
      >
        {isCopied ? "Copied! 🎉" : "Copy"}
      </button>
    </div>
  );
};

export default CodeComponents;
