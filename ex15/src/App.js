import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <section className="exercise">
      <h2>1. Counter</h2>
      <p className="count">{count}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </section>
  );
}

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function questionBankReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return {
        ...state,
        selectedOption: action.payload,
      };

    case "NEXT_QUESTION": {
      const current = state.questions[state.currentQuestion];
      const isCorrect = state.selectedOption === current.answer;
      const newScore = isCorrect ? state.score + 1 : state.score;

      const isLastQuestion =
        state.currentQuestion === state.questions.length - 1;

      if (isLastQuestion) {
        return {
          ...state,
          score: newScore,
          showScore: true,
        };
      }

      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        score: newScore,
      };
    }

    case "RESTART_QUIZ":
      return {
        ...state,
        currentQuestion: 0,
        selectedOption: "",
        score: 0,
        showScore: false,
      };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(
    questionBankReducer,
    initialState
  );

  const handleOptionSelect = (option) => {
    dispatch({
      type: "SELECT_OPTION",
      payload: option,
    });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  if (state.showScore) {
    return (
      <section className="exercise">
        <h2>2. Question Bank</h2>
        <h3>
          Your score: {state.score} / {state.questions.length}
        </h3>
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </section>
    );
  }

  const currentQuestion = state.questions[state.currentQuestion];

  return (
    <section className="exercise">
      <h2>2. Question Bank</h2>

      <p>
        Question {state.currentQuestion + 1} of {state.questions.length}
      </p>

      <h3>{currentQuestion.question}</h3>

      <div>
        {currentQuestion.options.map((option) => (
          <label className="option" key={option}>
            <input
              type="radio"
              name={`question-${currentQuestion.id}`}
              value={option}
              checked={state.selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <button
        onClick={handleNextQuestion}
        disabled={!state.selectedOption}
      >
        {state.currentQuestion === state.questions.length - 1
          ? "Finish"
          : "Next Question"}
      </button>

      <p>Current score: {state.score}</p>
    </section>
  );
}

function App() {
  return (
    <main className="container">
      <h1>Exercise 15 - useReducer</h1>
      <Counter />
      <QuestionBank />
    </main>
  );
}

export default App;
