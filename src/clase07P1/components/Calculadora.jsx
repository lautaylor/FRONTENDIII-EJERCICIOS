import { useState } from 'react';

function Calculadora ({cantidad, onEqual}){

const[calculadora, setCalculadora] = useState(0)

const aumentarCalculadora = () => {
        setCalculadora(calculadora + cantidad)
    } 

const disminuirCalculadora = () => {
        setCalculadora(calculadora - cantidad)
    } 

const resetarCalculadora = () => {
        setCalculadora(0)
    } 

const igualarCalculadora = () => {
    console.log (`El valor actual de la calculadora es ${calculadora}`)
    onEqual(calculadora)
}
    return (
        <div>
            <h2>Calculadora: {calculadora} </h2>
            <button onClick={aumentarCalculadora}>+</button>
            <button onClick={disminuirCalculadora}>-</button>
            <button onClick={resetarCalculadora}>Reset</button>
            <button onClick={igualarCalculadora}>=</button>
        </div>
    )
}

export default Calculadora