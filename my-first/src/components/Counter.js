import React from 'react'
import {useEffect, useState} from 'react';

function Counter() {


  const [number,setNumber] = useState(0);
//   const [name,setName] = useState('Arda');

  useEffect(() => {
    console.log("Component güncellendi")

    const interval = setInterval(()=>{
        setNumber((n)=> n + 1)
    },1000)

    return () => clearInterval(interval)
  },[])

  useEffect(() => {
    console.log("number state güncellendi")
  },[number])

//   useEffect(() => {
//     console.log("name state güncellendi")
//   },[name])

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number +1 )}>Click</button>

        <hr />
{/* 
        <h1>{name}</h1>
        <button onClick={() => setName('Omer')}>Click</button> */}
    </div>
  )
}

export default Counter