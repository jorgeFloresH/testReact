import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Menu from './components/Menu'
import './App.css'


 const App =() =>{
  
  //let isDark= true;
  useEffect(()=>{
    //general
    console.log("General");
  });

  useEffect(()=>{
    //mapeos
    console.log("mapeos");
  });
  const [isDark,setIsDark]=useState(true);
  
  const [count,SetCount]=useState(0);
  const [person, setPerson]=useState({
    name: 'alvaro',
    email:'alvaro@alvaro.com'

  });

  const change=()=>{
    setIsDark(!isDark);
    console.log('estoy cambiando a modo'+ isDark);
    setPerson({
      name:'julio',
      email:'julio@alvaro.com'
    });

  }
  useEffect(()=>{
    //peticiones
    console.log("peticiones");
  },[isDark]);
  const add=()=>{
    SetCount( count +1); 

  }
  return(
    <div className='App' id={Math.floor(Math.random()*10)}>
      <ul>
        {isDark ? <>is dark</>: <>is light</>}
        {count}
        <button onClick={change}>Cambiar Modo</button>
        <button onClick={add}>sumar</button>
        <Menu/>
        
      </ul>
    </div>
  );
 }

export default App;
