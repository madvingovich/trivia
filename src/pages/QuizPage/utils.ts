export const getProgressWidth = (
  question: number,
  totalQuestions: number
): string => `${(question / totalQuestions) * 100}%`;

export const getQuestionNumber = (n: number): string | number =>
  String(n).length === 1 ? `0${n}` : n;
