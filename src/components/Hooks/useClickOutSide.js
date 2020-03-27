import { useEffect } from "react";

export const useClickOutSide = (ref, handle) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handle(event);
    };
    document.addEventListener("mousedown", listener);

    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handle]);
};
