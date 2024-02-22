
import dairy from '../../assets/img/dairy.png'
import fruit from '../../assets/img/fruit.webp'
import veg from '../../assets/img/legume.webp'
import herbe from '../../assets/img/herbe.webp'
import './Collections.css'
import { Link } from 'react-router-dom'

function Collections() {
    return (
        <section id="collections">
            <div className="collection-accuil fruit">
                <img src={fruit} alt=""/>
                <Link to="/Fruits"className="a-coll" >Fruits</Link>
            </div>
            <div className="collection-accuil vegetable">
                <img src={veg} alt=""/>
                    <Link className="a-coll">Légumes</Link>
            </div>
            <div className="collection-accuil herb">
                <img src={herbe} alt=""/>
                    <a className="a-coll" href="">Herbe</a>
            </div>
            <div className="collection-accuil dairy">
                <img src={dairy} alt=""/>
                    <a className="a-coll" href="">Autres</a>
            </div>

        </section>
    )
}
export default Collections;