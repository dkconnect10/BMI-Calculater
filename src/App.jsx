import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0 || isNaN(weight) || isNaN(height)) {
      alert("Please Enter valid weight and Height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage(
          "You are underweight. Consider consulting with a healthcare provider for advice."
        );
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage(
          "You are a healthy weight. Keep maintaining your current lifestyle!"
        );
      } else if (bmi >= 24.9 && bmi < 29.9) {
        setMessage(
          "You are overweight. Consider a balanced diet and regular exercise."
        );
      } else {
        setMessage(
          "You are obese. It is recommended to seek advice from a healthcare provider."
        );
      }

      setWeight("");
      setHeight("");
    }
  };
  let reload = () => {
    window.location.reload();
  };
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (inches)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
