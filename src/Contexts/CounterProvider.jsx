import { createContext, useState } from "react"



const CounterContext = createContext();

// eslint-disable-next-line react/prop-types
export const CounterProvider = ({ children }) => {


  const [counter, setCounter] = useState(0)

  const decCounter = () => {
    setCounter(prevCount => prevCount - 1);
  }

  const zeroCounter = () => {
    setCounter(0);
  }

  const addCounter = () => {
    setCounter(prevCount => prevCount + 1);
  }


  return (
    <>
      <CounterContext.Provider value={{ counter, decCounter, zeroCounter, addCounter }}>
        {children}
      </CounterContext.Provider>
    </>
  )
}

export {CounterContext}