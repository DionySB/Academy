import { useState } from "react";

export function Increase() {
  const [name, setName] = useState('Diony');
  const [idade, setIdade] = useState(21);

  const increaseName = () => {
    const lastLetter = name[name.length - 1];
    setName(name + lastLetter);
  };

  const increaseIdade = () => {
    setIdade(idade + 2);
  };

  return (
    <div>
      <h1>Componente Increase</h1>
      <p>Nome: {name}</p>
      <p>Idade: {idade}</p>
      <button onClick={increaseName}>Crescer</button>
      {" "} {/* Espacinho */}
      <button onClick={increaseIdade}>Aumentar</button>
    </div>
  );
}