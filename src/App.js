import { useEffect, useState } from 'react'; //desestructurando para traer directamente 
import './App.css';

//Components
import Title from './components/Title';
import FullName from './components/FullName';

function App() {

  const handleClick = ( switchStatus ) => {
    if(switchStatus === "OFF"){
      setswitchStatus("ON")
    }else{
      setswitchStatus("OFF")
    }
  }
 
  const [switchStatus, setswitchStatus] = useState("OFF")
  
  const statusClass = switchStatus === "OFF"? "statusOff" : "statusOn";

  

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Hi i am a title"/>
        <FullName firstName="Jose" lastName="Rivera"/>
        
        <button onClick={()=> handleClick(switchStatus)}> SWITCH </button>
        <div className={statusClass}>{switchStatus}</div>
      </header>
    </div>
  );
}

export default App;
