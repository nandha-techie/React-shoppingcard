import { ProductList } from '../Data/ProductList';
import  ProductCard  from '../components/ProductCard';
const Dashboard = ()=>{
    return(
        <div className='d-flex flex-wrap justify-content-center'>
            { ProductList.map((product) => <ProductCard key={product.id } {...product} />) }
        </div>
    )
}
export default Dashboard; 