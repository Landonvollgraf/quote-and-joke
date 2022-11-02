import React from "react";
import "./style.css";
import cars from './index.json';



export default function App() {
  return (
    <div className="App">
      <h1 className="link"><a href="upload.html" style={{textDecoration:"none" , color:"black"}}>Upload page</a></h1>
      {cars.map((cars, key ) => {
        return (
          <div className='card' key={key}>
          <img src={ cars.img } className='img card-img-top' alt='...'/>
          <div className='card-body'>
            <h5 className='card-title'>{cars.name}</h5>
            <p>{cars.birthyear}</p>
            <p className='card-text'>{cars.info}</p>
          </div>
        </div>
        );
      })}
    </div>
  
  );
}


