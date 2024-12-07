// import { useEffect, useState , useMemo, useRef} from "react"
// import "./App.css"
// function App(){
//   const [count , setCount] = useState(0)
//   const [text , setText] = useState("")
//   const value = 0
//   const newValue = useRef(0)
  
//   useEffect(()=>{
//     // console.log('app component' , count)
//     console.log('app avin' , memoizeValue, memoizeValue2)
//   })

//   const memoizeValue = useMemo(()=>{
//     return value + 2
//   } , [count])

//   const memoizeValue2 = useMemo(()=>{
//     return newValue.current += 2
//   } , [count])


//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>increase</button>
//       <hr />
//       <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
//       <h1 className="avin">{text}</h1>
//     </>
//   )
  

// }
// export default App

// --------------------------------------------------------

// import { useEffect, useState , useMemo, useRef} from "react"
// import "./App.css"
// function App(){
//   const [count , setCount] = useState(0)
//   const [text , setText] = useState("")

// const isEven = ()=>{
//   let i =0
//   while (i<4000000000){
//     i++
//   }
//   return count % 2 == 0
// }


//   return(
//     <>
//       <h1>{count} is {isEven() ? 'even' : 'odd'}</h1>
//       <button onClick={()=>setCount(count+1)}>increase</button>
//       <hr />
//       <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
//       <h1 className="avin">{text}</h1>
//     </>
//   )
  

// }
// export default App


// --------------------------------------------------------


import { useEffect, useState , useMemo, useRef} from "react"
import "./App.css"
function App(){
  const [count , setCount] = useState(0)
  const [text , setText] = useState("")

const isEven = useMemo(()=>{
    let i =0
    while (i<4000000000){
      i++
    }
    return count % 2 == 0
  } , [count]
)


  return(
    <>
      <h1>{count} is {isEven ? 'even' : 'odd'}</h1>
      <button onClick={()=>setCount(count+1)}>increase</button>
      <hr />
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <h1 className="avin">{text}</h1>
    </>
  )
}
  export default App