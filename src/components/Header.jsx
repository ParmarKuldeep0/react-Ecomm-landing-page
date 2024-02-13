import logo from '../assets/logo.png'
import '../App.css'
import s from '../assets/search.svg'
const Header = () => {
  
  window.onscroll = function () {
    
  }
  function scroller() {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolling = (scroll/height) * 100;
    document.getElementById("myBar").style.width = scrolling + "%"; 
  }
  return (
    <div>
      <div className='header'>
        <div className='progress-container'>
          <div className='progress-bar' id='myBar'></div>
        </div>
      </div>
        <header>
        <nav className="nav-container">
          <ul>
          <li>
              <img src={logo} alt="" className='logo' />
            </li>
            <li>Home</li>
            <li>Gifts</li>
            <li>Order</li>
            <li>Pay</li>
            <li>Store</li>
            <li>
              <img src={s} alt="" className='search-icon' />
              <input type="text" className='searchbar' placeholder="Looking for something specific" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
