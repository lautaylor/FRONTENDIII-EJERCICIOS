import { useState } from "react";

const Form = (props) => {
    const [plato, setPlato] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!plato) {
          console.error('Por favor, ingresa un plato')
          setError('Por favor, ingresa un plato')
          
        } else {
            props.onSubmit({plato})
            setPlato('')
            setError('')
        }
    }
    return (
        <div>
        <form onSubmit={handleSubmit}> 
          <label htmlFor="plato">Ingresá un plato:     </label>
          <input
            type="text"
            name="plato"
            value={plato}
            onChange={(e) => setPlato(e.target.value)}
          />
          <button className="button" type='submit'>Crear Pedido</button>
        </form>
       
        
        {error && <p>{error}</p>}
        </div>
    )


}

export default Form