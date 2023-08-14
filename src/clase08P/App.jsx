import { useState } from "react";

const App = () => {
    const [submitted, setSubmitted] = useState()
    const [error, setError] = useState('')

    const [name, setName] = useState('')
    const [numero, setNumero] = useState (0)

    function handleSubmit(e) {
        e.preventDefault()
        if (!name) {
          console.error('Por favor, ingresa tu nombre')
          setError('Por favor, ingresa tu nombre')
          return
        }
        if (numero<0) {
          console.error('Por favor, ingresar un numero mayor que cero')
          setError('Por favor, ingresar un numero mayor que cero')
          return
        }

const favorito = {
  name,
  numero,
  }

console.log(favorito)
setSubmitted(favorito)
setName('')
setNumero(0)
setError('')
}
console.log(name, numero)

return (
    <>
    <h2>Completá los siguientes datos</h2>
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Ingresa tu nombre</label>
        <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </div>
      <div>
        <label htmlFor="numero">Ingresa tu numero favorito</label>
        <input
            type="number"
            name="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
        />
        </div>
        <button type='submit'>Enviar Numero</button>
    </form>

{error && <p>{error}</p>}
{submitted && (
  <div>
    <h2> {submitted.name} tu numero favorito es: {submitted.numero} </h2>
       
  </div>
)}
</>
)
}

export default App