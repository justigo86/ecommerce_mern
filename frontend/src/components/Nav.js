import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div>
        <h2>Shopping Cart</h2>
      </div>
      <ul>
        <li>
          <Link to='/cart'>
            <i className="FaShoppingCart"></i>
            Cart
          </Link>
        </li>
        <li>
          <Link to='/cart'>
            Shop
          </Link>
        </li>
      </ul>
      <div className="hamburger">

      </div>
    </nav>
  )
}

export default Nav
