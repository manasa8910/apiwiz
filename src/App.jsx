import React, { useState } from "react";
import ParagraphContent from "./components/Paragraph";
import Word from "./components/Word";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("text");

  return (
    <div className="max-w-[50vw]   p-5">
      <div className="font-semibold text-4xl ">Text Analyzer</div>
      <div className="text-2xl w-[90vw] py-4">
        Text Analyzer is a simple free online tool for SEO web content analysis
        that helps you find most frequent phrases and words, number of
        characters, words, sentences and paragraphs, and estimated read and
        speak time of your content.
      </div>
      <div className="flex justify-center mx-auto">
        <button
          className={`px-4 w-1/2 py-2 mr-2 rounded-lg focus:outline-none ${
            selectedTab === "text"
              ? "bg-pink-500 text-white"
              : "bg-[#FFB6C1] text-black"
          }`}
          onClick={() => setSelectedTab("text")}
        >
          Text
        </button>
        <button
          className={`px-4 w-1/2 py-2 ml-2 rounded-lg focus:outline-none ${
            selectedTab === "paragraph"
              ? "bg-pink-500 text-white"
              : "bg-[#FFB6C1] text-black"
          }`}
          onClick={() => setSelectedTab("paragraph")}
        >
          Paragraph
        </button>
      </div>
      <div className=" pt-4 rounded-b-lg">
        {selectedTab === "text" && <Word />}
        {selectedTab === "paragraph" && <ParagraphContent />}
      </div>
    </div>
  );
};

export default App;
