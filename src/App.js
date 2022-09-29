import { useEffect, useState } from 'react'; //desestructurando para traer directamente 
import './App.css';

//Components
import Title from './components/Title';
import FullName from './components/FullName';

function App() {

  const handleClick = ( increase ) => {
    let newCount = count
    if(increase){
      newCount = newCount + 1
    }else{
      newCount = newCount - 1
    }
    setCount(newCount)
  }
 
  const [count, setCount] = useState(0)
  //useEffect controla el ciclo de vida de los componentes en los componentes como funcion 
  //useEffect argumentos
  //ARGUMENTO 1: CALLBACK
  //ARGUMENTO 2: [], NADA, [COUNT]
  //En caso vacio useeffect se modificara cada que algo cambie (estado) 
  // Caso []: el callback useEffect se ejecutara solo la primera vez que carga el componente 
  //Caso [state]: el callback useEffect se ejecutara solo la primera vez y cada que se actualice el estado que se incluye
  useEffect( ()=> {
    console.log("SOLO SE EJECUTA LA PRIMERA VEZ QUE EL COMPONENTE SE CARGA ")
  }, [])

  useEffect( ()=> {
    console.log("ME EJECUTO LA PRIMERA VEZ QUE EL COMPONENTE SE CARGA Y CADA VEZ QUE EL ESTADO SE ACTUALIZA")
  }, [count])

  useEffect( ()=> {
    console.log("ME EJECUTO LA PRIMERA VEZ Y SIEMPRE QUE HAYA UNA ACTUALIZACION DEL COMPONENTE")
  })

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Hi i am a title"/>
        <FullName firstName="Jose" lastName="Rivera"/>
        <p>Counter: {count} veces</p>
        <button onClick={()=> handleClick(true)}> + </button>
        <button onClick={()=>handleClick(false)}> - </button>
      </header>
    </div>
  );
}

export default App;
