
const ProductItems = (props)=>{
    return(
        <div className="d-flex m-2 justify-content-center align-items-center">
            <div className="">
                <img src={props.thumbnail}
                height={150} width={150}
                className="border-radius-9 me-4"
                alt={props.title} />
            </div>    
            <h5 className="card-title me-4">{props.title}</h5>
            <h6 className="mt-2 me-4">Price: {`$${props.price}`}</h6>
            <button className="btn btn-danger me-3" onClick={props.incrementItem}>+</button>
            <span className="me-3" >Qty {props.count}</span>
            <button className="btn btn-danger me-4" onClick={props.decrementItem}>-</button>
            <button className="btn btn-danger me-4" onClick={props.removeItem}>Remove</button>
        </div>
    )
}

export default ProductItems;