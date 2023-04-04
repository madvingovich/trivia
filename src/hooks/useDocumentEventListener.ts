import { useEffect } from "react";

export const useDocumentEventListener = (callback: (e: MouseEvent) => void) => {
  useEffect(() => {
    document.addEventListener("mousedown", callback);
    return () => document.removeEventListener("mousedown", callback);
  }, [callback]);
};
