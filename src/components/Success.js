import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Success =  ()=>{
    const [count, setCount] = useState(10);
    const navigate = useNavigate();

    useEffect(()=>{
        const timeId = setInterval(()=>{
            setCount(prevcount => prevcount - 1);
        }, 1000);
        setTimeout(()=>{
            clearInterval(timeId);
            navigate('../');
        }, 10000)
    }, [navigate]);

    return(
        <>
            <h3>successfully order placed. Automatically redirecting to home page {count}</h3>
        </>
    )
}
export default Success;