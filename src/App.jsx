import UserInput from "./components/UserInput";
import Resultados from "./components/Resultados";
import {calculateInvestmentResults} from "./util/investment.js";
import {useState} from "react";

const VALORES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [valores, setValores] = useState(VALORES);
  function handleChangeValues(event) {
    let value = event.target.value;
    let name = event.target.name;
    setValores((prevValores) => {
      return {
        ...prevValores,
        [name]: value,
      };
    });

    const result = calculateInvestmentResults(valores);
    console.log(result);
  }
  return (
    <>
      <UserInput onUpdate={handleChangeValues} />
      <Resultados />
    </>
  );
}

export default App;
