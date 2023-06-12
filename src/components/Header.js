import { useNavigate } from "react-router-dom";
const Header = ()=>{
    const navigate = useNavigate();
    return(
        <>
            <div className="container-fluid p-3 bg-secondary">
                <h2 className="text-center text-white">New Trends</h2>
                <div className="row justify-content-center pt-2 pb-1">
                    <div className="col-ms-12 col-md-7 col-lg-6 d-inline-flex">
                        <button className="btn btn-success me-3" onClick={()=> navigate('/')}>Home</button>
                        <input type="text" className="form-control" placeholder="search functionality not implemented..." />
                        <button className="btn btn-success ms-3" onClick={()=> navigate('/cart')}>Cart</button>
                    </div>
                </div>
            </div>            
        </>
    )
}
export default Header;