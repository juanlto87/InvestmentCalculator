export default function UserInput({onUpdate, userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inversión Inicial</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={onUpdate}
            name="initialInvestment"
          />
        </p>
        <p>
          <label>Inversión Anual</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={onUpdate}
            name="annualInvestment"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>% Retorno Esperado</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={onUpdate}
            name="expectedReturn"
          />
        </p>
        <p>
          <label>Duración</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={onUpdate}
            name="duration"
          />
        </p>
      </div>
    </section>
  );
}
