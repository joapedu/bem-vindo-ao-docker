import './App.css';
import Confetti from './Confetti';

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>
          Parabéns!!!
        </h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          Você rodou seu primeiro container.
        </p>
        <div>
          <a target="_blank" href={"https://twitter.com/_joaoeduardob"} class="fa fa-twitter" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://www.linkedin.com/in/joão-eduardo-braga/"} class="fa fa-linkedin" rel="noopener noreferrer"> </a>
        </div>
      </header>
    </div>
  );
}

export default App;
