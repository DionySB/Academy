import cifrao from "../images/cifrao.png";
import pessoa from "../images/pessoa.png";

export function Calculadora() {
  return (
    <main>
      <form action="">
        <div className="bill-box">
          <label htmlFor="bill">Conta</label>
          <div className="input-box">
          <img src={cifrao} alt="logo"></img>
            <input id="bill" type="number" placeholder="0" />
          </div>
        </div>

        <div className="tip-box">
          <label htmlFor="custom-tip">Selecione a Porcentagem %</label>
          <div>
            <input type="button" value="5%" />
            <input type="button" value="10%" />
            <input type="button" value="15%" />
            <input type="button" value="25%" />
            <input type="button" value="50%" />
            <input type="text" id="custom-tip" placeholder="Outro" />
          </div>
        </div>

        <div className="people-box">
          <label htmlFor="">Número de Pessoas</label>
          <div className="input-box">
          <img src={pessoa} alt="pessoa"></img>
            <input type="number" id="people" placeholder="0" />
          </div>
        </div>
      </form>

      <section className="results">
        <div className="tip-amount">
          <p>
            Gorjeta <br />
            <span>/ pessoa</span>
          </p>
          <p>R$ 0.00</p>
        </div>

        <div className="total">
          <p>
            Total <br />
            <span>/ pessoa</span>
          </p>
          <p>R$ 0.00</p>
        </div>
      </section>
    </main>
  )
}