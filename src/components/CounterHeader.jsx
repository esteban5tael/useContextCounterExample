import { CounterContext } from "../Contexts/CounterProvider";
import { useContext } from "react"
export const CounterHeader = () => {

    const { counter } = useContext(CounterContext);

    return (
        <>
            <div className="alert alert-primary m-1 p-1 text-center" role="alert">
                <span>Counter Value: <b>{counter}</b></span>
            </div>
        </>
    )
}
