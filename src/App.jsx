// import { Button } from 'react-bootstrap'
// import React, { useEffect, useState } from 'react'


// export default function App() {

//   // const [initialization variable , function ]= useState(value);
//   const [count , increase] = useState(0);


//   const [power,calculate] = useState(0);


//   useEffect(() => {
//     calculate(count * count);
//   },[count]);

//   // useEffect(() => {
//   //   setTimeout(()=>{
//   //     increase((count)=> count + 1);
//   //   },1000);})


//   return (
//     <>
//     <center>
//       <h1> You Clicked {count} time</h1>
//        <Button type='button' onClick={() =>{increase(count + 1)}}> Click Here</Button>
//        <h3> The power of {count} is :{power}</h3>
//     </center>
//     </>
//   )
// }


import React from 'react'
import Youtube from './youtube.jsx'

export default function App() {
  return (
    <>
       < Youtube />
    </>
  )
}


