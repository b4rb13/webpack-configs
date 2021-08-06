import "../styles/index.scss";
import Teams from "./Teams";
import rootimg from "../images/root.jpg";
import logosvg from "../images/Avengers.svg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Levon Yeghiazaryan is the best python developer of the world </h1>{" "}
        </section>
        <img src={rootimg} alt="img" width="250" />
        <img src={logosvg} alt="img" width="250" />
        <Teams />
      </main>
    </>
  );
};

export default App;
