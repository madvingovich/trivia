import { createBrowserRouter } from "react-router-dom";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

export const PATHS = {
  index: "/",
  quiz: "/quiz",
  results: "/results",
};

export const router = createBrowserRouter([
  {
    path: PATHS.index,
    element: <WelcomePage />,
  },
  {
    path: PATHS.quiz,
    element: <QuizPage />,
  },
  {
    path: PATHS.results,
    element: <ResultsPage />,
  },
]);
