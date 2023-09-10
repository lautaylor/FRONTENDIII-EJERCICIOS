import { useEffect, useState } from "react";

const Interval = () => {
    const [cantidad, setCantidad] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
        setCantidad((prevState) => ++prevState);
        }, 1000);
    }, []);
    
    return <div>Quiero {cantidad} chocolates</div>;
    };
    
    export default Interval;