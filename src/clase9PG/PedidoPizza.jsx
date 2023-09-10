import React, { useState, useEffect } from 'react';

const PedidoPizza = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // Nuevo estado para controlar si se ha realizado el pedido


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []); // El segundo argumento vacío asegura que se ejecute solo una vez al montar el componente

  useEffect(() => {
    console.log("El componente fue actualizado");
  }); // No pasamos un segundo argumento para que se ejecute en cada actualización

  const handleCancelOrder = () => {
    setIsOrderPlaced(false); // Actualizar el estado para indicar que se canceló el pedido
    alert("¡Pedido cancelado!");
   
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true); // Actualizar el estado para indicar que se realizó el pedido
  };

  return (
    <div>
      {isLoading ? (
        <p>Cargando el pedido...</p>
      ) : (
        <div>
          {isOrderPlaced ? (
            <p>Pedido realizado con éxito</p>
          ) : (
            <div>
              <p>- pizza</p>
              <button onClick={handleCancelOrder}>Cancelar Pedido</button>
              <button onClick={handlePlaceOrder}>Realizar Pedido</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PedidoPizza;