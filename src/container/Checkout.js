import { useSelector,  } from "react-redux";
import ProductItem from '../components/ProductItems';
import { ProductList } from '../Data/ProductList';
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Checkout = ()=>{
    const [list] = useSelector((state)=> state.cart.list);
    const param = useParams();
    const [state, setState] = useState([param?.id ? { ...ProductList.find(product => product.id === parseInt(param.id)), 
    count: 1 } : list]);
    const navigate = useNavigate();
    const incrementItem = (item)=>{
        const index = state.findIndex(product => product.id === item.id);
            setState([...state.slice(0, index),
                {...state[index], count: item.count + 1},
                ...state.slice(index + 1)]);
    }
    const decrementItem = (item)=>{
        if(item.count === 1){
            removeItem(item);
        }else{
            const index = state.findIndex(product => product.id === item.id);
            setState([...state.slice(0, index),
                {...state[index], count: item.count - 1},
                ...state.slice(index + 1)]);
        }
    }
    const removeItem = (item)=>{
        const index = state.findIndex(product => product.id === item.id);
            setState([...state.slice(0, index),
                ...state.slice(index + 1)]);
    }

    return(
        <>
            { state.length > 0 ? (
            <>    
            { state.map((item, index)=> <ProductItem key={ index } {...item} 
            incrementItem={()=>incrementItem(item)}
            decrementItem={()=>decrementItem(item)}
            removeItem={()=>removeItem(item)}
             />
             ) }
             <button className="btn btn-success" onClick={()=> navigate('../success')}>Place Order</button>
            </>
            ) : (
                <h3>No items in the Checkout</h3>
            )}  
        </>
    )
}

export default Checkout;