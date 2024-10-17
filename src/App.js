import "./App.css";
import Counter from "./components/Counter";
import SliderF6 from "./components/SliderF6";

function App() {
  return (
    <div className="App">
      <img src="kid.png" alt="kid" className="kid" />
      <img src="logo1.png" alt="logo-desfile-disfraces" className="logo" />
      <img src="baner1.png" alt="banner-desfile" className="banner" />
      <div className="infoContainer">
        <div className="counterContainer">
          <Counter />
        </div>
        <h1 className="zelda">
          <a
            href="https://docs.google.com/forms/d/12wXmqzgv-07lQ_YWS21zFDfFjUwlHHYGb9C4f5EDNpM/viewform?edit_requested=true"
            target="blank"
          >
            Haz clic aquí para inscribirte
          </a>
        </h1>
      </div>
      <div className="patreonContainer">
        <img src="logos1.png" alt="patrocinadores" className="logos1" />
        <div className="sliderContainer">
          <SliderF6 />
        </div>
      </div>
    </div>
  );
}

export default App;
