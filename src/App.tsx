import HomeHero from "./components/HomeHero/HomeHero";
import Header from "./components/UI/Header/Header";
import Spacer from "./components/UI/Spacer/Spacer";
import GlobalProvider from "./context/GlobalContext";

function App() {
  return (
    <>
      <Header />
      <GlobalProvider>
        <HomeHero />
      </GlobalProvider>
      <Spacer height={"150vh"} />
    </>
  );
}

export default App;
