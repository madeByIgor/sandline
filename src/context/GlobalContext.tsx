import React, {
  createContext,
  useContext,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  type RefObject,
} from "react";

interface GlobalContextValues {
  squareGridRef: RefObject<HTMLDivElement | null>;
  skullTargetSlotRef: RefObject<HTMLDivElement | null>;
  squareFullScreenRef: RefObject<HTMLDivElement | null>;
  isIllegalStream: boolean;
  setIsIllegalStream: Dispatch<SetStateAction<boolean>>;
  heroAniDone: boolean;
  setHeroAniDone: Dispatch<SetStateAction<boolean>>;
  mapRef: RefObject<HTMLDivElement | null>;
  gridTimeline: GSAPTimeline | null;
  setGridTimeline: Dispatch<SetStateAction<GSAPTimeline | null>>;
}

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalContextValues | undefined>(undefined);

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const skullTargetSlotRef = useRef(null);
  const squareGridRef = useRef(null);
  const mapRef = useRef(null);
  const [gridTimeline, setGridTimeline] = useState<GSAPTimeline | null>(null);
  const squareFullScreenRef = useRef(null);
  const [isIllegalStream, setIsIllegalStream] = useState(false);
  const [heroAniDone, setHeroAniDone] = useState(false);

  return (
    <GlobalContext
      value={{
        squareGridRef,
        skullTargetSlotRef,
        isIllegalStream,
        setIsIllegalStream,
        squareFullScreenRef,
        heroAniDone,
        setHeroAniDone,
        gridTimeline,
        setGridTimeline,
        mapRef,
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
