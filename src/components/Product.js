import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from '../Data/ProductList';
import { useNavigate, useParams } from 'react-router-dom';
import { addItem } from '../redux/reducer/cart';

const Product = ()=>{
    const params = useParams();
    const navigate = useNavigate();
    const props = ProductList.find((element) => element.id === parseInt(params.id));
    const list = useSelector((state) => state.cart.list);
    const countStatus = list.find(item => item.id === props.id);
    const dispatch = useDispatch();
    const addToCart = ()=>{
        dispatch(addItem(props));
    }

    return(
        <div className="card m-2">
            <div className="mt-2">
                <img src={props.thumbnail}
                 height={300} width={350}
                 className="border-radius-9"
                 alt={props.title} />
            </div>     
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="mt-2">Price: {`$${props.price}`}</h6>
                <h6 className="mt-2">Discount: {props.discountPercentage}%</h6>
                <h6 className="mt-2">Rating: {props.rating}</h6>
                <div className='mt-4'>
                    {props.stock > 0 ? (
                    <>
                        <button className="btn btn-success" onClick={()=> navigate(`../checkout/${props.id}`)}>Buy Now</button>
                        { countStatus?.count > 0 ? (
                            <button className=" btn btn-outline-danger ms-3" onClick={()=> navigate('../cart')}>Go to Cart</button>
                            ) : (
                                    <button className="ms-3 btn btn-success" onClick={addToCart}>Add to Cart</button>
                            )
                        }
                    </> )   
                        : <button className="btn btn-danger">Out of Stock</button>}
                </div>
            </div>
        </div>
    )
}

export default Product;