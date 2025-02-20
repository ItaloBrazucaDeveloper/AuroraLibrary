import { Show } from "@components/show";
import { ReactNode, useEffect } from "react";
import { getContext } from "./image-context";

export function ImageFallback({ children }: { children: ReactNode }) {
  const { setShowFallback, state } = getContext();

  useEffect(() => {
    if (!state.src || state.src === "") {
      return;
    }

    const image = new Image();
    image.src = state.src;

    image.onload = () => setShowFallback(false);
    image.onerror = () => setShowFallback(true);
  }, [state.src]);

  return <Show condition={state.showFallback === true}>{children}</Show>;
}
