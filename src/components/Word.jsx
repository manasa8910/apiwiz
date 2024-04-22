import React, { useState } from "react";

const Word = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [partsOfSpeech, setPartsOfSpeech] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [antonyms, setAntonyms] = useState([]);
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const updateCounts = (inputWord) => {
    const characterCount = inputWord.length;
    const wordCount = inputWord.trim().split(/\s+/).filter(Boolean).length;
    setCharacterCount(characterCount);
    setWordCount(wordCount);
  };

  const handleInputChange = (event) => {
    const inputWord = event.target.value;
    setWord(inputWord);
    updateCounts(inputWord);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWordInfo();
  };

  const fetchWordInfo = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        // Word found
        const wordData = data[0];
        const definition = wordData.meanings[0].definitions[0].definition;
        const partsOfSpeech = wordData.meanings[0].partOfSpeech;
        const synonyms = wordData.meanings[0].synonyms;
        const antonyms = wordData.meanings[0].antonyms;
        setDefinition(definition);
        setPartsOfSpeech(partsOfSpeech);
        setSynonyms(synonyms);
        setAntonyms(antonyms);
      } else {
        // Word not found
        setDefinition("Word not found");
        setPartsOfSpeech("");
        setSynonyms([]);
        setAntonyms([]);
      }
    } catch (error) {
      console.error("Error fetching word info:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex w-[90vw] gap-5">
          <input
            type="text"
            value={word}
            onChange={handleInputChange}
            placeholder="Enter a word"
            className="flex-grow px-3 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-3 rounded"
          >
            Search
          </button>
        </div>
      </form>
      <div className="mt-4">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="border px-4 py-2 bg-[#FFB6C1] font-bold">
                Character Count
              </td>
              <td className="border px-4 py-2 bg-[#FFB6C1] font-bold">
                Word Count
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">{characterCount}</td>
              <td className="border px-4 py-2">{wordCount}</td>
            </tr>
          </tbody>
        </table>
        <div className="w-full border mt-5 p-5 rounded ">
          <h2 className="text-lg font-bold mt-4">Definition:</h2>
          <p>{definition}</p>
          <h2 className="text-lg font-bold">Parts of Speech:</h2>
          <p>{partsOfSpeech}</p>
          <h2 className="text-lg font-bold">Synonyms:</h2>
          <p>{synonyms.join(", ")}</p>
          <h2 className="text-lg font-bold">Antonyms:</h2>
          <p>{antonyms.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Word;
