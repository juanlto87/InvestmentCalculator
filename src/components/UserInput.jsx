export default function UserInput({onUpdate}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inicial investment</label>
          <input
            type="number"
            required
            onChange={onUpdate}
            name="initialInvestment"
          />
        </p>
        <p>
          <label>Anual investment</label>
          <input
            type="number"
            required
            onChange={onUpdate}
            name="annualInvestment"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={onUpdate}
            name="expectedReturn"
          />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required onChange={onUpdate} name="duration" />
        </p>
      </div>
    </section>
  );
}
