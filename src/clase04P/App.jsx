import Title from "./components/Title";
import List from "./components/List";
import Card from "./components/Card";
import "./styles.css";

function App () {
return(
    <div className="body">
       <Title title='GENEROS'/>
            <List>
                <li>Acción</li>
                <li>Romance</li>
                <li>Drama</li>
            </List>
       <hr></hr>
        <Title title='ACTORES'/>
        <List>
            <li>Leonardo DiCaprio</li>
            <li>Brad Pitt</li>
            <li>Tom Cruise</li>
            <li>Will Smith</li>
            <li>Julia Roberts</li>
            <li>Angelina Jolie</li>
            <li>Meryl Streep</li>
            <li>Scarlett Johansson</li>
        </List>
        <hr></hr>
        <Card>card children</Card>
      <Card title='card title'>card children</Card>
      <Card footer='card footer'>card children</Card>
      <Card title='card title' footer='card footer'>
        card children
      </Card>
    </div>
)
}

export default App