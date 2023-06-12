import { useSelector, useDispatch } from "react-redux";
import ProductItem from '../components/ProductItems';
import { removeItem, modifyItem } from '../redux/reducer/cart';
import { useNavigate } from "react-router-dom";


const Cart = ()=>{
    const list = useSelector((state)=> state.cart.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const incrementItem = (item)=>{
        dispatch(modifyItem({ ...item, count: item.count + 1 }));
    }
    const decrementItem = (item)=>{
        if(item.count === 1){
            dispatch(removeItem(item));
        }else{
            dispatch(modifyItem({ ...item, count: item.count - 1 }));
        }
    }
    const removeItemFromCart = (item)=>{
        dispatch(removeItem(item));
    }

    return(
        <>
            { list.length > 0 ? (
            <>    
            { list.map((item, index)=> <ProductItem key={ index } {...item} 
            incrementItem={()=>incrementItem(item)}
            decrementItem={()=>decrementItem(item)}
            removeItem={()=>removeItemFromCart(item)}
             />
             ) }
             <button className="btn btn-success" onClick={()=> navigate('/checkout')}>Go to Checkout</button>
            </>
            ) : (
                <h3>No items in the cart</h3>
            )}
        </>
    )
}

export default Cart;