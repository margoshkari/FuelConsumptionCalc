import "./App.css";

function App() {
  function Calc() {
    let amount = document.getElementById("amount").value;
    let distance = document.getElementById("distance").value;
    let result = 0;
    let text = document.getElementById("text");
    if (distance < 0 || amount < 0) {
      alert("Value can't be below zero!");
    } else if (amount && distance) {
      result = (amount / distance) * 100;
      text.innerHTML = "You can ride " + result + "km";
    } else {
      alert("Fill all fields!");
    }
  }

  return (
    <div className="App">
      <div className="Login">
        <h2>Average fuel consumption</h2>
        <input
          type="number"
          placeholder="Fuel amount"
          id="amount"
          className="field"
        ></input>
        <input
          type="number"
          placeholder="distance"
          id="distance"
          className="field"
        ></input>
        <span id="error_message"></span>
        <button onClick={Calc}>Calculate</button>
      </div>
      <br></br>
      <span id="text"></span>
    </div>
  );
}

export default App;
