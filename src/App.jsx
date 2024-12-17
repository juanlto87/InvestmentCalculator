import UserInput from "./components/UserInput";
import Resultados from "./components/Resultados";
import {useState} from "react";

const VALORES = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5,
  duration: 12,
};

function App() {
  const [valores, setValores] = useState(VALORES);

  const inputIsValid = valores.duration > 0;

  function handleChangeValues(event) {
    let value = event.target.value;
    let name = event.target.name;
    setValores((prevValores) => {
      return {
        ...prevValores,
        [name]: +value,
      };
    });
  }
  return (
    <>
      <UserInput onUpdate={handleChangeValues} userInput={valores} />
      {inputIsValid && <Resultados userInput={valores} />}
      {!inputIsValid && (
        <p className="center">Por favor, ingresar valores válidos..</p>
      )}
    </>
  );
}

export default App;
