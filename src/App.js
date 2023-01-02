import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[countries, setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => 
      {setCountries(data)
        console.log(data);
    })
  },[])
  return (
    <div className="App">
     <h1>Count Country : {countries.length}</h1>
     {console.log(countries)}
     <ul>{countries.map(country=><li>{country.cca2}</li>)}</ul>
    </div>
  );
}

export default App;
