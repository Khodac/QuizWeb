import React, { useEffect, useState } from 'react';
import { Results } from './Results';

export const Question = ({
  filteredQuestion,
  questionsFiltered,
  indexQuestion,
  setIndexQuestion,
  setActiveQuiz,
}) => {
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answersRandom, setAnswersRandom] = useState([]);
  const [activeResults, setActiveResults] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const answers = [
      ...filteredQuestion.incorrect_answers,
      filteredQuestion.correct_answer,
    ];

    setAnswersRandom(answers.sort(() => Math.random() - 0.5));
  }, [filteredQuestion]);

  useEffect(() => {
    let interval = null;

    if (timer > 0 && indexQuestion < questionsFiltered.length) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setActiveResults(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, indexQuestion, questionsFiltered.length]);

  const checkAnswer = (answerText, index) => {
    setSelectAnswerIndex(index);
    setAnswered(true);

    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }
  };

  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelectAnswerIndex(null);
    setAnswered(false);
  };

  const onReset = () => {
    setScore(0);
    setActiveQuiz(false);
    setIndexQuestion(0);
    setTimer(30);
  };

  return (
    <>
      {activeResults ? (
        <Results
          questionsFiltered={questionsFiltered}
          score={score}
          onReset={onReset}
        />
      ) : (
        <div className="flex flex-col justify-between shadow-md shadow-slate-300 w-full max-w-xl h-full p-10 rounded-lg mx-auto">
          <div className="flex justify-between mb-4">
            <span className="text-xl font-bold">
              {indexQuestion + 1} / {questionsFiltered.length}
            </span>
            <div>
              <span className="font-semibold">Dificultad: </span>
              <span className="font-bold">
                {filteredQuestion.difficulty}
              </span>
            </div>
          </div>

          <button
            className="border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900 mb-4"
            onClick={onReset}
          >
            Reiniciar
          </button>
          <div>
            <h1 className="font-bold">{filteredQuestion.question}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {answersRandom.map((answer, index) => {
              const isCorrect = answer === filteredQuestion.correct_answer;
              const isSelected = selectAnswerIndex === index;

              let buttonClass =
                'border p-5 rounded-lg flex justify-center items-center hover:scale-105';

              if (answered) {
                if (isSelected) {
                  buttonClass += isCorrect ? ' bg-green-500' : ' bg-red-500';
                } else if (isCorrect) {
                  buttonClass += ' bg-green-500';
                }
              }

              return (
                <button
                  className={buttonClass}
                  key={answer}
                  onClick={() => checkAnswer(answer, index)}
                  disabled={answered && isSelected}
                >
                  <p className="font-medium text-center text-sm">{answer}</p>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center mt-4">
            {indexQuestion + 1 === questionsFiltered.length ? (
              <button
                className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
                onClick={() => setActiveResults(true)}
              >
                Finalizar
              </button>
            ) : (
              <button
                className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
                onClick={onNextQuestion}
              >
                Siguiente Pregunta
              </button>
            )}
          </div>

          <div className="flex justify-center mt-4">
            <span className="font-bold">{timer}s</span>
          </div>
        </div>
      )}
    </>
  );
};
