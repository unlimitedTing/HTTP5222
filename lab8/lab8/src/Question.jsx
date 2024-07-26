import React, { useState, useEffect } from 'react';

const Question = () => {
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=1&type=boolean');
      const data = await response.json();
      const questionData = data.results[0];
      setCategory(questionData.category);
      setQuestion(questionData.question);
      setAnswer(questionData.correct_answer);
    };

    fetchQuestion();
  }, []);

  return (
    <div>
      <div>{category}</div>
      <h3>{question}</h3>
      <div>{revealed ? answer : ''}</div>
      <button type="button" onClick={() => setRevealed(true)}>Reveal answer</button>
    </div>
  );
};

export default Question;
