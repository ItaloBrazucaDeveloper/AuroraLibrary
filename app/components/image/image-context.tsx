import { createContext, useContext, useReducer } from "react";

type StateProps = {
  showFallback?: boolean;
  src?: string;
};

type ActionType = {
  type: "setShowFallback" | "setImageSrc";
  payload: StateProps;
};

type imageContextProps = {
  state: StateProps;
  setShowFallback: (showFallback: boolean) => void;
  setImageSrc: (src: string) => void;
};

export const ImageContext = createContext<imageContextProps>(
  {} as imageContextProps
);

export function getContext() {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
}

export function getProviders() {
  const initialState = {
    showFallback: true,
    src: "",
  };

  function reducer(state: StateProps, action: ActionType) {
    switch (action.type) {
      case "setShowFallback":
        return {
          ...state,
          showFallback: action.payload.showFallback,
        };
      case "setImageSrc":
        return {
          ...state,
          src: action.payload.src,
        };
      default:
        throw Error("Unknown action: " + action.type);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function setShowFallback(showFallback: boolean) {
    dispatch({
      type: "setShowFallback",
      payload: { showFallback },
    });
  }

  function setImageSrc(src: string) {
    dispatch({
      type: "setImageSrc",
      payload: { src },
    });
  }

  return { setShowFallback, setImageSrc, state };
}
