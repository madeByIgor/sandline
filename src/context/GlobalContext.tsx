import React, {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface GlobalContextProps {
  children: ReactNode;
}

const GlobalContext = createContext<undefined>(undefined);

const GlobalProvider: React.FC<GlobalContextProps> = ({ children }) => {
  const skullTargetSlotRef = useRef<HTMLDivElement>(null);
  const squareGridRef = useRef<HTMLDivElement>(null);
  const squareFullScreenRef = useRef<HTMLDivElement>(null);
  const illegalSquarePosition = useRef(null);
  const [isIllegalStream, setIsIllegalStream] = useState<boolean>(false);
  const [heroAniDone, setHeroAniDone] = useState(false);
  return (
    <GlobalContext
      value={{
        squareGridRef,
        skullTargetSlotRef,
        isIllegalStream,
        setIsIllegalStream,
        squareFullScreenRef,
        illegalSquarePosition,
        heroAniDone,
        setHeroAniDone,
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
