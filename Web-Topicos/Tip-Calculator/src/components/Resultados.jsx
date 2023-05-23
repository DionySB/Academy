import {
  GorjetaContainer,
  GorjetaTotalContainer,
  ResultadosContainer,
  TotalContainer
} from "./Resultados.styles"

export function Resultados() {
  return (
        <ResultadosContainer>
          <GorjetaTotalContainer>
            <GorjetaContainer>
              <p>
                Gorjeta <br />
                <span>/ pessoa</span>
              </p>
              <p>R$ 0.00</p>
            </GorjetaContainer>

            <TotalContainer>
              <p>
                Total <br />
                <span>/ pessoa</span>
              </p>
              <p>R$ 0.00</p>
            </TotalContainer>
          </GorjetaTotalContainer>

          <button>Limpar</button>

        </ResultadosContainer>
  )
}