import { useState } from 'react'; //desestructurando para traer directamente 
import './App.css';

//Components
import Title from './components/Title';
import FullName from './components/FullName';

function App() {
  //Local state
  //[0] = valor del state
  // [1] = funcion que actualiza el state
  //si 'useState' recibe un argumento, este sera el valor inicial del estado 
  //si no el estado es undefined 
  const [count, setCount] = useState(0)

  const handleClick = ( increase ) => {
    let newCount = count
    if(increase){
      newCount = newCount + 1
    }else{
      newCount = newCount - 1
    }
    setCount(newCount)
  }

  const resetHandler = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <Title text="Hi i am a title"/>
        <FullName firstName="Jose" lastName="Rivera"/>
        <p>Has hecho click {count} veces</p>
        <button onClick={()=> handleClick(true)}> + </button>
        <button onClick={resetHandler}> Reset </button>
        <button onClick={()=>handleClick(false)}> - </button>
      </header>
    </div>
  );
}

export default App;
