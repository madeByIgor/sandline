import React, { createContext, useContext, useRef, useState } from "react";

interface GlobalContextProps {}

const GlobalContext = createContext<undefined>(undefined);

const GlobalProvider: React.FC<GlobalContextProps> = ({ children }) => {
  const skullTargetSlotRef = useRef<HTMLDivElement>(null);
  const squareGridRef = useRef<HTMLDivElement>(null);
  const [isIllegalStream, setIsIllegalStream] = useState<boolean>(false);

  return (
    <GlobalContext
      value={{
        squareGridRef,
        skullTargetSlotRef,
        isIllegalStream,
        setIsIllegalStream,
      }}
    >
      {children}
    </GlobalContext>
  );
};

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}
export default GlobalProvider;
