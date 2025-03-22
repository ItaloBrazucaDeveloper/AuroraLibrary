import { useContext, useState, createContext } from "react";

type ContextProps = {
  showOptions: boolean;
  toggleShowOptions: () => void;
  search: string;
  handleSerchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DatalistContext = createContext<ContextProps>({} as ContextProps);

export function getContext() {
  return useContext(DatalistContext);
}

export function getProviders() {
  const [search, setSearch] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);

  function handleSerchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  function toggleShowOptions() {
    setShowOptions(!showOptions);
  }

  return {
    showOptions,
    toggleShowOptions,
    search,
    handleSerchChange,
  };
}
