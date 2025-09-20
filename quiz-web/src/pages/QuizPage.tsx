import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchQuizById } from "../services/api";

interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

const QuizPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    if (quizId) {
      fetchQuizById(quizId).then((data) => setQuiz(data));
    }
  }, [quizId]);

  if (!quiz) return <div className="text-center py-10">Loading quiz...</div>;

  const handleSelectAnswer = (questionIndex: number, option: string) => {
    setAnswers({ ...answers, [questionIndex]: option });
  };

  const handleSubmit = () => {
    if (!quiz) return;
    let correctCount = 0;
    quiz.questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) correctCount++;
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
      <p className="mb-6">{quiz.description}</p>

      {quiz.questions.map((q, idx) => (
        <div key={idx} className="mb-6 p-4 border rounded bg-white">
          <p className="font-semibold mb-2">
            {idx + 1}. {q.questionText}
          </p>
          <ul className="space-y-2">
            {q.options.map((opt, i) => {
              const isSelected = answers[idx] === opt;
              const isCorrect = submitted && opt === q.correctAnswer;
              const isWrong =
                submitted && isSelected && opt !== q.correctAnswer;

              return (
                <li
                  key={i}
                  onClick={() => !submitted && handleSelectAnswer(idx, opt)}
                  className={`p-2 border rounded cursor-pointer hover:bg-gray-100
                    ${isSelected ? "bg-blue-100 border-blue-400" : ""}
                    ${isCorrect ? "bg-green-200 border-green-400" : ""}
                    ${isWrong ? "bg-red-200 border-red-400" : ""}
                  `}
                >
                  {opt}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="mt-4 text-xl font-bold">
          You scored {score} / {quiz.questions.length}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
