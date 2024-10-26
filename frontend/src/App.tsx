import ThemeSwitcher from "./components/themeSwitcher";
import Cards from "./components/cards";
import NavBar from "./components/navBar";
import MockupCode from "./components/mockupCode";
import Footer from "./components/footer";
import getAPI from "./functions/getAPI";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(getAPI({ url: "api/members" }));
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <NavBar />
        <MockupCode code="npm install vedPatel" />
      </div>

      <Footer project="React Tailwind" name="Tailwind" />
    </>
  );
}

export default App;
