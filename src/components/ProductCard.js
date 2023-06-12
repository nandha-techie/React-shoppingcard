import { useNavigate } from "react-router-dom";

export default function ProductCard(props){
    const navigate = useNavigate();
    return(
        <>
        <div className="card m-2 card_size" onClick={()=> navigate(`/product/${props.id}`)}>
            <div className="mt-2">
                <img src={props.thumbnail}
                 height={150} width={180}
                 className="border-radius-9"
                 alt={props.title} />
            </div>     
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="mt-2">Price: {`$${props.price}`}</h6>
                <h6 className="mt-2">Discount: {props.discountPercentage}%</h6>
                <h6 className="mt-2">Rating: {props.rating}</h6>
                <div>
                    {props.stock > 0 ? <button className="btn btn-success">Available</button> : <button className="btn btn-danger">Out of Stock</button>}
                </div>
            </div>
        </div>  
        </>
    )
}