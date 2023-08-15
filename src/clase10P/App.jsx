import { useState } from 'react'
import Form from './components/Form'
import './App.css'

let autoId = 0

const App = () => {
    const [pedidos, setPedidos] = useState ([])

    const handleSubmit = (values) => {
        setPedidos([...pedidos, {id: autoId++, data: values}])
    }
    return (
      <div className='divppal'>
        <h1>PEDI3 YA</h1>
            <h2>Ingresá tu pedido en el siguiente formulario</h2>
            <Form onSubmit={handleSubmit}></Form>

            <h2>Listado de Pedidos:</h2>
            <ul> 
             {pedidos.map((pedido) => (
                <li key={pedido.id}>
                    <>
                    <p>Pedido: {pedido.data.plato} 
                      <button className="button">Borrar Pedido</button>
                    </p>
                    
                    </>
                </li>
            ))}

            </ul>
      </div>
    )


}
export default App