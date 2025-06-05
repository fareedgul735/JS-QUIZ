import { useReducer, useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import { questions } from "./data/Question";
import Navbar from "./navbar/Navbar";



const App = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handlerAnswer = (answer: string) => {
    if (answer === questions[current].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  const percentage = (score / questions.length) * 100;
  const passed = percentage >= 70;

  return (
    <div>
      <Navbar />
      {!finished ? (
        <QuestionCard
          question={questions[current]}
          currentIndex={current}
          totalQuestions={questions.length}
          onAnswer={handlerAnswer}
        />
      ) : (
        <div className="result">
          <h2>Quiz Finished!</h2>
          <p>Your Score: {score}/{questions.length}</p>
          <p>Percentage: {percentage.toFixed(2)}%</p>
          <h3 style={{ color: passed ? "green" : "red" }}>
            {passed ? "🎉 Congratulations! You Passed!" : "❌ Sorry! You Failed!"}
          </h3>
        </div>
      )}
    </div>
  );
};

export default App;
