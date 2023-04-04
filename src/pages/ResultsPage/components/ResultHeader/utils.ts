import { StarType } from "./Stars";

export const createStarTypesArray = (
  correct: number,
  total: number
): StarType[] => {
  return new Array(total)
    .fill(null)
    .map((_, index) => (index < correct ? "filled" : "empty"));
};
