import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleInputChange} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

const reverseSentence = (sentence) => {
    const words = sentence.split(' ');
    const reversedWords = words.map((word) => {
        return word.split('').reverse().join('');
    });
    const reversedSentence = reversedWords.join(' ');
    const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
    return capitalizedSentence;
};

const sentence = 'Hello, world!';
const reversedSentence = reverseSentence(sentence);
console.log(reversedSentence);


const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
];

const names = data.map((item) => item.name);
console.log(names);


export default MarkdownEditor;
