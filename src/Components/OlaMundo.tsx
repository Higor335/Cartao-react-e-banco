import {useState} from 'react'
function OlaMundo(){

  // const cores = ["#e21415", 
  //                 "#128C7E", 
  //                 "#9400D3", 
  //                 "#1DB954", 
  //                 "#4267B2"]
  const cores = ["Pedra", 
                  "Papel", 
                  "Tesoura"]
  const [contador,setContador] = useState(0)
 

  return <button 
    onClick={()=>
        setContador(
          Math.floor(Math.random()*3))}>
            O escolhido foi {cores[contador]}
  </button>
}
export default OlaMundo;