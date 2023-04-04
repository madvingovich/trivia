import { useAppDispatch } from "app/hooks";
import { resetState } from "app/slices/triviaSlice";
import { useNavigate } from "react-router-dom";
import { PATHS } from "router";

export const useCancelQuiz = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return () => {
    navigate(PATHS.index);
    dispatch(resetState());
  };
};
