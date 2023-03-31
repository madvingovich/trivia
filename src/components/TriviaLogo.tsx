import logo from "images/trivia.png";

function TriviaLogo({ className }: { className?: string }) {
  return <img className={className} src={logo} alt="TRIVIA" width="100%" />;
}

export default TriviaLogo;
