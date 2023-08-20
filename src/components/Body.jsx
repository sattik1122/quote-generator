import React from 'react'

function Body(props) {
    
    const random=Math.floor(Math.random()*props.quotes.length)
    // console.log(random)
    console.log(props.quotes[random])
  return (
    <div className='container'>
      <button onClick={()=>props.getQuote()} className='btn'>New Quote</button>
      <p>{props.quotes[random]!=undefined?props.quotes[random].text:""}</p>
    </div>
  )
}

export default Body
