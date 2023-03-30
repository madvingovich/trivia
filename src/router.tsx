import { createBrowserRouter } from "react-router-dom";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
]);
