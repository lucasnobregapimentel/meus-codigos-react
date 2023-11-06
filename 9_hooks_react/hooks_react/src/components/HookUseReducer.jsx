import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { ...state, count: state.count + 1 };
    case 'showText':
      return { ...state, showText: !state.showText };
    default:
      return 'This action doesnt exist';
  }
};

const HookUseReduce = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  })

  const handleClick = () => {
    dispatch({ type: 'Increment' });
    dispatch({ type: 'showText' });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>{state.count}</p>
      <button onClick={handleClick}>Clique</button>
      <p>{state.showText && 'Lucas é bonito'}</p>
      <hr />
    </div>
  )
}

export default HookUseReduce