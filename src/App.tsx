import HomeHero from "./components/HomeHero/HomeHero";
import Header from "./components/UI/Header/Header";
import SquareGrid from "./components/UI/SquareGrid/SquareGrid";
import GlobalProvider from "./context/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <HomeHero />
        <SquareGrid />
      </GlobalProvider>
    </>
  );
}

export default App;
