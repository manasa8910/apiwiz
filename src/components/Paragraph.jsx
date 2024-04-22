import React, { useState } from "react";

const ParagraphContent = () => {
  const [text, setText] = useState("");

  const calculateStatistics = () => {
    const characterCount = text.length;
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const sentenceCount = text.split(".").filter(Boolean).length;
    const paragraphCount = text.split("\n").filter(Boolean).length;
    const spaceCount = text.split(" ").length - 1;
    const punctuationCount = text.split(/[.,!?]/).filter(Boolean).length;

    return [
      "Characters: " + characterCount,
      "Words: " + wordCount,
      "Sentences: " + sentenceCount,
      "Paragraphs: " + paragraphCount,
      "Spaces: " + spaceCount,
      "Punctuations: " + punctuationCount,
    ];
  };

  const statistics = calculateStatistics();

  return (
    <div className="w-[90vw] mx-auto">
      <textarea
        className=" w-full h-52 border border-gray-300 rounded-lg p-2 mb-4  placeholder:text-gray-500 focus:outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type, or copy/paste your content here..."
      ></textarea>
      <table className="w-full">
        <tbody>
          <tr>
            {statistics.map((statistic, index) => (
              <td
                key={index}
                className="border px-4 py-2 bg-[#FFB6C1] text-white] "
              >
                {statistic.split(":")[0]}
              </td>
            ))}
          </tr>
          <tr>
            {statistics.map((statistic, index) => (
              <td key={index} className="border px-4 py-2 font-semibold">
                {statistic.split(":")[1]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParagraphContent;
