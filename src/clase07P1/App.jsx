import { useState } from 'react';
import Calculadora from './components/Calculadora'

const App = () => {

    const [suma, setSuma] = useState(0);

    const sumarCalculadora = (valor) => {
        setSuma (suma + valor)
    }
    
    return (
        <div> 
            <Calculadora cantidad={1} onEqual={sumarCalculadora} />
            <Calculadora cantidad={5} onEqual={sumarCalculadora} />
            <Calculadora cantidad={13} onEqual={sumarCalculadora} />
            <h2>Suma Total: {suma}</h2>
        </div>
    )
}

export default App