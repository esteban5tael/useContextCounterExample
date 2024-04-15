import { useContext } from "react"
import { CounterContext } from "../Contexts/CounterProvider";

export const CounterControlls = () => {

    const { decCounter, zeroCounter, addCounter } = useContext(CounterContext);

    return (
        <div className="card m-1 p-1 text-center">
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-danger btn-sm" onClick={decCounter} >Dec Counter</button>
                </div>
                <div className="col-4">

                    <button className="btn btn-secondary btn-sm" onClick={zeroCounter} >Add Counter</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success btn-sm" onClick={addCounter} >Add Counter</button>

                </div>
            </div>
        </div>
    )
}
