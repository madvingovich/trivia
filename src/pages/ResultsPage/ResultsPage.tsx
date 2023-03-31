import React from "react";
import Button from "../../components/Button/Button";
import Background from "./components/Background/Background";
import ResultHeader from "./components/ResultHeader/ResultHeader";
import Results from "./components/Results/Results";
import styles from "./ResultsPage.module.css";

function ResultsPage() {
  return (
    <div className={styles.container}>
      <Background />
      <ResultHeader />
      <div className={styles.resultsContainer}>
        <Results />
      </div>
      <Button type="action" text="PLAY AGAIN" onClick={() => {}} />
    </div>
  );
}

export default ResultsPage;
