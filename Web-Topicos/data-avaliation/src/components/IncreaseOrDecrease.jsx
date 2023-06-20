import { useState } from "react";

export function IncreaseOrDecrease() {
  const [name, setName] = useState('Diony');
  const [idade, setIdade] = useState(21);

  const crescerNome = () => {
    const lastLetter = name[name.length - 1];
    setName(name + lastLetter);
  };

  const aumentarIdade = () => {
    setIdade(idade + 2);
  };

  return (
    <div>
      <h1>Componente IncreaseOrDecrease</h1>
      <p>Nome: {name}</p>
      <p>Idade: {idade}</p>
      <button onClick={crescerNome}>Crescer</button>
      <button onClick={aumentarIdade}>Aumentar</button>
    </div>
  );
}
