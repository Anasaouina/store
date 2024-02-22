
import { Link } from 'react-router-dom';
import './Nav.css'
function Nav() {
  return (
    <div>
      <nav className='sticky-top top-0 right-0'>
        <i className="fa-solid fa-list" style={{ color: "#ededf5" }}></i>
        <ul>
          <li>
            
            <Link to="/">Home</Link>
          </li>
          <li>
           
            <Link to="/fruit">Fruits</Link>
          </li>
          <li>
            <Link to="/vegetable">Légumes</Link>
          </li>
          <li>
          <Link to="/herbe">Herbes</Link>
          </li>
          <li>
            <Link to="/autres">Autres</Link>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
        <div></div>
      </nav>
    </div>
  );
}
export default Nav;
