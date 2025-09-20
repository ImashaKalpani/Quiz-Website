import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchQuizzesByModule } from "../services/api";

const QuizSetup: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);

  useEffect(() => {
    const loadQuizzes = async () => {
      if (moduleId) {
        const data = await fetchQuizzesByModule(moduleId);
        setQuizzes(data as any[]);
      }
    };
    loadQuizzes();
  }, [moduleId]);

  const handleStartQuiz = () => {
    if (selectedQuiz) {
      // Navigate to QuizPage with quizId
      navigate(`/module/${moduleId}/quiz/${selectedQuiz}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4">Quizzes for Module</h1>

      <div className="grid gap-4">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => setSelectedQuiz(quiz.id)}
            className={`p-4 border rounded cursor-pointer ${
              selectedQuiz === quiz.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-blue-400"
            }`}
          >
            <h2 className="text-xl font-semibold">{quiz.title}</h2>
            <p>
              {quiz.totalQuestions} Questions • {quiz.timeLimit || "N/A"}{" "}
              Minutes
            </p>
          </div>
        ))}
      </div>

      <button
        disabled={!selectedQuiz}
        onClick={handleStartQuiz}
        className={`mt-6 px-4 py-2 rounded text-white ${
          selectedQuiz
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizSetup;
