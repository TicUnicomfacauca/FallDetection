import React, { useEffect,useState } from 'react';
import logo from './logo.svg';
import Alert from './Alert.svg';
import './App.css';
import { preguntarPermisos,inicializarFirebase,getFallDetection} from "./Components/firebaseConfig";

const SetAlert=(props)=>{
  if(props.fallstatus!=undefined){
    if(props.fallstatus.cama_hospitalaria.estado==="Fall"){
      window.navigator.vibrate([10000]);
      console.log(props.fallstatus.cama_hospitalaria)
      return(<><img src={Alert} className="App-logo" alt="logo" /><p>Alert at {props.fallstatus.cama_hospitalaria.fecha_ocurrencia}</p></>)
    }
    else {
        return(<><img src={logo} className="App-logo" alt="logo" /><p>Waiting for alert</p></>)
    }
  }
  return (<></>)
}

function App() {
  const [fallstatus,setFallStatus]=useState(undefined);
  useEffect(() => {
    inicializarFirebase();
    preguntarPermisos();    
    getFallDetection(setFallStatus);
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <h2>
            Fall detecction App
        </h2>
        <SetAlert fallstatus={fallstatus} />
        </header>
    </div>
  );
}

export default App;
