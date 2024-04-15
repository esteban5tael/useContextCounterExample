import { CounterProvider } from "./Contexts/CounterProvider";
import { CounterHeader } from "./components/CounterHeader";
import { CounterControlls } from "./components/CounterControlls";



export const App = () => {



  return (
    <>

      <CounterProvider>
        <div className="card m-1 p-1">
          <CounterHeader />
          <CounterControlls />
        </div>
      </CounterProvider>

    </>
  )
}


