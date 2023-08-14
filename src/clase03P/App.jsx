import movies from '../fakeApi/movies.json'
import Header from './components/Header'

function Peliculas () {
    function edadMinima(edad) {
        console.log(`Asegurate de tener ${edad} años`)
        alert(`Asegurate de tener ${edad} años`)
    }
    return (
        <div>
            <Header />
            <h1>{movies[0].nombre}</h1>
            <p>{movies[0].genero}</p>
            <button
                onClick={() => edadMinima(movies[0].edad_minima)}
            >
            Ver Película
            </button>
        </div>
    )
}

export default Peliculas