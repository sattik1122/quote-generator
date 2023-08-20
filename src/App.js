import './App.css';
import Body from './components/Body';
import {useState,useEffect} from "react"
function App() {
  const [quotes,setQuotes]=useState("")
  const items=[]
  const getQuote=()=>{
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    data.forEach((item)=>{
      items.push(item)
      setQuotes(items)
    })
  });
  // console.log(items)
  }
  
  return (
    
    <div className="App">
    <h1>Quote generator</h1>
      <Body quotes={quotes} getQuote={getQuote}/>
    </div>
  );
}

export default App;
