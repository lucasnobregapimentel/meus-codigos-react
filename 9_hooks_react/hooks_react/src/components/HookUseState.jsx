import { useState } from "react"

const HookeUseState = () => {
  let userName = 'João';
  const [name, setName] = useState('Lucas');

  const changeNames = () => {
    userName = 'João da Silva';

    setName('Lucas Pimentel')
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      {/* 2 - useState e input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <input type="submit" value='Enviar' />
      </form>
      <p>Você tem {age} anos.</p>
      <hr />
    </div>
  )
}

export default HookeUseState