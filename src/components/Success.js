import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Success =  ()=>{
    const [count, setCount] = useState(10);
    const navigate = useNavigate();

    useEffect(()=>{
        setInterval(()=>{
            setCount(prevcount => prevcount - 1);
        }, 1000);
        let timeId = setTimeout(()=>{
            navigate('../');
        }, 10000)
        return () => {
            clearTimeout(timeId)
        }

    }, [navigate]);

    return(
        <>
            <h3>successfully order placed. Automatically redirecting to home page {count}</h3>
        </>
    )
}
export default Success;