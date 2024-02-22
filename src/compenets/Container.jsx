import { useDispatch, useSelector } from 'react-redux';
import './Fruit/Fruit.css'
import Nav from './Home/Nav';
import Footer from './Home/Footer'
import Cart from './Cart';
import { useEffect,useState } from 'react';
import {fetchProducts} from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart-slice';




function Container(Props) {
    const products = useSelector((state) => state.products );
    const vegetables = products.filter((product) => product.category===Props.name);
    const cart = useSelector((state) => state.cart );
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
      setIsCartVisible(!isCartVisible);
    };
    
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    },[])
    const text= Props.name == "vegetable"? "Légume": Props.name;
    return (
        <div>
            <Nav/>
            <header className="header">
                <h2>Nos {text}s</h2>
                <div className="cart-icon">
                    <i className="fa-solid fa-cart-shopping" onClick={ toggleCartVisibility}></i>
                    <span>{cart.length}</span>
                </div>
            </header>
            <div className='d-flex'>
                 <div className="container d-flex justify-content-center mt-50 mb-50">
                 {vegetables.length==0 ?<p className="empty">pas de produit  dans cette catégorie </p>: <div className="row">
                           {vegetables.map((product) => {
                               return (
                               <div key={product.id} className="col-md-4 mt-2">
       
       
                               <div className="card">
                                   <div className="card-body">
                                       <div className="card-img-actions">
       
                                           <img src={product.image} className="card-img img-fluid" style={{width:"90%",height:"350px"}} alt="" />
       
       
                                       </div>
                                   </div>
                                    
                                   <div className="card-body bg-light text-center">
                                       <div className="mb-2">
                                           <h6 className="font-weight-semibold mb-2">
                                               <a href="#" className="text-default mb-2" data-abc="true">{product.name}</a>
                                           </h6>
       
                                           <a href="#" className="text-muted" data-abc="true">{product.category}</a>
                                       </div>
       
                                       <h3 className="mb-0 font-weight-semibold">{product.prix}DH</h3>
       
                                       {/* <div>
                                           <i className="fa fa-star star"></i>
                                           <i className="fa fa-star star"></i>
                                           <i className="fa fa-star star"></i>
                                           <i className="fa fa-star star"></i>
                                       </div>
       
                                       <div className="text-muted mb-3">34 reviews</div> */}
       
                                       <button type="button" className="btn bg-cart" onClick={() =>dispatch(addToCart(product))}><i className="fa fa-cart-plus mr-2"></i>  Ajouter au carte</button>
       
       
                                   </div>
                               </div>
       
       
       
       
                           </div> )
                           })}
                          
                       </div>}
                       </div>
                       <div className='cartHolder'>{isCartVisible && <Cart toggleCartVisibility={toggleCartVisibility}/>} </div>
                 
         
            </div>
           <Footer/>
            
        </div>
    )
}
export default Container;