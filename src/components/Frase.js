import React, { useState } from 'react';
import frases from '../quotes.json';

const getRandom = () => Math.floor(Math.random()* frases.length);
const colores = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871" ];
const Frase = () => {

    // const frase = frases[3];
   // console.log(frase);
   const [frase, setFrase] = useState(frases[getRandom()]);
   //const random = Math.floor(Math.random()* frases.length);
   
   //console.log(random); 
   
   const changeQuote = () => {
       const random = getRandom()
       setFrase(frases[random]);
   }
   const kolor = colores[Math.floor(Math.random() * 6)];
   document.body.style = `background: ${kolor}`
   
   console.log(frase);

    return (
        <div className = 'Frase' style={{color: kolor}}>
          <i className="fa-solid fa-quote-left"></i>          
          <h1> {<i className="fa-solid fa-quote-left"></i>}  {frase.quote}  {frase.author} </h1>
          {/* <i class="fa-solid fa-quote-right"></i> */}
          {/* <h1> {frase.author} </h1> */}
          <button onClick={changeQuote} ><i class="fa-solid fa-shuffle"></i></button>
          
        </div>
    );
};

export default Frase;

