import List from './components/List';
import Item from './components/Item';
import data from '../fakeApi/products.json';
import cuenta from '../fakeApi/accounts.json';
import usuarios from '../fakeApi/users.json';

function App (id) {
return (
    <>
    <List>
        {data.map((item) => (
           
                <Item key={item.id}>
                    {item.nombre}, 
                    Precio={item.precio}, 
                    Descripcion={item.descripcion}
                  
                </Item>
        ))}
        
    
    </List>
    <List>
        {cuenta.map((cuenta) => (
           
                <Item key={cuenta.account}>
                    <a target='_blank'
                    rel='noreferrer'
                    href={`https://twitter.com/${cuenta.account}`}>{cuenta.userName}</a>
                </Item>
            
        ))}
    </List>
    <List>
        {usuarios.map((usuario) => (
           
                <Item key={usuario.email}>
                   <h2>{usuario.apodo} </h2>
                   <List> 
                    {usuario.mascotas.map((mascota) => (
                        <Item key = {mascota.nombre}>
                            {mascota.nombre} ({mascota.edad}): {mascota.color}

                       </Item>
                    ))}
                    </List>
                </Item>
            
        ))}
    </List>

    </>
)
}

export default App
