import cifrao from "../images/cifrao.png";
import pessoa from "../images/pessoa.png";
import { 
  ButtonsContainer,
  ContaContainer,
  GorjetaContainer,
  GorjetaTotalContainer,
  InputContainer,
  Label,
  MainContainer,
  PessoasContainer,
  PorcentagemContainer,
  ResultadosContainer,
  TotalContainer,
} from "./Calculadora.styles";

export function Calculadora() {
  return (
    <MainContainer>
      <form action="">
        <ContaContainer>
          <Label htmlFor="bill">Conta</Label>
          <InputContainer>
            <img src={cifrao} alt="logo"></img>
            <input id="bill" type="number" placeholder="0" />
          </InputContainer>
        </ContaContainer>

        <PorcentagemContainer>
          <Label htmlFor="custom-tip">Selecione a Porcentagem %</Label>
          <ButtonsContainer>
            <input type="button" value="5%" />
            <input type="button" value="10%" />
            <input type="button" value="15%" />
            <input type="button" value="25%" />
            <input type="button" value="50%" />
            <input type="number" id="custom-tip" placeholder="Outro" />
          </ButtonsContainer>
        </PorcentagemContainer>

        <PessoasContainer>
          <Label htmlFor="">Número de Pessoas</Label>
          <InputContainer>
            <img src={pessoa} alt="pessoa"></img>
            <input type="number" id="people" placeholder="0" />
          </InputContainer>
        </PessoasContainer>
      </form>

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
    </MainContainer>
  )
}