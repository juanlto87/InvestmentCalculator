import {calculateInvestmentResults} from "../util/investment.js";
import {formatter} from "../util/investment.js";

export default function Resultados({userInput}) {
  const resultados = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultados[0].valueEndOfYear -
    resultados[0].annualInvestment -
    resultados[0].interest;
  //console.log(resultados);

  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Año</th>
            <th>Valor de inversión</th>
            <th>Interés (año)</th>
            <th>Total Interés</th>
            <th>Capital Invertido</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInvestment;
            const totalAmountInvested = result.valueEndOfYear - totalInterest;

            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
